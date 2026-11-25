/* =========================================================================
   audio.js — 音頻播放器、TTS 降級邏輯
   規則（開發聖經 3.1–3.3）
     1. 互斥播放：任何時刻只允許一個聲音（MP3 或 TTS）
     2. 優先級 1：本地 MP3（/audio/P02_EN_01_Sonia.mp3）
     3. 優先級 2：MP3 缺失或載入失敗 → 瀏覽器 TTS，並在按鈕旁標示 (TTS)
     4. 語音僅英語：en-GB，rate 0.8（-20%）；中文／粵語文本一律不進入發音
   ========================================================================= */

var AudioEngine = (function () {
  'use strict';

  var el = null;               // 單一共用 <audio>
  var current = null;          // { key, lang, text, button, state }
  var voices = [];
  var startedAt = 0;
  var chain = 0;               // 分段朗讀的世代號，stopAll 時遞增以作廢舊隊列

  function langOf(/* key */) {
    return 'en';
  }

  /* 純英語朗讀文本：剔除中文字詞與中文／全形標點，清空後的空括號一併移除。 */
  function englishOnly(text) {
    return String(text == null ? '' : text)
      .replace(/[（(][^（）()]*[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff][^（）()]*[)）]/g, ' ')
      .replace(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g, '')
      .replace(/[\u3000-\u303f\uff00-\uffef]/g, ' ')
      .replace(/[（(]\s*[)）]/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+([,.;:!?，。；：！？])/g, '$1')
      .replace(/^\s*[:：,，.．、；;]+/, '')
      .replace(/\s*[:：,，.．、；;]+$/, '')
      .trim();
  }

  function fileFor(key/*, lang */) {
    return window.AUDIO_BASE + key + '_Sonia.mp3';
  }

  function hasFile(key) {
    return Array.isArray(window.AUDIO_MANIFEST) && window.AUDIO_MANIFEST.indexOf(key) !== -1;
  }

  function getEl() {
    if (el) return el;
    el = document.getElementById('audioEngine');
    if (!el) {
      el = document.createElement('audio');
      el.id = 'audioEngine';
      el.setAttribute('preload', 'auto');
      el.setAttribute('playsinline', '');
      document.body.appendChild(el);
    }
    el.addEventListener('timeupdate', function () {
      if (!current || current.mode !== 'file') return;
      var d = el.duration;
      if (d && isFinite(d)) setProgress((el.currentTime / d) * 100);
    });
    el.addEventListener('ended', function () { finish(); });
    el.addEventListener('error', function () {
      if (!current || current.mode !== 'file') return;
      var lang = current.lang;
      var text = current.text;
      var button = current.button;
      toast('音頻檔案未能載入，已改用瀏覽器發音（TTS）', 'warn');
      reset();
      speakTTS(text, lang, button);
    });
    return el;
  }

  /* -------------------------------------------------------- 對外：播放 */
  function play(key, text, button, langHint) {
    stopAll();                                  // 互斥：先停掉一切
    if (!key) { speakTTS(text, langHint || 'en', button); return; }
    var lang = langHint || langOf(key);
    if (hasFile(key)) {
      current = { key: key, lang: lang, text: text, button: button, mode: 'file' };
      markButton(button, true, false);
      var a = getEl();
      a.src = fileFor(key, lang);
      a.currentTime = 0;
      var p = a.play();
      if (p && p.catch) {
        p.catch(function () {
          /* 自動播放被拒或解碼失敗 → TTS 降級 */
          if (!current || current.mode !== 'file') return;
          var l = current.lang, t = current.text, b = current.button;
          reset();
          speakTTS(t, l, b);
        });
      }
    } else {
      speakTTS(text, lang, button);
    }
  }

  /* -------------------------------------------------------- TTS 降級 */
  function pickVoice(/* lang */) {
    if (!voices.length) voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    var wanted = ['en-GB'];
    for (var w = 0; w < wanted.length; w++) {
      var tag = wanted[w].toLowerCase();
      for (var i = 0; i < voices.length; i++) {
        var v = voices[i];
        if (String(v.lang).toLowerCase().indexOf(tag) === 0) {
          if (/sonia|google uk english female|daniel|kate|serena/i.test(v.name)) return v;
        }
      }
    }
    for (var j = 0; j < voices.length; j++) {
      if (String(voices[j].lang).toLowerCase().indexOf('en') === 0) return voices[j];
    }
    return null;
  }

  function speakTTS(rawText, lang, button) {
    if (!window.speechSynthesis) {
      toast('此瀏覽器不支援語音合成，請改播 MP3', 'warn');
      return;
    }
    var text = englishOnly(rawText);
    if (!text) {
      toast('本段沒有可朗讀的英文內容', 'warn');
      return;
    }
    var u = new window.SpeechSynthesisUtterance(text);
    var v = pickVoice('en');
    if (v) u.voice = v;
    u.lang = 'en-GB';
    u.rate = 0.8;
    u.pitch = 1;

    var total = text.length;
    current = { mode: 'tts', lang: 'en', text: text, button: button, key: null };
    markButton(button, true, true);

    u.onboundary = function (ev) {
      if (ev.charIndex && total) setProgress(Math.min(99, (ev.charIndex / total) * 100));
    };
    u.onend = function () { finish(); };
    u.onerror = function () { finish(); };
    startedAt = Date.now();
    setProgress(0);
    window.speechSynthesis.speak(u);
  }

  /* 分段朗讀：全部以英語發音，中文片段剔除後跳過。
     segments = [{ text, lang:'en' }, …] */
  function speakSegments(segments, fullText, button) {
    if (!window.speechSynthesis) {
      toast('此瀏覽器不支援語音合成，請改播 MP3', 'warn');
      return;
    }
    if (current && current.button === button) { stopAll(); return; }
    stopAll();
    var my = chain;
    var cleaned = (segments || []).map(function (seg) {
      return { text: englishOnly(seg && seg.text) };
    }).filter(function (seg) { return !!seg.text; });
    current = { mode: 'tts', lang: 'en', text: fullText, button: button, key: null };
    markButton(button, true, true);
    var i = 0;
    function step() {
      if (my !== chain) return;
      if (i >= cleaned.length) { finish(); return; }
      var seg = cleaned[i++];
      var u = new window.SpeechSynthesisUtterance(seg.text);
      var v = pickVoice('en');
      if (v) u.voice = v;
      u.lang = 'en-GB';
      u.rate = 0.8;
      u.pitch = 1;
      u.onend = step;
      u.onerror = step;
      window.speechSynthesis.speak(u);
    }
    setProgress(0);
    startedAt = Date.now();
    step();
  }

  /* -------------------------------------------------------- 停止／狀態 */
  function stopAll() {
    chain++;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (el) {
      try { el.pause(); el.currentTime = 0; } catch (e) { /* 忽略 */ }
    }
    if (current) markButton(current.button, false, false);
    setProgress(0);
    current = null;
  }

  function reset() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (el) { try { el.pause(); } catch (e) { /* 忽略 */ } }
    if (current) markButton(current.button, false, false);
    setProgress(0);
    current = null;
  }

  function finish() {
    if (current) markButton(current.button, false, false);
    setProgress(0);
    current = null;
  }

  function isPlayingKey(key) {
    return !!(current && current.key === key && !(el && el.paused));
  }

  function anyPlaying() {
    if (!current) return false;
    if (current.mode === 'file') return !!(el && !el.paused);
    return !!(window.speechSynthesis && window.speechSynthesis.speaking);
  }

  function toggle(key, text, button, langHint) {
    if (anyPlaying() && current && current.key === key) { stopAll(); return false; }
    if (anyPlaying() && current && current.key === null && current.button === button) { stopAll(); return false; }
    play(key, text, button, langHint);
    return true;
  }

  /* -------------------------------------------------------- 按鈕與進度 */
  function markButton(button, playing, isTTS) {
    if (!button) return;
    button.classList.toggle('is-playing', !!playing);
    button.setAttribute('aria-pressed', playing ? 'true' : 'false');
    var label = button.querySelector('.audio__label');
    if (label) label.textContent = playing ? '暫停' : (button.getAttribute('data-idle-label') || '播放');
    var tag = button.querySelector('.audio__tag');
    if (tag) tag.style.display = (playing && isTTS) ? '' : 'none';
    var iconUse = button.querySelector('.audio__icon use');
    if (iconUse) {
      iconUse.setAttribute('href', playing ? '#i-pause' : '#i-play');
    }
  }

  function setProgress(pct) {
    if (!current || !current.button) return;
    var fill = current.button.querySelector('.audio__fill');
    if (fill) fill.style.width = Math.max(0, Math.min(100, pct)) + '%';
  }

  /* -------------------------------------------------------- 音效（零依賴） */
  var ctx = null;
  function tone(freq, dur, type, gain, delay) {
    try {
      if (!ctx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctx = new AC();
      }
      var t0 = ctx.currentTime + (delay || 0);
      var osc = ctx.createOscillator();
      var g = ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain || 0.12, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g); g.connect(ctx.destination);
      osc.start(t0); osc.stop(t0 + dur + 0.02);
    } catch (e) { /* 靜音失敗不影響流程 */ }
  }

  function beep() {                       // 計時結束
    if (hasFile('BEEP')) {
      try {
        var a = new window.Audio((window.AUDIO_BASE + 'beep.mp3'));
        a.play();
        return;
      } catch (e) { /* 落到 WebAudio */ }
    }
    tone(880, 0.22, 'square', 0.14, 0);
    tone(660, 0.26, 'square', 0.14, 0.26);
  }

  function ding() { tone(1046, 0.16, 'sine', 0.12, 0); tone(1568, 0.2, 'sine', 0.1, 0.14); }
  function buzz() { tone(180, 0.22, 'sawtooth', 0.08, 0); }

  /* -------------------------------------------------------- 初始化 */
  function init() {
    if (window.speechSynthesis) {
      voices = window.speechSynthesis.getVoices() || [];
      window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices() || [];
      };
    }
    /* 全域只允許一個發聲：切頁、離開畫面時停止 */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAll();
    });
  }

  function toast(msg, kind) {
    if (window.UI && window.UI.toast) window.UI.toast(msg, kind);
  }

  return {
    init: init,
    toggle: toggle,
    speakSegments: speakSegments,
    stopAll: stopAll,
    isPlayingKey: isPlayingKey,
    anyPlaying: anyPlaying,
    beep: beep, ding: ding, buzz: buzz
  };
})();
