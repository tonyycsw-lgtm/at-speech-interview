/* =========================================================================
   dump_audio_map.js — 從 js/data.js 抽出所有音頻 key 與朗讀文本，
   產生 audio_map.json 供 Edge TTS 合成腳本使用。
   文本規則與 js/app.js 的 SPEAK_TEXT 組裝一致（stripHtml + englishOnly）。
   ========================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..');

global.window = {};
eval(fs.readFileSync(path.join(BASE, 'js', 'data.js'), 'utf8'));

function stripHtml(html) {
  return String(html == null ? '' : html)
    .replace(/\[\[b:([^\]]*)\]\]/g, '$1')
    .replace(/\[\[s:([^\]|]*)(?:\|[^\]]*)?\]\]/g, '$1')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function englishOnly(text) {
  return String(text == null ? '' : text)
    .replace(/[（(][^（）()]*[㐀-䶿一-鿿豈-﫿][^（）()]*[)）]/g, ' ')
    .replace(/[㐀-䶿一-鿿豈-﫿]/g, '')
    .replace(/[　-〿＀-￯]/g, ' ')
    .replace(/[（(]\s*[)）]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,.;:!?，。；：！？])/g, '$1')
    .replace(/^\s*[:：,，.．、；;]+/, '')
    .replace(/\s*[:：,，.．、；;]+$/, '')
    .trim();
}

function speakText(b) {
  switch (b.type) {
    case 'p':
      return englishOnly(stripHtml(b.html));
    case 'example':
    case 'passage':
      return englishOnly((b.paragraphs || []).map(stripHtml).join(' '));
    case 'steps':
      return englishOnly((b.items || []).map(it => it.tag + ': ' + stripHtml(it.html)).join(' '));
    case 'poem':
      return englishOnly([b.title].concat(b.lines || []).join(' '));
    default:
      return englishOnly(stripHtml(JSON.stringify(b)));
  }
}

const map = {};
const skipped = [];
const unknownTypes = new Set();

for (const page of window.PAGES) {
  for (const b of (page.blocks || [])) {
    const key = b.a;
    if (!key) continue;
    if (/_ZH_/.test(key) || /^QUIZ_/.test(key) || /_CANTO_/.test(key)) {
      skipped.push(key);
      continue;
    }
    if (!['p', 'example', 'passage', 'steps', 'poem'].includes(b.type)) unknownTypes.add(b.type);
    map[key] = { text: speakText(b), type: b.type, page: page.id };
  }
}

fs.writeFileSync(path.join(__dirname, 'audio_map.json'), JSON.stringify(map, null, 2));
console.log('keys:', Object.keys(map).length, 'skipped:', skipped);
if (unknownTypes.size) console.log('unknown types:', [...unknownTypes].join(', '));
