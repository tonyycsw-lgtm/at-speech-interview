/* =========================================================================
   update_manifest.js — 依 audio_map.json 的 key 清單，更新 _build/d1.js 的
   window.AUDIO_MANIFEST。更新後須執行 python _build\build.py 重建 js/data.js。
   ========================================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..');
const map = JSON.parse(fs.readFileSync(path.join(__dirname, 'audio_map.json'), 'utf8'));
const keys = Object.keys(map).sort();

const manifest = 'window.AUDIO_MANIFEST = [\n' +
  keys.map(k => "  '" + k + "'").join(',\n') +
  '\n];';

const d1 = path.join(__dirname, 'd1.js');
let src = fs.readFileSync(d1, 'utf8');
src = src.replace(/window\.AUDIO_MANIFEST\s*=\s*\[[^\]]*\];/, manifest);
fs.writeFileSync(d1, src);
console.log('manifest keys:', keys.length);
