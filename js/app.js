/* =========================================================================
   app.js — SPA 路由、UI 事件、互動功能
   功能對照（開發聖經 第三、四章）
     3.1 音頻：互斥播放、Space 快捷鍵
     3.4 導航：無刷新切換、localStorage 進度、錨點歸零
     4.1 填空揭示
     4.2 抽題與倒計時
     4.3 聽音辨字
     5.2 列印／導出 PDF
   ========================================================================= */

(function () {
  'use strict';

  var PAGES = window.PAGES || [];
  var CHAPTERS = window.CHAPTERS || [];
  var SPEAK_TEXT = {};                 // key → 純文字（供 TTS 朗讀）
  var SPEAK_LANG = {};                 // key → 'en'（音頻僅英語）
  var pageIndex = 0;
  var currentPage = null;
  var STORE_KEY = 'atspeech.page.v1';
  var PLEDGE_KEY = 'atspeech.pledge.v1';
  var DAY_KEY = 'atspeech.day.v1';
  var MARK_KEY = 'atspeech.mark.v1';
  var timerHandle = null;
  var activeDay = null;
  var dockTimer = null, dockLeft = 0, dockTotal = 0, dockRunning = false;
  var drawHandle = null, drawLeft = 0, drawTotal = 30;
  var marking = false;

  /* ------------------------------------------------------------ 工具 */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function stripHtml(html) {
    var s = String(html || '')
      .replace(/\[\[b:([^\]]*)\]\]/g, '$1')
      .replace(/\[\[s:([^\]|]*)(?:\|[^\]]*)?\]\]/g, '$1')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s{2,}/g, ' ')
      .trim();
    return s;
  }

  /* 純英語朗讀文本：剔除所有中文字詞與中文／全形標點，括號內只剩中文時連括號一併移除。
     規則：課件音頻僅播英語，中文翻譯與註釋不進入 TTS。 */
  function englishOnly(text) {
    var s = String(text == null ? '' : text)
      /* 含中文的括號註釋整段移除（半形／全形括號） */
      .replace(/[（(][^（）()]*[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff][^（）()]*[)）]/g, ' ')
      .replace(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g, '')   // 中文字
      .replace(/[\u3000-\u303f\uff00-\uffef]/g, ' ')              // 中文／全形標點 → 空格
      .replace(/[（(]\s*[)）]/g, ' ')                               // 清空後的空括號
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+([,.;:!?，。；：！？])/g, '$1')                   // 標點前不留白
      .replace(/^\s*[:：,，.．、；;]+/, '')
      .replace(/\s*[:：,，.．、；;]+$/, '')
      .trim();
    return s;
  }

  /* 填空 [[b:答案]] 與插槽 [[s:示範資料|示範key]] */
  function rich(html) {
    return String(html || '')
      .replace(/\[\[b:([^\]]*)\]\]/g, function (_, ans) {
        return '<button type="button" class="blank" data-answer="' + esc(ans) + '" ' +
          'aria-label="點擊顯示示範答案">______</button>';
      })
      .replace(/\[\[s:([^\]|]*)(?:\|([^\]]*))?\]\]/g, function (_, hint, key) {
        var demo = key ? ' slot--demo" aria-haspopup="dialog" data-key="' + esc(key) : '';
        return '<button type="button" class="slot' + demo + '" data-hint="' + esc(hint) + '" ' +
          'aria-label="查看示範說法">' + esc(hint) + '</button>';
      });
  }

  /* ------------------------------------------------------------ Toast */
  var toastEl, toastTimer;
  function toast(msg, kind) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.toggle('toast--warn', kind === 'warn');
    toastEl.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-show'); }, 2600);
  }
  window.UI = { toast: toast };

  /* ------------------------------------------------------------ 語音按鈕 */
  function icon(id, cls) {
    return '<svg class="' + (cls || 'btn__icon') + '" aria-hidden="true" focusable="false"><use href="#' + id + '"></use></svg>';
  }

  /* 課件音頻僅英語：中文／粵語語音按鈕一律不生成。 */
  function isChineseKey(key) {
    return /_ZH_/.test(key) || /^QUIZ_/.test(key) || /_CANTO_/.test(key);
  }

  function audioBtn(key, cls) {
    if (!key || isChineseKey(key)) return '';
    SPEAK_LANG[key] = 'en';
    return '<div class="speak-row' + (cls ? ' ' + cls : '') + '">' +
      '<button type="button" class="audio" data-audio="' + esc(key) + '" aria-pressed="false" ' +
      'aria-label="播放本段語音">' +
      icon('i-play', 'audio__icon') +
      '<span class="audio__label">播放</span>' +
      '<span class="audio__tag" style="display:none">TTS</span>' +
      '<span class="audio__bar"><span class="audio__fill"></span></span>' +
      '</button>' +
      '</div>';
  }

  /* ------------------------------------------------------------ 逐段播放 */
  /* 為每一段英文補上獨立「播放／暫停」按鈕（Material 式 inline chip） */
  function decorateSay() {
    var cands = $$('.page p, .page li, .qa__en, .blist__en');
    cands.forEach(function (el) {
      if (el.querySelector('.say')) return;
      if (el.classList.contains('zh')) return;
      if (el.closest('.quiz, .timer, .draw, .toc, .pledge, .note, .paused, .passage__note, .callout, .modal, .speak-row, .page__head, .qinfo__sec--hint, .daycard')) return;
      if (el.tagName === 'LI' && (el.closest('.qinfo__panel') || el.querySelector('.qinfo'))) return;
      var host = el.closest('.card, .example, .passage, .poem, .step');
      if (host && $('.audio', host)) {
        var multi = (host.matches('.example, .passage') && host.querySelectorAll('p').length > 1) ||
          !!el.closest('.vpanel');
        if (!multi) return;
        var blockBtn = $('.audio', host);
        if (blockBtn && !blockBtn.getAttribute('data-idle-label')) {
          blockBtn.setAttribute('data-idle-label', '全段');
          var bl = $('.audio__label', blockBtn);
          if (bl) bl.textContent = '全段';
        }
      }
      var text = englishOnly((el.textContent || '').replace(/\s+/g, ' ').trim());
      var latin = (text.match(/[A-Za-z]/g) || []).length;
      if (latin < 14) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'say';
      btn.setAttribute('data-say', text);
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', '播放這句英文');
      btn.innerHTML = icon('i-play', 'audio__icon') + '<span class="audio__label">播放</span>';
      el.appendChild(btn);
    });
  }

  /* ------------------------------------------------------------ 生詞虛線 */
  /* 英文段落中的難詞／詞組加虛線底線，點擊以瀏覽器 TTS 讀出該詞，並提示中文意思。 */
  var TERM_RE = null, TERM_ZH = {};

  function buildTermRe() {
    var list = window.TERMS || [];
    if (!list.length) return;
    TERM_ZH = {};
    var parts = list.map(function (t) {
      TERM_ZH[String(t.term).toLowerCase()] = t.zh || '';
      return String(t.term);
    });
    parts.sort(function (a, b) { return b.length - a.length; });
    var escaped = parts.map(function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
    TERM_RE = new RegExp('\\b(' + escaped.join('|') + ')\\b', 'gi');
  }

  function wrapTermsIn(node) {
    var text = node.nodeValue;
    if (!text || !TERM_RE) return;
    var frag = document.createDocumentFragment();
    var last = 0, m;
    TERM_RE.lastIndex = 0;
    while ((m = TERM_RE.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'term';
      btn.setAttribute('data-say', m[0]);
      var gloss = TERM_ZH[m[0].toLowerCase()] || '';
      if (gloss) { btn.setAttribute('data-gloss', gloss); btn.title = gloss; }
      btn.textContent = m[0];
      frag.appendChild(btn);
      last = m.index + m[0].length;
    }
    if (!last) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  function markTerms() {
    buildTermRe();
    if (!TERM_RE) return;
    var nodes = [];
    $$('.page p, .page li, .qa__en, .blist__en').forEach(function (el) {
      if (el.classList.contains('zh')) return;
      if (el.closest('.quiz, .timer, .draw, .toc, .pledge, .paused, .callout, .modal, .page__head, .note')) return;
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, { acceptNode: function () { return NodeFilter.FILTER_ACCEPT; } });
      var n;
      while ((n = walker.nextNode())) {
        var p = n.parentElement;
        if (!p) continue;
        if (p.closest('button, mark, a, .term, .zh')) continue;
        if (!/[A-Za-z]/.test(n.nodeValue)) continue;
        TERM_RE.lastIndex = 0;
        if (!TERM_RE.test(n.nodeValue)) continue;
        nodes.push(n);
      }
    });
    nodes.forEach(function (n) { if (n.parentNode) wrapTermsIn(n); });
  }

  /* 課件音頻僅英語：不再為 Tsuen Wan 切粵語分段，地名交由英語語音讀出。 */
  function splitTsuenWan(/* text */) {
    return null;
  }

  var demoEl = null, demoData = null, demoIdx = 0, demoLastFocus = null;

  function buildDemoModal() {
    if (demoEl) return demoEl;
    demoEl = document.createElement('div');
    demoEl.className = 'modal';
    demoEl.id = 'demoModal';
    demoEl.hidden = true;
    demoEl.innerHTML =
      '<div class="modal__scrim" data-modal-close></div>' +
      '<div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="demoTitle">' +
        '<div class="modal__head">' +
          '<div class="modal__headtext">' +
            '<p class="modal__eyebrow">示範句子 · 多種說法</p>' +
            '<h3 class="modal__title" id="demoTitle"></h3>' +
          '</div>' +
          '<button type="button" class="modal__close" data-modal-close aria-label="關閉示範">✕</button>' +
        '</div>' +
        '<div class="modal__tabs" role="tablist" aria-label="示範版本"></div>' +
        '<div class="modal__body" role="tabpanel" tabindex="-1" aria-live="polite"></div>' +
        '<div class="modal__foot">' +
          '<button type="button" class="audio modal__say" data-demo-say data-idle-label="播放這句" aria-pressed="false" aria-label="播放示範句子">' +
            icon('i-play', 'audio__icon') +
            '<span class="audio__label">播放這句</span>' +
            '<span class="audio__tag" style="display:none">TTS</span>' +
            '<span class="audio__bar"><span class="audio__fill"></span></span>' +
          '</button>' +
          '<button type="button" class="btn btn--primary" data-modal-close>明白，關閉</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(demoEl);
    return demoEl;
  }

  function selectDemo(i) {
    if (!demoData) return;
    demoIdx = i;
    $$('.tab', demoEl).forEach(function (b, k) {
      var on = k === i;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    var body = $('.modal__body', demoEl);
    var d = demoData.demos[i];
    body.innerHTML = '<p class="modal__text">' + d.html + '</p>' +
      (d.zh ? '<p class="zh modal__zh">' + esc(d.zh) + '</p>' : '');
    body.classList.remove('is-in');
    void body.offsetWidth;
    body.classList.add('is-in');
    AudioEngine.stopAll();
  }

  function openDemo(key, trigger) {
    var data = (window.DEMO_BANK || {})[key];
    if (!data) {
      toast('把「' + (trigger.getAttribute('data-hint') || '') + '」換成你自己的資料，再開口練習。');
      return;
    }
    buildDemoModal();
    demoData = data;
    $('#demoTitle', demoEl).textContent = data.title;
    var tabs = $('.modal__tabs', demoEl);
    tabs.innerHTML = '';
    data.demos.forEach(function (d, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.setAttribute('role', 'tab');
      b.setAttribute('data-tab', i);
      b.textContent = d.label;
      b.addEventListener('click', function () { selectDemo(i); });
      tabs.appendChild(b);
    });
    selectDemo(0);
    demoLastFocus = trigger;
    demoEl.hidden = false;
    document.body.classList.add('is-modal-open');
    requestAnimationFrame(function () { demoEl.classList.add('is-open'); });
    var first = $('.tab', tabs);
    if (first) first.focus();
  }

  function closeDemo() {
    if (!demoEl || demoEl.hidden) return;
    demoEl.classList.remove('is-open');
    document.body.classList.remove('is-modal-open');
    AudioEngine.stopAll();
    setTimeout(function () { demoEl.hidden = true; }, 200);
    if (demoLastFocus && demoLastFocus.focus) demoLastFocus.focus();
  }

  function demoOpen() { return !!(demoEl && !demoEl.hidden); }

  function trapFocus(e) {
    var panel = $('.modal__panel', demoEl);
    if (!panel) return;
    var items = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', panel)
      .filter(function (el) { return !el.disabled && el.offsetParent !== null; });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ------------------------------------------------------------ 區塊渲染 */
  var R = {};

  R.lead = function (b) { return '<p class="lead">' + rich(b.html) + '</p>'; };

  /* 中文翻譯：每段英文下面一行，字號貼近正文、深色，大電視可讀。 */
  function zhLine(zh, cls) {
    if (!zh) return '';
    return '<p class="zh' + (cls ? ' ' + cls : '') + '">' + rich(zh) + '</p>';
  }

  /* 標題／題目朗讀：只讀英文部分（遇到中文字即停） */
  function enOnly(text) {
    var s = stripHtml(text || '');
    var cut = s.search(/[\u4e00-\u9fff]/);
    if (cut > 0) s = s.slice(0, cut);
    return s.replace(/[\s:：|·]+$/, '').trim();
  }

  function titleSay(text) {
    var en = enOnly(text);
    if ((en.match(/[A-Za-z]/g) || []).length < 6) return '';
    return '<button type="button" class="say say--title" data-say="' + esc(en) + '" ' +
      'aria-pressed="false" aria-label="播放標題英文">' + icon('i-play', 'audio__icon') + '</button>';
  }

  /* 題目示範：Q_DEMO 有對應答案才顯示「看示範」 */
  function qSlug(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function qBtn(text) {
    var map = window.Q_DEMO || {};
    var raw = stripHtml(text);
    var keys = [qSlug(raw)];
    var slash = raw.indexOf('/');
    if (slash > 0) keys.push(qSlug(raw.slice(0, slash)));
    var key = keys.map(function (k) { return map[k]; }).filter(Boolean)[0];
    if (!key) return '';
    return ' <button type="button" class="pill pill--demo pill--q" data-key="' + esc(key) + '" ' +
      'aria-haspopup="dialog" aria-label="看三種示範答案">看示範 ↗</button>';
  }

  /* 閱讀理解：提示 / 參考答案 / 換句話說（漸進式揭示） */
  function qaNorm(s) {
    return String(s).replace(/<[^>]+>/g, '')
      .replace(/[\s\u3000]/g, '')
      .replace(/[，。？！、；：「」『』（）()《》〈〉「」"\u201c\u201d\u2018\u2019,\.\?\!\:\;]/g, '')
      .toLowerCase();
  }

  function qaBlock(text) {
    var list = window.Q_INFO || [];
    var n = qaNorm(text);
    var info = null;
    for (var i = 0; i < list.length; i++) {
      if (qaNorm(list[i].q) === n) { info = list[i]; break; }
    }
    if (!info) return '';
    var alts = (info.alts || []).map(function (a) {
      if (a.en) {
        return '<li><p class="qinfo__en">' + rich(a.en) + '</p>' +
          (a.zh ? '<p class="zh zh--li">' + rich(a.zh) + '</p>' : '') + '</li>';
      }
      return '<li><p class="qinfo__txt">' + rich(a.zh) + '</p></li>';
    }).join('');
    return '<div class="qinfo">' +
      '<button type="button" class="qinfo__toggle" data-qinfo aria-expanded="false">' +
      '<span class="qa__lead">提示與答案</span><span class="qa__arrow" aria-hidden="true">▾</span></button>' +
      '<div class="qinfo__panel" hidden>' +
      (info.hint ? '<div class="qinfo__sec qinfo__sec--hint"><p class="qinfo__label">提示 Hint</p>' +
        '<p class="qinfo__txt">' + rich(info.hint) + '</p></div>' : '') +
      ((info.model || info.modelEn) ? '<div class="qinfo__sec qinfo__sec--model"><p class="qinfo__label">參考答案 Model Answer</p>' +
        (info.modelEn ? '<p class="qinfo__en">' + rich(info.modelEn) + '</p>' +
          (info.modelZh ? '<p class="zh">' + rich(info.modelZh) + '</p>' : '') :
          '<p class="qinfo__txt">' + rich(info.model) + '</p>') + '</div>' : '') +
      (alts ? '<div class="qinfo__sec qinfo__sec--alt"><p class="qinfo__label">換句話說 Paraphrasing</p>' +
        '<ul class="qinfo__alts">' + alts + '</ul></div>' : '') +
      '</div></div>';
  }

  /* 示範答案三檔切換：精簡版 / 標準版 / 進階版（預設標準版） */
  function variantTabs(b, active) {
    if (!b.variants || !b.variants.length) return '';
    return '<div class="vtabs" role="tablist" aria-label="示範版本">' +
      b.variants.map(function (v, i) {
        return '<button type="button" class="vtab' + (i === active ? ' is-active' : '') + '" role="tab" ' +
          'data-vtab="' + i + '" aria-selected="' + (i === active ? 'true' : 'false') + '">' +
          esc(v.label) + '</button>';
      }).join('') + '</div>';
  }

  function variantBody(v) {
    return v.items.map(function (h, j) {
      var z = Array.isArray(v.zh) ? v.zh[j] : (j === 0 ? v.zh : '');
      return '<p>' + rich(h) + '</p>' + zhLine(z);
    }).join('');
  }

  R.h2 = function (b) {
    var en = b.en ? '<h2 class="sec__en">' + b.en + titleSay(b.en) + '</h2>' : '';
    var zh = b.zh ? '<span class="sec__zh">' + b.zh + '</span>' : '';
    return '<div class="sec"><span class="sec__bar" aria-hidden="true"></span>' + en + zh + '</div>';
  };
  R.h3 = function (b) {
    return '<h3 class="subsec">' + rich(b.text) + titleSay(b.text) + '</h3>';
  };
  R.h4 = function (b) { return '<h4 class="subsec">' + rich(b.text) + titleSay(b.text) + '</h4>'; };
  R.note = function (b) { return '<p class="note">' + rich(b.html) + '</p>'; };

  R.p = function (b) {
    var key = b.a;
    if (key) SPEAK_TEXT[key] = englishOnly(stripHtml(b.html));
    var head = key ? audioBtn(key, 'card__audio') : '';
    if (b.variants && b.variants.length) {
      var active = b.variants.length > 1 ? 1 : 0;
      var panels = b.variants.map(function (v, i) {
        return '<div class="card__body vpanel" role="tabpanel"' + (i === active ? '' : ' hidden') + '>' +
          variantBody(v) + '</div>';
      }).join('');
      return '<div class="card' + (key ? ' card--audio' : '') + '">' + head +
        variantTabs(b, active) + panels + '</div>';
    }
    return '<div class="card' + (key ? ' card--audio' : '') + '">' +
      head +
      '<div class="card__body"><p>' + rich(b.html) + '</p>' + zhLine(b.zh) + '</div></div>';
  };

  R.callout = function (b) {
    return '<div class="callout callout--' + (b.tone || 'info') + '">' +
      (b.title ? '<strong class="callout__title">' + rich(b.title) + '</strong>' : '') +
      '<div>' + rich(b.html) + '</div></div>';
  };

  R.example = function (b) {
    var key = b.a;
    var plain = (b.paragraphs || []).map(function (p) { return englishOnly(stripHtml(p)); }).join(' ');
    if (key) SPEAK_TEXT[key] = plain;
    var body;
    if (b.variants && b.variants.length) {
      var active = b.variants.length > 1 ? 1 : 0;
      body = variantTabs(b, active) + b.variants.map(function (v, i) {
        return '<div class="vpanel"' + (i === active ? '' : ' hidden') + ' role="tabpanel">' +
          variantBody(v) + '</div>';
      }).join('');
    } else {
      body = (b.paragraphs || []).map(function (p, i) {
        var z = Array.isArray(b.zh) ? b.zh[i] : (i === 0 ? b.zh : '');
        return '<p>' + rich(p) + '</p>' + zhLine(z);
      }).join('');
    }
    return '<div class="example">' +
      '<div class="card__head"><span class="example__label">' + esc(b.label || 'Example') + '</span>' +
      (key ? audioBtn(key) : '') + '</div>' +
      body +
      (b.note ? '<p class="example__note">' + rich(b.note) + '</p>' : '') +
      '</div>';
  };

  R.steps = function (b) {
    var key = b.a;
    if (key) SPEAK_TEXT[key] = englishOnly(b.items.map(function (it) { return it.tag + ': ' + stripHtml(it.html); }).join(' '));
    var items = b.items.map(function (it) {
      var long = String(it.tag).length > 10;
      if (long) {
        return '<div class="step step--label">' +
          '<div class="step__body"><span class="step__label">' + esc(it.tag) + '</span>' +
          '<div>' + rich(it.html) + '</div>' + zhLine(it.zh) + '</div></div>';
      }
      return '<div class="step"><span class="step__tag">' + esc(it.tag) + '</span>' +
        '<div class="step__body"><div>' + rich(it.html) + '</div>' + zhLine(it.zh) + '</div></div>';
    }).join('');
    return '<div class="steps">' + items + '</div>' + (key ? audioBtn(key) : '');
  };

  R.ul = function (b) {
    var items = b.items.map(function (it, i) {
      return '<li>' + rich(it) + (b.zhItems && b.zhItems[i] ? '<p class="zh zh--li">' + rich(b.zhItems[i]) + '</p>' : '') + '</li>';
    }).join('');
    return '<div class="card"><div class="card__body"><ul class="list list--ul">' + items + '</ul></div></div>';
  };

  R.ol = function (b) {
    var start = b.start ? ' start="' + b.start + '"' : '';
    var items = b.items.map(function (it, i) {
      return '<li>' + rich(it) + qBtn(it) +
        (b.zhItems && b.zhItems[i] ? '<p class="zh zh--li">' + rich(b.zhItems[i]) + '</p>' : '') +
        qaBlock(it) + '</li>';
    }).join('');
    return '<div class="card"><div class="card__body"><ol class="list list--ol"' + start + '>' + items + '</ol></div></div>';
  };

  /* 詞庫膠囊：若 DEMO_BANK 有對應詞條（word:xxx），渲染成可點按鈕，點擊開示範彈窗。 */
  function wordKey(text) {
    var plain = String(text).replace(/<[^>]*>/g, '').replace(/\[\s*\[[^\]]*\]\s*\]/g, ' ');
    var cut = plain.search(/[\u3400-\u9FFF\uF900-\uFAFF]/);
    var en = cut >= 0 ? plain.slice(0, cut) : plain;
    en = en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return en ? 'word:' + en : '';
  }

  R.pills = function (b) {
    var bank = window.DEMO_BANK || {};
    var chips = b.items.map(function (it) {
      var key = wordKey(it);
      if (key && bank[key]) {
        return '<button type="button" class="pill pill--demo" data-key="' + esc(key) +
          '" aria-haspopup="dialog" title="點擊看三句示範">' + rich(it) +
          '<span class="pill__more" aria-hidden="true">↗</span></button>';
      }
      return '<span class="pill">' + rich(it) + '</span>';
    }).join('');
    return '<div class="pills">' + (b.label ? '<span class="pills__label">' + esc(b.label) + '</span>' : '') + chips + '</div>';
  };

  R.passage = function (b) {
    var key = b.a;
    var plain = (b.paragraphs || []).map(function (p) { return englishOnly(stripHtml(p)); }).join(' ');
    if (key) SPEAK_TEXT[key] = plain;
    var cls = 'passage' + (b.tone === 'quote' || b.highlight ? ' passage--quote' : '');
    var indent = b.tone === 'quote' ? ' passage__body--noindent' : '';
    var body = (b.paragraphs || []).map(function (p, i) {
      var z = Array.isArray(b.zh) ? b.zh[i] : (i === 0 ? b.zh : '');
      return '<p>' + rich(p) + '</p>' + zhLine(z);
    }).join('');
    return '<div class="' + cls + '">' +
      '<div class="card__head">' +
      (b.title ? '<h4 class="passage__title">' + rich(b.title) + '</h4>' : '<span class="sr-only">段落</span>') +
      (key ? audioBtn(key) : '') + '</div>' +
      '<div class="passage__body' + indent + '">' + body + '</div>' +
      (b.source ? '<div class="passage__source">' + esc(b.source) + '</div>' : '') +
      (b.note ? '<div class="passage__note">' + rich(b.note) + '</div>' : '') +
      '</div>';
  };

  /* 停頓／強調示範 */
  R.paused = function (b) {
    var emph = b.emphasis || [];
    var text = String(b.text || '');
    var html = '';
    var buf = '';
    var tokens = text.split('/');
    tokens.forEach(function (tk, i) {
      html += marker(tk, emph);
      if (i < tokens.length - 1) html += '<span class="pause-mark" aria-hidden="true"></span>';
    });
    function marker(seg, list) {
      if (!list.length) return esc(seg);
      var out = esc(seg);
      list.forEach(function (w) {
        var safe = esc(w);
        out = out.split(safe).join('<span class="emphasis">' + safe + '</span>');
      });
      return out;
    }
    return '<div class="paused card__body" data-paused>' +
      '<div class="card__head">' +
      '<span class="passage__title">' + esc(b.label || '朗讀示範') + '</span>' +
      '<button type="button" class="btn btn--ghost btn--sm" data-pause-toggle aria-pressed="false">顯示停頓</button>' +
      '</div>' +
      '<p class="readText">' + html + '</p></div>';
  };

  R.table = function (b) {
    var head = '<tr>' + b.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') + '</tr>';
    var rows = b.rows.map(function (r) {
      return '<tr>' + r.map(function (c, i) { return i === 0 ? '<th scope="row">' + esc(c) + '</th>' : '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
    }).join('');
    return '<div class="table-wrap"><table class="table"><thead>' + head + '</thead><tbody>' + rows + '</tbody></table></div>';
  };

  R.soundGroups = function (b) {
    var cards = b.items.map(function (it) {
      var cols = it.cols.map(function (c) {
        return '<div class="sound__col"><span class="sound__k">' + esc(c.k) + '</span>' +
          '<span class="sound__v">' + esc(c.v) + '</span></div>';
      }).join('');
      return '<div class="sound">' +
        '<div class="sound__head"><span class="sound__no">' + esc(it.no) + '</span>' +
        '<span class="sound__title">' + esc(it.title) + '</span>' +
        (it.note ? '<span class="sound__note">' + esc(it.note) + '</span>' : '') + '</div>' +
        '<div class="sound__cols">' + cols + '</div></div>';
    }).join('');
    return '<div class="sounds">' + cards + '</div>';
  };

  R.poem = function (b) {
    var key = b.a;
    if (key) SPEAK_TEXT[key] = englishOnly([b.title].concat(b.lines).join(' '));
    return '<div class="poem">' +
      '<div class="card__head"><h4 class="poem__title">' + esc(b.title) + '</h4>' + (key ? audioBtn(key) : '') + '</div>' +
      '<p class="poem__lines">' + b.lines.map(function (l) { return esc(l); }).join('<br>') + '</p>' +
      (b.credit ? '<div class="poem__credit">' + esc(b.credit) + '</div>' : '') +
      '</div>';
  };

  R.toc = function (b) {
    var items = b.items.map(function (it) {
      return '<a class="toc__item" href="#' + esc(it.page) + '" data-jump="' + esc(it.page) + '">' +
        '<span class="toc__no">P.' + esc(it.num) + '</span>' +
        '<span><span class="toc__en">' + esc(it.en) + '</span><br><span class="toc__zh">' + esc(it.zh) + '</span></span>' +
        '</a>';
    }).join('');
    var sub = (b.items.filter(function (i) { return i.sub; })[0] || {}).sub || [];
    return '<div class="toc">' + items + '</div>' +
      (sub.length ? '<div class="callout callout--info"><strong class="callout__title">附錄內容</strong><ul class="callout__list">' +
        sub.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>' : '');
  };

  function compactPages(ids) {
    var nums = ids.map(function (id) { return parseInt(String(id).replace(/^P/, ''), 10); })
      .filter(function (n) { return !isNaN(n); }).sort(function (a, b) { return a - b; });
    var out = [], i = 0;
    while (i < nums.length) {
      var j = i;
      while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++;
      out.push('P.' + (nums[i] < 10 ? '0' + nums[i] : nums[i]) +
        (j > i ? '–P.' + (nums[j] < 10 ? '0' + nums[j] : nums[j]) : ''));
      i = j + 1;
    }
    return out.join('、');
  }

  R.days = function () {
    var days = window.COURSE_DAYS || [];
    if (!days.length) return '';
    var cards = days.map(function (d) {
      var pages = d.pages || [];
      var range = compactPages(pages);
      var items = (d.detail || []).map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('');
      return '<article class="daycard" data-daycard="' + esc(d.id) + '">' +
        '<div class="daycard__top"><span class="daycard__tab">' + esc(d.tab) + '</span>' +
        '<span class="daycard__date">' + esc(d.date) + '</span></div>' +
        '<h3 class="daycard__en">' + esc(d.en) + '</h3>' +
        '<p class="daycard__zh">' + esc(d.zh) + '</p>' +
        '<p class="daycard__sum">' + esc(d.summary) + '</p>' +
        '<ul class="daycard__list">' + items + '</ul>' +
        '<div class="daycard__foot"><span class="daycard__pages">' + esc(range) + '　' + pages.length + ' 頁</span>' +
        '<button type="button" class="btn btn--primary btn--sm" data-day-jump="' + esc(d.id) + '">開始 ' + esc(d.tab) + '</button></div>' +
        '</article>';
    }).join('');
    return '<div class="days" role="list">' + cards + '</div>';
  };

  R.pledge = function (b, page) {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(PLEDGE_KEY) || '{}'); } catch (e) { saved = {}; }
    var items = b.items.map(function (it, i) {
      var done = !!saved[i];
      return '<div class="pledge__item' + (done ? ' is-done' : '') + '" role="checkbox" tabindex="0" ' +
        'aria-checked="' + (done ? 'true' : 'false') + '" data-pledge="' + i + '">' +
        '<span class="pledge__box" aria-hidden="true">✓</span>' +
        '<span class="pledge__text">' + esc(it.text) + '</span></div>';
    }).join('');
    return '<div class="pledge" data-pledge-list>' + items + '</div>';
  };

  R.qa = function (b) {
    var start = b.start || 1;
    var items = b.items.map(function (it, i) {
      return '<div class="qa__item"><span class="qa__no">' + (start + i) + '.</span>' +
        '<div><div class="qa__en">' + esc(it.en) + '</div>' +
        '<div class="qa__zh">' + esc(it.zh) + '</div></div></div>';
    }).join('');
    return '<div class="qa">' + items + '</div>';
  };

  R.bilingualList = function (b) {
    var items = b.items.map(function (it) {
      return '<div class="blist__item"><div><div class="blist__zh">' + esc(it.zh) + '</div>' +
        '<span class="blist__en">' + esc(it.en) + '</span></div></div>';
    }).join('');
    return '<div class="blist">' + items + '</div>';
  };

  /* 抽題 */
  R.draw = function (b) {
    return '<div class="draw" data-draw>' +
      '<div class="draw__topic draw__topic--empty" data-draw-topic>按「抽題」開始</div>' +
      '<div class="draw__actions">' +
      '<button type="button" class="btn btn--primary btn--lg" data-draw-go>' + icon('i-dice') + '抽題</button>' +
      '<button type="button" class="btn btn--ghost" data-draw-demo hidden>看三種示範 ↗</button>' +
      '<button type="button" class="btn btn--ghost" data-draw-clear>清除</button>' +
      '</div></div>';
  };

  /* 倒計時 */
  R.timer = function (b) {
    var secs = b.seconds || 30;
    return '<div class="timer" data-timer data-seconds="' + secs + '">' +
      '<div class="timer__digits" data-timer-digits aria-live="off">' + fmt(secs) + '</div>' +
      '<div class="timer__toast" data-timer-note aria-live="polite"></div>' +
      '<div class="timer__actions">' +
      '<button type="button" class="btn btn--primary btn--lg" data-timer-start>' + icon('i-play') + '開始</button>' +
      '<button type="button" class="btn btn--ghost" data-timer-reset>重設</button>' +
      '<label class="btn btn--ghost" style="cursor:default">時限' +
      '<select data-timer-set style="margin-left:8px;font:inherit;background:transparent;border:0;font-weight:700">' +
      '<option value="30">30 秒</option><option value="45">45 秒</option><option value="60">60 秒</option>' +
      '</select></label>' +
      '</div>' +
      '<p class="timer__note">快捷鍵：Space 播放／暫停語音，← → 切換頁面。</p>' +
      '</div>';
  };

  /* 聽音辨字 */
  R.quiz = function (b) {
    var cards = b.items.map(function (it, qi) {
      var key = 'QUIZ_' + qi + '_' + it.text;
      SPEAK_TEXT[key] = englishOnly(it.text);
      var opts = it.options.map(function (o, oi) {
        return '<button type="button" class="quiz__opt" data-opt="' + oi + '" data-right="' + it.answer + '">' + esc(o) + '</button>';
      }).join('');
      return '<div class="quiz__card" data-hint-text="' + esc(it.hint || '') + '">' +
        '<div class="quiz__top"><span class="quiz__no">第 ' + (qi + 1) + ' 題</span>' + audioBtn(key) + '</div>' +
        '<div class="quiz__opts">' + opts + '</div>' +
        '<div class="quiz__hint" data-hint aria-live="polite"></div>' +
        '</div>';
    }).join('');
    return '<div class="quiz" data-quiz>' + cards + '</div>';
  };

  function fmt(s) {
    var m = Math.floor(Math.max(0, s) / 60);
    var r = Math.max(0, s) % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  function renderBlock(b, page) {
    var fn = R[b.type];
    if (!fn) return '';
    var out = fn(b, page);
    if (!out) return '';
    /* 以區塊序號給動畫延遲，避免一次全出現 */
    return out;
  }

  /* ------------------------------------------------------------ 頁面組裝 */
  function pageHTML(p) {
    var blocks = p.blocks.map(function (b) { return renderBlock(b, p); }).join('');
    return '<section class="page" id="' + p.id + '" aria-labelledby="t-' + p.id + '" data-page="' + p.id + '">' +
      '<header class="page__head">' +
      '<div class="page__titles">' +
      '<div class="page__kicker">' + esc(p.kicker || '') + '</div>' +
      '<h1 class="page__title" id="t-' + p.id + '">' + esc(p.en) + '</h1>' +
      (p.zh ? '<p class="page__title-zh">' + esc(p.zh) + '</p>' : '') +
      '</div>' +
      '</header>' + blocks + '</section>';
  }

  function buildPages() {
    $('#stage').innerHTML = PAGES.map(pageHTML).join('');
  }

  /* ------------------------------------------------------------ 側邊導航 */
  function buildNav() {
    var groups = CHAPTERS.map(function (c, ci) {
      var pages = PAGES.filter(function (p) { return p.chapter === c.id; });
      if (!pages.length) return '';
      var links = pages.map(function (p) {
        return '<a class="nav__link" href="#' + p.id + '" data-jump="' + p.id + '">' +
          '<span class="pnum">P.' + p.num + '</span><span>' + esc(p.zh) + '</span></a>';
      }).join('');
      return '<div class="nav__group">' +
        '<button type="button" class="nav__chapter" aria-expanded="' + (ci === 0 ? 'true' : 'false') + '" data-chapter="' + c.id + '">' +
        '<span class="nav__num">' + (ci + 1) + '</span>' +
        '<span class="nav__label">' + esc(c.en) + '<small>' + esc(c.zh) + '</small></span>' +
        '</button>' +
        '<div class="nav__pages" data-pages="' + c.id + '">' + links + '</div></div>';
    }).join('');
    $('#nav').innerHTML = groups;
  }

  /* ------------------------------------------------------------ 四天日程 */
  function dayById(id) {
    return (window.COURSE_DAYS || []).filter(function (d) { return d.id === id; })[0] || null;
  }

  function dayPages(id) {
    var d = dayById(id);
    if (!d) return PAGES.slice();
    var set = {};
    (d.pages || []).forEach(function (pid) { set[pid] = true; });
    return PAGES.filter(function (p) { return set[p.id]; });
  }

  function buildDayBar() {
    var bar = $('#dayBar');
    if (!bar) return;
    var days = window.COURSE_DAYS || [];
    bar.innerHTML = '<button type="button" class="daychip is-active" data-day="all" aria-selected="true">全部 28 頁</button>' +
      days.map(function (d) {
        return '<button type="button" class="daychip" data-day="' + esc(d.id) + '" aria-selected="false">' +
          '<span class="daychip__tab">' + esc(d.tab) + '</span>' +
          '<span class="daychip__date">' + esc(d.date) + '</span>' +
          '<span class="daychip__zh">' + esc(d.zh) + '</span></button>';
      }).join('');
  }

  function applyDay() {
    $$('#dayBar .daychip').forEach(function (b) {
      var on = (b.getAttribute('data-day') === 'all' && !activeDay) ||
        (activeDay && b.getAttribute('data-day') === activeDay);
      b.classList.toggle('is-active', !!on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });

    var allowed = {};
    if (activeDay) dayPages(activeDay).forEach(function (p) { allowed[p.id] = true; });

    $$('.nav__link').forEach(function (a) {
      var pid = a.getAttribute('data-jump');
      a.hidden = !!activeDay && !allowed[pid];
    });
    $$('.nav__group').forEach(function (g) {
      var any = $$('.nav__link', g).some(function (a) { return !a.hidden; });
      g.hidden = !any;
      if (any && activeDay) {
        var ch = $('.nav__chapter', g);
        if (ch) ch.setAttribute('aria-expanded', 'true');
      }
    });

    if (activeDay) {
      var d = dayById(activeDay);
      var pages = dayPages(activeDay);
      var pos = pages.findIndex(function (p) { return currentPage && p.id === currentPage.id; });
      if ($('#progressPage')) {
        $('#progressPage').textContent = (currentPage ? 'P.' + currentPage.num : '—') +
          (pos >= 0 ? '　' + (pos + 1) + '/' + pages.length : '');
      }
      if (d) dockSetPreset(d.preset);
    } else if (currentPage && $('#progressPage')) {
      $('#progressPage').textContent = 'P.' + currentPage.num;
    }
    syncPager();
  }

  function setDay(id) {
    if (id && id !== 'all' && !dayById(id)) id = null;
    activeDay = (id && id !== 'all') ? id : null;
    try { localStorage.setItem(DAY_KEY, activeDay || ''); } catch (e) { /* 忽略 */ }
    applyDay();
    if (!activeDay) return;
    var pages = dayPages(activeDay);
    if (pages.length && (!currentPage || !pages.some(function (p) { return p.id === currentPage.id; }))) {
      goTo(pages[0].id, { dayLock: true });
    }
    var d = dayById(activeDay);
    if (d) toast('已切換至 ' + d.tab + '（' + d.date + '）：' + d.zh + '，共 ' + pages.length + ' 頁。');
  }


  function goTo(id, opts) {
    if (demoOpen()) closeDemo();
    if (activeDay && !dayPages(activeDay).some(function (p) { return p.id === id; })) {
      activeDay = null;
      try { localStorage.setItem(DAY_KEY, ''); } catch (e) { /* 忽略 */ }
    }
    var idx = PAGES.findIndex(function (p) { return p.id === id; });
    if (idx < 0) idx = 0;
    pageIndex = idx;
    var p = PAGES[idx];
    currentPage = p;

    $$('.page').forEach(function (sec) { sec.classList.remove('is-active'); });
    var target = document.getElementById(p.id);
    if (target) target.classList.add('is-active');

    $$('.nav__link').forEach(function (a) {
      var on = a.getAttribute('data-jump') === p.id;
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    $$('.nav__chapter').forEach(function (btn) {
      var on = btn.getAttribute('data-chapter') === p.chapter;
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    });

    $('#crumbChapter').textContent = chapterName(p.chapter);
    $('#crumbTitle').textContent = p.zh || p.en;
    $('#pageBadge').textContent = 'P.' + p.num;
    $('#progressPage').textContent = 'P.' + p.num;
    $('#progressFill').style.width = ((idx + 1) / PAGES.length * 100).toFixed(1) + '%';

    $$('.pager__dot').forEach(function (d, i) {
      d.classList.toggle('is-current', i === idx);
      d.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
    syncPager();
    applyDay();

    if (!opts || opts.scroll !== false) window.scrollTo(0, 0);
    try { localStorage.setItem(STORE_KEY, p.id); } catch (e) { /* 私密模式 */ }
    try {
      if (history.replaceState) history.replaceState(null, '', '#' + p.id);
    } catch (e) { /* file:// 或受限環境不支援改寫網址 */ }

    AudioEngine.stopAll();
    stopTimer();
    closeSidebar();
  }

  function chapterName(cid) {
    var c = CHAPTERS.filter(function (x) { return x.id === cid; })[0];
    if (!c) return '';
    return c.en + '　' + c.zh;
  }

  function navList() { return activeDay ? dayPages(activeDay) : PAGES; }
  function syncPager() {
    if (!currentPage) return;
    var list = navList();
    var pos = list.findIndex(function (x) { return x.id === currentPage.id; });
    var countText = (pos >= 0 ? pos + 1 : '—') + ' / ' + list.length;
    if ($('#pagerCount')) $('#pagerCount').textContent = countText;
    if ($('#pagerCountBottom')) $('#pagerCountBottom').textContent = countText;
    $$('[data-prev]').forEach(function (b) { b.disabled = pos <= 0; });
    $$('[data-next]').forEach(function (b) { b.disabled = pos < 0 || pos >= list.length - 1; });
  }
  function next() {
    var list = navList();
    var i = list.indexOf(currentPage);
    if (i >= 0 && i < list.length - 1) goTo(list[i + 1].id);
  }
  function prev() {
    var list = navList();
    var i = list.indexOf(currentPage);
    if (i > 0) goTo(list[i - 1].id);
  }

  /* ------------------------------------------------------------ 互動功能 */
  function revealBlank(btn) {
    if (btn.classList.contains('is-revealed')) return;
    var ans = btn.getAttribute('data-answer');
    btn.textContent = ans;
    btn.classList.add('is-revealed');
    btn.setAttribute('aria-label', '答案：' + ans);
    var key = btn.closest('.card') && btn.closest('.card').getAttribute('data-audio-key');
    AudioEngine.ding();
  }

  /* 抽題 */
  function drawTopic(drawEl) {
    var bank = (window.DRAW_BANK && window.DRAW_BANK.impromptu) || [];
    if (!bank.length) return;
    var box = $('[data-draw-topic]', drawEl);
    var last = drawEl.getAttribute('data-last') || '';
    var pick = '';
    for (var i = 0; i < 12; i++) {
      pick = bank[Math.floor(Math.random() * bank.length)];
      if (pick !== last) break;
    }
    drawEl.setAttribute('data-last', pick);
    box.textContent = pick;
    box.classList.remove('draw__topic--empty');
    var demoBtn = $('[data-draw-demo]', drawEl);
    if (demoBtn) {
      var map = window.Q_DEMO || {};
      var qk = map[qSlug(pick)];
      if (qk) { demoBtn.setAttribute('data-qkey', qk); demoBtn.hidden = false; }
      else { demoBtn.removeAttribute('data-qkey'); demoBtn.hidden = true; }
    }
    AudioEngine.ding();
  }

  /* 倒計時 */
  function startTimer(timerEl) {
    stopTimer();
    var total = parseInt(timerEl.getAttribute('data-seconds'), 10) || 30;
    var left = total;
    var digits = $('[data-timer-digits]', timerEl);
    var note = $('[data-timer-note]', timerEl);
    timerEl.classList.remove('is-warn', 'is-done');
    note.textContent = '';
    digits.textContent = fmt(left);

    timerHandle = setInterval(function () {
      left -= 1;
      digits.textContent = fmt(left);
      if (left <= 5 && left > 0) timerEl.classList.add('is-warn');
      if (left <= 0) {
        clearInterval(timerHandle); timerHandle = null;
        timerEl.classList.remove('is-warn');
        timerEl.classList.add('is-done');
        digits.textContent = '00:00';
        note.textContent = "Time\u2019s up!";
        AudioEngine.beep();
      }
    }, 1000);
  }

  function resetTimer(timerEl) {
    stopTimer();
    var total = parseInt(timerEl.getAttribute('data-seconds'), 10) || 30;
    timerEl.classList.remove('is-warn', 'is-done');
    $('[data-timer-digits]', timerEl).textContent = fmt(total);
    $('[data-timer-note]', timerEl).textContent = '';
  }

  function stopTimer() {
    if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  }

  /* ------------------------------------------------------------ 課堂工具 dock */
  function buildDock() {
    if ($('#dock')) return;
    var el = document.createElement('div');
    el.className = 'dock';
    el.id = 'dock';
    el.innerHTML =
      '<div class="dock__panel" data-dock-panel hidden>' +
      '<div class="dock__head"><span class="dock__title">課堂計時</span>' +
      '<button type="button" class="dock__x" data-dock-close aria-label="收起計時器">×</button></div>' +
      '<div class="dock__digits" data-dock-digits aria-live="off">23:00</div>' +
      '<div class="dock__presets">' +
      '<button type="button" data-dock-preset="1380">23 分</button>' +
      '<button type="button" data-dock-preset="1200">20 分</button>' +
      '<button type="button" data-dock-preset="900">15 分</button>' +
      '<button type="button" data-dock-preset="180">3 分</button>' +
      '<button type="button" data-dock-preset="60">60 秒</button>' +
      '<button type="button" data-dock-preset="30">30 秒</button>' +
      '</div>' +
      '<div class="dock__actions">' +
      '<button type="button" class="dock__btn dock__btn--main" data-dock-start>開始</button>' +
      '<button type="button" class="dock__btn" data-dock-reset>重設</button>' +
      '</div>' +
      '<p class="dock__note" data-dock-note>最後 3 分鐘轉橙、最後 1 分鐘轉紅。</p>' +
      '</div>' +
      '<div class="dock__bar">' +
      '<button type="button" class="dock__chip" data-dock-timer>' + icon('i-play', 'dock__ico') +
      '<span>計時</span><span class="dock__mini" data-dock-mini hidden></span></button>' +
      '<button type="button" class="dock__chip" data-dock-draw>' + icon('i-dice', 'dock__ico') + '抽題</button>' +
      '<button type="button" class="dock__chip" data-dock-mark>標重點</button>' +
      '</div>';
    document.body.appendChild(el);
  }

  function dockDigits() {
    var d = $('#dock') && $('[data-dock-digits]', $('#dock'));
    if (d) d.textContent = fmt(dockLeft);
    var mini = $('[data-dock-mini]');
    if (mini) {
      var show = dockTotal > 0 && (dockRunning || dockLeft !== dockTotal);
      mini.textContent = fmt(dockLeft);
      mini.hidden = !show;
    }
  }

  function dockSetPreset(sec) {
    if (dockRunning) return;
    dockTotal = sec; dockLeft = sec;
    dockDigits();
    var note = $('[data-dock-note]');
    if (note) {
      note.textContent = sec >= 900 ? '最後 3 分鐘轉橙、最後 1 分鐘轉紅。' :
        (sec >= 60 ? '最後 10 秒轉橙、最後 5 秒轉紅。' : '最後 10 秒轉橙、最後 5 秒轉紅。');
    }
  }

  function dockStart() {
    var btn = $('[data-dock-start]');
    if (dockRunning) {
      clearInterval(dockTimer); dockTimer = null; dockRunning = false;
      if (btn) btn.textContent = '繼續';
      return;
    }
    if (dockLeft <= 0) dockLeft = dockTotal || 30;
    dockRunning = true;
    if (btn) btn.textContent = '暫停';
    var wrap = $('#dock');
    wrap.classList.remove('is-warn', 'is-alert', 'is-done');
    dockTimer = setInterval(function () {
      dockLeft -= 1;
      dockDigits();
      var warnAt = dockTotal > 300 ? 180 : 10;
      var alertAt = dockTotal > 300 ? 60 : 5;
      wrap.classList.toggle('is-warn', dockLeft <= warnAt && dockLeft > alertAt);
      wrap.classList.toggle('is-alert', dockLeft <= alertAt && dockLeft > 0);
      if (dockLeft <= 0) {
        clearInterval(dockTimer); dockTimer = null; dockRunning = false;
        wrap.classList.remove('is-warn', 'is-alert');
        wrap.classList.add('is-done');
        dockLeft = 0; dockDigits();
        if (btn) btn.textContent = '開始';
        AudioEngine.beep();
        toast('時間到。', 'warn');
      }
    }, 1000);
  }

  function dockReset() {
    if (dockTimer) { clearInterval(dockTimer); dockTimer = null; }
    dockRunning = false;
    dockLeft = dockTotal || 30;
    var wrap = $('#dock');
    wrap.classList.remove('is-warn', 'is-alert', 'is-done');
    var btn = $('[data-dock-start]'); if (btn) btn.textContent = '開始';
    dockDigits();
  }

  /* ------------------------------------------------------------ 全屏抽題 */
  function buildDrawModal() {
    if ($('#drawModal')) return;
    var el = document.createElement('div');
    el.className = 'drawmodal';
    el.id = 'drawModal';
    el.hidden = true;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', '即席說話抽題');
    el.innerHTML =
      '<div class="drawmodal__panel">' +
      '<div class="drawmodal__top"><span class="drawmodal__tag">即席說話 · 抽題</span>' +
      '<button type="button" class="drawmodal__x" data-draw-modal-close aria-label="關閉抽題">×</button></div>' +
      '<div class="drawmodal__topic" data-om-topic aria-live="polite">按「抽題」開始</div>' +
      '<div class="drawmodal__meta">30 秒準備 · 1 分鐘作答</div>' +
      '<div class="drawmodal__ring" data-om-ring>' +
      '<svg viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle class="ring__bg" cx="60" cy="60" r="52"></circle>' +
      '<circle class="ring__fg" cx="60" cy="60" r="52"></circle>' +
      '</svg><span class="drawmodal__time" data-om-time>00:30</span></div>' +
      '<div class="drawmodal__actions">' +
      '<button type="button" class="btn btn--primary btn--lg" data-draw-again>' + icon('i-dice') + '再抽一題</button>' +
      '<button type="button" class="btn btn--ghost" data-draw-timer>30 秒</button>' +
      '<button type="button" class="btn btn--ghost" data-draw-demo hidden>看三種示範 ↗</button>' +
      '</div></div>';
    document.body.appendChild(el);
  }

  function drawRingSet(left, total) {
    var fg = $('#drawModal .ring__fg');
    if (!fg) return;
    var c = 2 * Math.PI * 52;
    fg.style.strokeDasharray = c;
    var pct = total ? left / total : 0;
    fg.style.strokeDashoffset = c * (1 - pct);
    var t = $('[data-om-time]');
    if (t) t.textContent = fmt(left);
  }

  function drawStart(sec) {
    if (drawHandle) { clearInterval(drawHandle); drawHandle = null; }
    drawTotal = sec; drawLeft = sec;
    drawRingSet(drawLeft, drawTotal);
    $('#drawModal').classList.remove('is-alert');
    drawHandle = setInterval(function () {
      drawLeft -= 1;
      drawRingSet(drawLeft, drawTotal);
      if (drawLeft <= 5) $('#drawModal').classList.add('is-alert');
      if (drawLeft <= 0) {
        clearInterval(drawHandle); drawHandle = null;
        $('#drawModal').classList.add('is-alert');
        AudioEngine.beep();
      }
    }, 1000);
  }

  function drawPick() {
    var bank = (window.DRAW_BANK && window.DRAW_BANK.impromptu) || [];
    var box = $('[data-om-topic]');
    if (!bank.length || !box) return;
    var last = $('#drawModal').getAttribute('data-last') || '';
    var pick = '';
    for (var i = 0; i < 12; i++) {
      pick = bank[Math.floor(Math.random() * bank.length)];
      if (pick !== last) break;
    }
    $('#drawModal').setAttribute('data-last', pick);
    box.textContent = pick;
    AudioEngine.toggle(null, pick, null, 'en');
    drawStart(30);
    var demo = $('[data-draw-demo]', $('#drawModal'));
    var map = window.Q_DEMO || {};
    var qk = map[qSlug(pick)];
    if (demo) {
      if (qk) { demo.setAttribute('data-qkey', qk); demo.hidden = false; }
      else { demo.removeAttribute('data-qkey'); demo.hidden = true; }
    }
  }

  function openDraw() {
    buildDrawModal();
    var el = $('#drawModal');
    el.hidden = false;
    document.body.classList.add('is-overlay');
    drawPick();
    var x = $('[data-draw-modal-close]', el);
    if (x) x.focus();
  }

  function closeDraw() {
    var el = $('#drawModal');
    if (!el || el.hidden) return;
    el.hidden = true;
    document.body.classList.remove('is-overlay');
    if (drawHandle) { clearInterval(drawHandle); drawHandle = null; }
    AudioEngine.stopAll();
  }

  function drawOpenNow() { return !!$('#drawModal') && !$('#drawModal').hidden; }

  /* ------------------------------------------------------------ 段落標重點 */
  function loadMarks() {
    try { return JSON.parse(localStorage.getItem(MARK_KEY) || '{}'); } catch (e) { return {}; }
  }

  function saveMarks(state) {
    try { localStorage.setItem(MARK_KEY, JSON.stringify(state)); } catch (e) { /* 忽略 */ }
  }

  function applyMarks() {
    var state = loadMarks();
    PAGES.forEach(function (p) {
      var ids = state[p.id] || [];
      var els = $$('#' + p.id + ' p, #' + p.id + ' li');
      ids.forEach(function (i) { if (els[i]) els[i].classList.add('is-marked'); });
    });
  }

  function toggleMark(el) {
    var sec = el.closest('.page');
    if (!sec) return;
    var els = $$('p, li', sec);
    var i = els.indexOf(el);
    if (i < 0) return;
    var state = loadMarks();
    var arr = state[sec.id] || [];
    var at = arr.indexOf(i);
    if (at >= 0) { arr.splice(at, 1); el.classList.remove('is-marked'); }
    else { arr.push(i); el.classList.add('is-marked'); }
    state[sec.id] = arr;
    saveMarks(state);
    AudioEngine.ding();
  }

  function setMarking(on) {
    marking = !!on;
    document.body.classList.toggle('is-marking', marking);
    var b = $('[data-dock-mark]');
    if (b) { b.classList.toggle('is-active', marking); b.setAttribute('aria-pressed', marking ? 'true' : 'false'); }
  }

  /* ------------------------------------------------------------ 事件綁定 */
  function bindEvents() {
    /* 點擊代理 */
    document.addEventListener('click', function (e) {
      var t = e.target;

      if (t.id === 'drawModal') { closeDraw(); return; }

      if (marking) {
        var mt = t.closest('.page.is-active p, .page.is-active li');
        if (mt && !mt.closest('.page__head') && !t.closest('button, a, .pill, .audio, .qinfo__toggle, .slot')) {
          e.preventDefault();
          toggleMark(mt);
          return;
        }
      }

      var dayChip = t.closest('[data-day]');
      if (dayChip) { setDay(dayChip.getAttribute('data-day')); return; }
      var dayJump = t.closest('[data-day-jump]');
      if (dayJump) {
        var dj = dayById(dayJump.getAttribute('data-day-jump'));
        setDay(dayJump.getAttribute('data-day-jump'));
        if (dj && dj.pages && dj.pages.length) goTo(dj.pages[0], { scroll: true });
        return;
      }

      var jump = t.closest('[data-jump]');
      if (jump) { e.preventDefault(); goTo(jump.getAttribute('data-jump')); return; }

      /* 示範版本切換（精簡 / 標準 / 進階） */
      var vtab = t.closest('[data-vtab]');
      if (vtab) {
        var host = vtab.closest('.card, .example');
        var vi = parseInt(vtab.getAttribute('data-vtab'), 10);
        if (host) {
          Array.prototype.forEach.call(host.querySelectorAll('[data-vtab]'), function (btn, i) {
            var on = i === vi;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-selected', on ? 'true' : 'false');
          });
          Array.prototype.forEach.call(host.querySelectorAll('.vpanel'), function (panel, i) {
            panel.hidden = i !== vi;
          });
        }
        AudioEngine.stopAll();
        return;
      }

      /* 示範彈窗 */
      if (t.closest('[data-modal-close]')) { closeDemo(); return; }
      var dSay = t.closest('[data-demo-say]');
      if (dSay) {
        var dd = demoData.demos[demoIdx];
        var dText = englishOnly(dd.say || stripHtml(dd.html));
        var dSegs = splitTsuenWan(dText);
        if (dSegs) AudioEngine.speakSegments(dSegs, dText, dSay);
        else AudioEngine.toggle(null, dText, dSay, 'en');
        return;
      }

      if (t.closest('[data-prev]')) { prev(); return; }
      if (t.closest('[data-next]')) { next(); return; }

      /* 課堂工具 dock */
      if (t.closest('[data-dock-timer]')) {
        buildDock();
        var dp = $('[data-dock-panel]');
        if (dp) { dp.hidden = !dp.hidden; }
        return;
      }
      if (t.closest('[data-dock-close]')) {
        var dpx = $('[data-dock-panel]'); if (dpx) dpx.hidden = true;
        return;
      }
      if (t.closest('[data-dock-start]')) { dockStart(); return; }
      if (t.closest('[data-dock-reset]')) { dockReset(); return; }
      var dPreset = t.closest('[data-dock-preset]');
      if (dPreset) { dockSetPreset(parseInt(dPreset.getAttribute('data-dock-preset'), 10) || 30); return; }
      if (t.closest('[data-dock-draw]')) { openDraw(); return; }
      if (t.closest('[data-dock-mark]')) { setMarking(!marking); return; }
      if (t.closest('[data-draw-modal-close]')) { closeDraw(); return; }
      if (t.closest('[data-draw-again]')) { drawPick(); return; }
      if (t.closest('[data-draw-timer]')) { drawStart(30); return; }
      if (t.closest('[data-om-topic]') && drawOpenNow()) {
        var omT = $('[data-om-topic]').textContent;
        if (omT) AudioEngine.toggle(null, omT, null, 'en');
        return;
      }
      var omDemo = t.closest('#drawModal [data-draw-demo]');
      if (omDemo) {
        var omKey = omDemo.getAttribute('data-qkey');
        closeDraw();
        if (omKey) openDemo(omKey, omDemo);
        return;
      }

      var blank = t.closest('.blank');
      if (blank) { revealBlank(blank); return; }

      var pill = t.closest('.pill--demo');
      if (pill) { openDemo(pill.getAttribute('data-key'), pill); return; }

      var term = t.closest('.term');
      if (term) {
        AudioEngine.toggle(null, term.getAttribute('data-say') || term.textContent, term, 'en');
        var gloss = term.getAttribute('data-gloss');
        if (gloss) toast(term.textContent + '：' + gloss);
        return;
      }

      var slot = t.closest('.slot');
      if (slot) {
        var slotKey = slot.getAttribute('data-key');
        if (slotKey) { openDemo(slotKey, slot); return; }
        toast('把「' + slot.getAttribute('data-hint') + '」換成你自己的資料，再開口練習。');
        return;
      }

      var say = t.closest('.say');
      if (say) {
        AudioEngine.toggle(null, say.getAttribute('data-say') || '', say, 'en');
        return;
      }

      var qa = t.closest('[data-qinfo]');
      if (qa) {
        var qp = qa.parentNode.querySelector('.qinfo__panel');
        var qOpen = qa.getAttribute('aria-expanded') === 'true';
        qa.setAttribute('aria-expanded', qOpen ? 'false' : 'true');
        if (qp) qp.hidden = qOpen;
        var arrow = qa.querySelector('.qinfo__arrow');
        if (arrow) arrow.textContent = qOpen ? '▾' : '▴';
        AudioEngine.stopAll();
        return;
      }

      var ab = t.closest('.audio');
      if (ab) {
        var key = ab.getAttribute('data-audio');
        AudioEngine.toggle(key, SPEAK_TEXT[key] || '', ab, SPEAK_LANG[key]);
        return;
      }

      var chap = t.closest('.nav__chapter');
      if (chap) {
        var open = chap.getAttribute('aria-expanded') === 'true';
        $$('.nav__chapter').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
        if (!open) chap.setAttribute('aria-expanded', 'true');
        return;
      }

      /* 列印 */
      if (t.closest('[data-export]')) { exportPDF(); return; }

      /* 側欄開合 */
      if (t.closest('[data-menu]')) { openSidebar(); return; }
      if (t.closest('[data-scrim]')) { closeSidebar(); return; }

      /* 承諾清單 */
      var pl2 = t.closest('[data-pledge]');
      if (pl2) {
        var done = !pl2.classList.contains('is-done');
        pl2.classList.toggle('is-done', done);
        pl2.setAttribute('aria-checked', done ? 'true' : 'false');
        savePledge();
        return;
      }

      /* 朗讀標記切換 */
      var pt = t.closest('[data-pause-toggle]');
      if (pt) {
        var box = pt.closest('[data-paused]');
        var shown = box.classList.toggle('is-shown');
        pt.textContent = shown ? '隱藏停頓' : '顯示停頓';
        pt.setAttribute('aria-pressed', shown ? 'true' : 'false');
        return;
      }

      /* 抽題 */
      if (t.closest('[data-draw-go]')) { drawTopic(t.closest('[data-draw]')); return; }
      var dDemo = t.closest('[data-draw-demo]');
      if (dDemo) {
        var dq = dDemo.getAttribute('data-qkey');
        if (dq) openDemo(dq, dDemo);
        return;
      }
      if (t.closest('[data-draw-clear]')) {
        var d = t.closest('[data-draw]');
        var tb = $('[data-draw-topic]', d);
        tb.textContent = '按「抽題」開始';
        tb.classList.add('draw__topic--empty');
        d.removeAttribute('data-last');
        var db = $('[data-draw-demo]', d);
        if (db) { db.hidden = true; db.removeAttribute('data-qkey'); }
        return;
      }

      /* 計時 */
      if (t.closest('[data-timer-start]')) { startTimer(t.closest('[data-timer]')); return; }
      if (t.closest('[data-timer-reset]')) { resetTimer(t.closest('[data-timer]')); return; }

      /* 聽音辨字 */
      var opt = t.closest('.quiz__opt');
      if (opt) {
        var card = opt.closest('.quiz__card');
        var right = parseInt(opt.getAttribute('data-right'), 10);
        var chosen = parseInt(opt.getAttribute('data-opt'), 10);
        var hint = $('[data-hint]', card);
        if (chosen === right) {
          opt.classList.add('is-right');
          $$('.quiz__opt', card).forEach(function (o) { o.disabled = true; });
          hint.textContent = '答對了。' + (card.getAttribute('data-hint-text') || '');
          AudioEngine.ding();
        } else {
          opt.classList.add('is-wrong');
          AudioEngine.buzz();
          hint.textContent = '再聽一次，注意聲母的分別。';
          setTimeout(function () { opt.classList.remove('is-wrong'); }, 500);
        }
        return;
      }
    });

    /* 計時時限 */
    document.addEventListener('change', function (e) {
      var sel = e.target.closest && e.target.closest('[data-timer-set]');
      if (!sel) return;
      var timer = sel.closest('[data-timer]');
      timer.setAttribute('data-seconds', sel.value);
      resetTimer(timer);
    });

    /* 鍵盤 */
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      var typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;

      if (drawOpenNow()) {
        if (e.key === 'Escape') { e.preventDefault(); closeDraw(); return; }
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); return; }
        if ((e.key === ' ' || e.code === 'Space') && tag !== 'button') { e.preventDefault(); return; }
      }

      if (demoOpen()) {
        if (e.key === 'Escape') { e.preventDefault(); closeDemo(); return; }
        if (e.key === 'Tab') { trapFocus(e); return; }
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          var n = demoData.demos.length;
          var ni = (demoIdx + (e.key === 'ArrowRight' ? 1 : n - 1)) % n;
          selectDemo(ni);
          var tabs = $$('.tab', demoEl);
          if (tabs[ni]) tabs[ni].focus();
          return;
        }
        if (e.key === ' ' || e.code === 'Space') {
          if (tag === 'button' || tag === 'a') return;
          e.preventDefault(); return;
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') return;
      }

      if (e.key === 'Escape') { closeSidebar(); return; }

      if (e.key === ' ' || e.code === 'Space') {
        if (typing) return;
        /* 若焦點在按鈕上，讓瀏覽器處理原生 click，避免重複觸發 */
        if (tag === 'button' || tag === 'a') return;
        e.preventDefault();
        var playing = $$('.audio.is-playing')[0];
        if (playing) {
          AudioEngine.toggle(playing.getAttribute('data-audio'), '', playing, SPEAK_LANG[playing.getAttribute('data-audio')]);
          return;
        }
        var first = $$('.page.is-active .audio')[0];
        if (first) {
          var fk = first.getAttribute('data-audio');
          AudioEngine.toggle(fk, SPEAK_TEXT[fk] || '', first, SPEAK_LANG[fk]);
        }
        return;
      }

      if (typing) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }

      /* 承諾清單鍵盤操作 */
      if (e.key === 'Enter') {
        var focusPledge = document.activeElement && document.activeElement.closest && document.activeElement.closest('[data-pledge]');
        if (focusPledge) {
          var done = !focusPledge.classList.contains('is-done');
          focusPledge.classList.toggle('is-done', done);
          focusPledge.setAttribute('aria-checked', done ? 'true' : 'false');
          savePledge();
        }
      }
    });

    /* 觸屏左右滑動翻頁 */
    var sx = 0, sy = 0, tracking = false;
    $('#stage').addEventListener('touchstart', function (e) {
      if (e.target.closest('.table-wrap') || e.target.closest('.audio') || e.target.closest('[data-paused]')) { tracking = false; return; }
      var t0 = e.touches[0];
      sx = t0.clientX; sy = t0.clientY; tracking = true;
    }, { passive: true });
    $('#stage').addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      var t0 = e.changedTouches[0];
      var dx = t0.clientX - sx, dy = t0.clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dy) < 48) {
        if (dx < 0) next(); else prev();
      }
    });

    window.addEventListener('hashchange', function () {
      var id = location.hash.replace('#', '');
      if (id && PAGES.some(function (p) { return p.id === id; })) goTo(id);
    });

    window.addEventListener('afterprint', function () {
      document.body.classList.remove('is-printing');
      /* 列印完成後恢復 SPA 狀態（開發聖經 5.2） */
      if (currentPage) goTo(currentPage.id, { scroll: false });
    });
  }

  function savePledge() {
    var state = {};
    $$('[data-pledge]').forEach(function (el) {
      state[el.getAttribute('data-pledge')] = el.classList.contains('is-done');
    });
    try { localStorage.setItem(PLEDGE_KEY, JSON.stringify(state)); } catch (e) { /* 忽略 */ }
  }

  function openSidebar() {
    $('#sidebar').classList.add('is-open');
    $('#scrim').classList.add('is-open');
    $('#menuBtn').setAttribute('aria-expanded', 'true');
  }
  function closeSidebar() {
    $('#sidebar').classList.remove('is-open');
    $('#scrim').classList.remove('is-open');
    if ($('#menuBtn')) $('#menuBtn').setAttribute('aria-expanded', 'false');
  }

  /* 列印／導出 PDF（開發聖經 5.2） */
  function exportPDF() {
    if (demoOpen()) closeDemo();
    AudioEngine.stopAll();
    document.body.classList.add('is-printing');
    /* 全部展開（CSS 同步處理），等候版面回流後列印 */
    setTimeout(function () { window.print(); }, 120);
  }

  /* ------------------------------------------------------------ 啟動 */
  function init() {
    buildNav();
    buildPages();
    decorateSay();
    markTerms();
    buildDock();
    buildDrawModal();
    buildDayBar();
    bindEvents();
    applyMarks();
    AudioEngine.init();

    var saved = '';
    var savedDay = '';
    try { saved = localStorage.getItem(STORE_KEY) || ''; } catch (e) { saved = ''; }
    try { savedDay = localStorage.getItem(DAY_KEY) || ''; } catch (e) { savedDay = ''; }
    activeDay = dayById(savedDay) ? savedDay : null;

    var hashId = location.hash.replace('#', '');
    var startId = (hashId && PAGES.some(function (p) { return p.id === hashId; })) ? hashId : saved;
    if (!PAGES.some(function (p) { return p.id === startId; })) startId = PAGES[0].id;
    if (activeDay) {
      var dp = dayPages(activeDay);
      if (!dp.some(function (p) { return p.id === startId; }) && dp.length) startId = dp[0].id;
    }

    /* 頁碼圓點 */
    var dots = PAGES.map(function (p, i) {
      return '<button type="button" class="pager__dot" data-jump="' + p.id + '" aria-label="前往 P.' + p.num + '"></button>';
    }).join('');
    $('#pagerDots').innerHTML = dots;

    goTo(startId, { scroll: false });
    /* 瀏覽器會為 #Pxx 錨點自動捲動，這裡在版面穩定後歸零 */
    window.scrollTo(0, 0);
    setTimeout(function () { window.scrollTo(0, 0); }, 80);
    document.body.classList.add('is-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
