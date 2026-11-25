# audio/ 音頻檔案說明

本目錄存放 41 段英文示範 MP3，由 Edge TTS **`en-GB-SoniaNeural`** 合成（英式英語女聲，語速 `-20%`）。
播放器優先播本地 MP3；檔案缺失或載入失敗時自動退回瀏覽器 TTS，並在按鈕旁顯示 `TTS` 標籤。

## 命名規則

```
<key>_Sonia.mp3

P02_EN_01_Sonia.mp3      P.02 英文第 1 段，Sonia 語音
P02_EN_02_Sonia.mp3
BEEP.mp3                 計時歸零 / 答題提示音（可選，目前未提供）
```

- 音頻僅英語；`_ZH_` 中文段落與 `QUIZ_` 聽音辨字題不生成播放按鈕，亦不合成 MP3。
- 序號兩位數，逐段遞增，與該頁出現順序一致。

## 重新合成

改過課文後，在專案根目錄依序執行（edge-tts 裝在 `.venv/`）：

```powershell
node _build\dump_audio_map.js      # 抽出 key 與朗讀文本 → _build/audio_map.json
node _build\update_manifest.js     # 同步 manifest 到 _build/d1.js
python _build\build.py             # 重建 js/data.js
.\.venv\Scripts\python.exe _build\gen_edge_tts.py          # 全部重製
.\.venv\Scripts\python.exe _build\gen_edge_tts.py --only P02_EN_01   # 單段重製
```

## 音訊規格

- 格式：MP3，單聲道；課室擴音足夠且檔案小。
- 語速：`-20%`（約每分鐘 130–150 字），保留書面標記的停頓。
- 每段單獨成檔（一句到三句，長示範段落另成一檔），方便逐句點播與學生跟讀。
