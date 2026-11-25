# 升中面試班 · 互動 HTML 課件

依《面试班.pdf》（Interview Textbook，AT Speech Learning Institute，ES-V202610）原書頁序編排，
供**課堂觸屏互動大電視**與**學生自學**兩用；零依賴原生 HTML5 / CSS3 / Vanilla JS，離線可跑。

---

## 一、快速開始

1. 直接用 Chrome / Edge 開啟 `index.html`（建議全屏 F11）。
2. 建議使用 1920×1080 或以上的 16:9 屏幕；版面以 `clamp()` 自適應，1180px 以下自動切換抽屜式側欄。
3. 語音預設走瀏覽器 TTS（粵語 `zh-HK`、英文 `en-GB`）。放入自製 MP3 可提升課堂出聲品質，見第四節。

## 二、檔案結構

```
index.html          頁面骨架、SVG 圖標 sprite、側欄 / 頂欄 / 翻頁器
css/style.css       設計 tokens、佈局、元件、列印樣式
js/data.js          全書內容資料（由 _build/d1–d9.js 串接產生）
js/audio.js         音頻引擎：單一 <audio> + TTS 降級、互斥播放、WebAudio 提示音
js/app.js           渲染器、導航、互動（填空 / 抽題 / 計時 / 聽音辨字 / 示範彈窗 / 生詞發音）、鍵盤與滑動
audio/              自製 MP3 存放處（預設空，全走 TTS）
assets/icons/       圖標原始 SVG（頁面內已內嵌 sprite，此處為交付備份）
_build/             資料分片源檔與 build.py（改文案請改這裡，再重建 data.js）
```

重建資料：

```powershell
python _build\build.py     # 串接 d1–d9 → js\data.js（UTF-8 無 BOM）
node --check js\data.js    # 語法檢查
```

> 全書示例統一：學校＝**荃灣官立小學**（Tsuen Wan Government Primary School）、學生＝**Mary**。
> 朗讀時 “Tsuen Wan” 會切成粵語「荃灣」發音（`zh-HK`），其餘仍是英式英語；這是 `AudioEngine.speakSegments` 的分段朗讀。
> 改動時只需改 `_build/d1.js` 的 `DEMO_BANK` 與 `_build/d7.js` 的翻譯，再重建。

## 三、頁面對應（教材頁序＝課件頁序）

| 課件頁 | 原書頁 | 內容 |
|---|---|---|
| P.00 | 書目錄 | Contents 目錄（可點擊跳頁） |
| P.01 | P.1 | My Pledge 我的承諾（原掃描檔缺頁，依框架補建並標示待補） |
| P.02–P.07 | P.2–P.7 | Core Interview Questions：Q1 自我介紹、Q2 為何選本校、Q3 家庭、Q4 未來職業、Q5 介紹一本書 |
| P.08–P.10 | P.8–P.10 | Impromptu Speaking Skills：定義、意見題、三大黃金法則、First–Second–Third、兩個示例、三個應變策略 |
| P.11–P.16 | P.11–P.16 | Group Discussion：四不四要、定義、題目、五步曲、三種走向、九大原則、四大情境句型 |
| P.17–P.18 | P.17–P.18 | Reading Comprehension：中文閱讀五步、〈我愛樹〉、Aesop 金蛋鵝 |
| P.19–P.22 | P.19–P.22 | Reciting Skills：朗讀定義、聲情並茂、眼神 / 停頓 / 強調、正粵音 I–IX、停連原則、英文詩 |
| P.23 | P.23 | Interview Etiquette 面試禮儀 12 條（雙語） |
| P.24–P.25 | P.24–P.25 | 英文常見問題 A 1–10 / B 11–19 / C 20–24 與作答提示 |
| P.26–P.27 | P.26–P.27 | 中文面試問題 1–34 |

> 進度條、側欄與翻頁器一律按上表順序前進，不跳章、不重排。
> 原書附錄「Application Form 入學申請表格」不在掃描檔內，已於 P.00 與 P.27 以提示卡標示。

## 四、互動功能

| 功能 | 位置 | 操作 |
|---|---|---|
| 逐段播放 | 全站每一段英文 | 段末「▶ 播放」小膠囊：點擊朗讀該句，再點變「暫停」；一段一顆，互不干擾 |
| 中文翻譯 | 每段英文下方 | 逐段中文（青藍左線、字號貼近正文、深色字），大電視可讀；P.23–P.25 原書已是中英對照，維持原格式 |
| 生詞發音 | 英文段落內的虛線詞 | 虛線底的難詞／詞組（如 extracurricular activities）點擊即以瀏覽器 TTS 讀出，並跳出中文詞義 |
| 三檔示範 | 每個核心示範答案 | 卡片頂部「精簡版 / 標準版 / 進階版」膠囊切換：1 句保底、2–3 句標準、加高階詞彙與複雜句的進階；每檔各自配中譯 |
| 彈窗示範中譯 | 76 組示範、230 句 | 每句英文下方直接顯示中文（16–18.5px 深色），詞條與主要示範一律齊備；彈窗已移除長篇說明文字 |
| 全段播放 | 多段示範 / 長段落 | 卡片右上「▶ 全段」一次讀完整段；段內各句仍有獨立按鈕 |
| 示範彈窗 | P.02 / P.03 / P.05 插槽（如 School Name、rank）＋ 全站詞庫膠囊 | 點藍色插槽或詞庫詞（帶 ↗）→ 彈窗列出 3–5 種示範說法（分頁籤切換）、可「播放這句」、按 Esc / 點背景 / 「明白，關閉」結束 |
| 填空揭示 | P.02 自我介紹模板 | 點虛線空格 → 顯示答案（綠底）；再點收回 |
| 抽題 + 倒計時 | P.10 | 「抽題」隨機出題（題庫 `DRAW_BANK.impromptu`）；可選 30 / 45 / 60 秒；最後 5 秒變紅脈動，歸零響提示音 |
| 停頓 / 強調標記 | P.19 / P.20 | 「顯示停頓」「顯示強調」切換；記號為 0 寬隱藏，開啟後才佔位，不影響閱讀 |
| 聽音辨字 | P.21 | 4 題（吳 / 你 / 光 / 北）；答對綠底＋提示音，答錯紅底搖動可重試 |
| 承諾勾選 | P.01 | 逐條勾選自動存入 localStorage，重開仍在 |
| 進度記憶 | 全站 | 記得上次頁面（`atspeech.page.v1`） |

鍵盤與觸屏：

- `←` `→` 前後翻頁；`Space` 播放 / 暫停當前頁語音。
- 彈窗內：`←` `→` 切換示範版本，`Esc` 或點背景關閉，`Tab` 焦點鎖在彈窗內。
- 觸屏左右滑動翻頁；側欄 1180px 以下收合為抽屜（點漢堡開、點遮罩關）。

### 示範插槽怎麼加

課文資料用 `[[s:提示文字|示範key]]` 標記插槽，例如：

```js
'I study at [[s:School Name|school]]. I like school very much.'
```

再到 `_build/d1.js` 的 `window.DEMO_BANK` 加一組（可放 3–5 個版本，彈窗自動生成分頁籤）：

```js
school: {
  title: '示範：怎樣介紹就讀的小學',
  demos: [
    { label: '標準版', html: 'I study at <mark>Sha Tin Government Primary School</mark>.', say: 'I study at Sha Tin Government Primary School.' },
    { label: '進階版', html: 'I am currently studying at <mark>Sha Tin Government Primary School</mark>…' }
  ]
}
```

`html` 內的 `<mark>` 會以主色高亮；`say` 是播放用的純文字，省略時由程式去標籤後直接朗讀。**示範句一律填好示例資料（如 third place、Mathematics、Sha Tin Government Primary School），不要保留 `[rank]` 這類佔位符**，學生只需替換成自己的資料。

### 詞庫膠囊怎麼變成可點

任何 `pills` 區塊的詞條，只要 `DEMO_BANK` 有對應的 `word:` 鍵，就會自動渲染成可點按鈕（右上帶 ↗），點擊弹出三句示範；沒有對應鍵的詞條維持普通標籤。

鍵名規則：取詞條的英文部分 → 全部小寫 → 非字母數字轉 `-`，前面加 `word:`。
例如 `Diligent 勤奮` → `word:diligent`；`A Team Player 有團隊精神的人` → `word:a-team-player`；`Excel in [Subject] 在[科目]表現優異` → `word:excel-in-subject`。

在 `_build/d5.js`（P.02 / P.03）或 `_build/d6.js`（P.04 / P.05 / P.07）加：

```js
add('word:diligent', '示範：Diligent 勤奮 怎麼說', ['自我介紹', '加上例子', '面試追問'], [
  'I am a <mark>diligent</mark> student. I always finish my homework before dinner.',
  'My teachers say I am <mark>diligent</mark> because I never give up on a difficult exercise.',
  'Being <mark>diligent</mark> helped me improve from fifteenth to third place last year.'
]);
```

目前 69 個詞條全部有 3 句示範；P.15 的兩顆「完整句子」膠囊本身已是句子，維持不可點。改完執行 `python _build\build.py` 重建。

### 示範彈窗的中文翻譯怎麼加

- 集中在 `_build/d9.js` 的 `Z`：鍵與 `DEMO_BANK` 相同（如 `'word:diligent'`、`'outing'`），值為中文陣列，順序與彈窗分頁一致。
- 載入時自動回填每個 demo 的 `zh`；彈窗在英文句下方以 `.zh.modal__zh` 顯示。缺 `zh` 時自動略過，不會出現空白行。
- 新增詞條時，記得同步在 d9 補三句中文（或該組實際句數）。

### 示範答案怎麼加「三檔」

- 集中在 `_build/d8.js` 的 `V`：鍵是「頁碼#區塊序號」（如 `'P03#5'`），每筆寫 `short` / `shortZh` / `adv` / `advZh`；「標準版」自動取原文與原中譯，不必重寫。
- 多段示範（`example`）可把 `short` / `adv` 寫成陣列，與段落一一對應。
- 渲染在 `app.js` 的 `R.p` / `R.example`：偵測到 `b.variants` 就輸出膠囊 tabs 與三個 panel，預設「標準版」；切換只改 DOM 顯示，不重繪，句級播放與生詞虛線照常可用。
- 列印時自動隱藏 tabs，只印目前選中的那一版（預設標準版），講義不會多出兩份答案。

### 中文翻譯與生詞怎麼加

- 翻譯集中在 `_build/d7.js` 的 `ZH`：鍵是「頁碼#區塊序號」（如 `'P05#17'`），一般段落用字串，`example` / `passage` 用同長度陣列逐段對應。
- 清單題目用 `ZH_ITEMS`（如 `'P18#8'` 對應 4 題），示範步驟用 `ZH_STEPS`（逐項配對）。
- 生詞放 `window.TERMS`：`{ term: 'extracurricular activities', zh: '課外活動' }`。`app.js` 會在英文段落自動加虛線（`\b` 詞界、長詞優先比對），點擊以 TTS 讀出並提示中文；中文翻譯段落與按鈕內文字不會被標記。
- 新增頁面或改段落後，記得同步更新 d7 的鍵；執行 `python _build\build.py` 重建即生效。

## 五、音頻（可選，提升課堂品質）

1. 把 MP3 放入 `audio/`，命名規則：

```
P02_EN_01_Sonia.mp3     英文，Sonia 錄音
P19_ZH_01_Canto.mp3     粵語朗讀
QUIZ_1_吳_Canto.mp3      聽音辨字單字
```

- 英文 key 以 `_EN_` 標示、粵語以 `_ZH_`；測驗語音以 `QUIZ_` 開頭（一律粵語）。
- 放入檔案後，在 `js/data.js` 的 `window.AUDIO_MANIFEST` 加入對應 key 才會啟用（預設空 ⇒ 全走 TTS）。
- 檔案缺失或載入失敗會自動退回 TTS，並在按鈕旁顯示 `TTS` 標籤，不會中斷課堂。
- 提示音（計時歸零、答對 / 答錯）預設用 WebAudio 即時合成；若 `AUDIO_MANIFEST['BEEP']` 存在才改用 `audio/beep.mp3`。

## 六、列印 / 導出 PDF

- 頂欄「列印 / 匯出 PDF」＝ `window.print()`；列印樣式已展開全部章節、隱藏側欄 / 頂欄 / 翻頁器 / 互動按鈕、去陰影、A4 直式、避免區塊被切斷。
- 每章自成一頁（`break-after: page`），內容過長時自然續頁；實測 27 頁教材排成 44 頁 A4（含中文翻譯，8.5pt 深色，較屏幕版緊湊）。
- 想得到與屏幕一致的長截圖，可用瀏覽器 DevTools → Print to PDF（勾選 Background graphics）。

## 七、設計規範（依《開發指南與開發聖經》）

| 項目 | 值 |
|---|---|
| 主色 | `#2563EB`；背景 `#F8FAFC`；卡片 `#FFFFFF`；正文 `#1E293B`；次要 `#64748B`；警示 `#EF4444` |
| 字級 | 內文 ≥16px（`clamp(17px, 1.05vw, 21px)`）、行高 1.6；標題 `clamp()` 隨屏寬放大 |
| 中文翻譯 | 16.5–19px、色 `#334155`、左側 3px `#DBEAFE` 線；不用淺灰、不縮成註腳字 |
| 圓角 / 陰影 | `8px` / `0 1px 3px rgba(0,0,0,.1)`（大卡片用 `--shadow-lg`） |
| 按鈕 | 桌面 40px；觸屏場景主按鈕 52–64px，命中區 ≥44px |
| 佈局 | 兩欄 20 / 80：左側固定章節導航（sticky），右側內容區 |
| 命名 | CSS 用 BEM（`.quiz__card`、`.quiz__opt--correct`）；JS 用 CamelCase；音頻 `P02_EN_01_Sonia.mp3` |

## 八、待補 / 已知限制

1. 原書 **P.1 My Pledge** 與 **Application Form** 不在掃描檔內：P.01 以框架頁補建並標示「待補原文」，補回後可直接覆蓋該頁資料。
2. 全書語音目前走瀏覽器 TTS；逐段播放按鈕直接朗讀該句文字（不需 MP3），帶 key 的主段落可另錄 MP3（見第五節）。
3. 列印為「講義版」而非屏幕 1:1：互動元件（抽題、計時、按鈕）不列印。
4. 內容以掃描檔逐頁視讀抄錄；若與原書有出入，以原書為準，改 `_build/d*.js` 後重建即可。

## 九、驗收紀錄

- `node --check`：`js/data.js`、`js/audio.js`、`js/app.js` 全數通過。
- Chrome headless + CDP 逐頁截圖：28 個 section 版面無溢出、無遮擋。
- 互動冒煙：抽題 → 倒計時 30→28 秒 → 測驗答對提示 → 填空揭示 → 停頓標記切換，全部正常。
- 逐段播放：全站 121 顆句級「播放」膠囊（P.24 17 顆、P.23 12 顆、P.08 8 顆）；點擊後圖示轉暫停，再點停止。
- 示範彈窗：9 個示範插槽全部可開；`school` 彈窗標題、3 個分頁、內文切換、播放、關閉與焦點回傳均正常。`rank` 已代入 third place、`subject` 五個分頁（數學 / 中文 / 英文 / 體育 / 視藝）。
- 詞庫：69 個詞條全部可點，彈窗皆有 3 句示範（P02 23、P03 10、P04 18、P05 13、P07 5）；P15 兩顆完整句膠囊維持不可點。
- `Page.printToPDF`：A4、含背景，輸出 44 頁（27 頁教材內容＋中文翻譯＋長節自然續頁），無全空白頁；列印為講義版，抽題 / 計時 / 句級按鈕 / 版本 tabs 與彈窗一律不列印，只印當前選中的版本。
- 三檔示範：22 段核心答案（P02×5、P03×7、P04×3、P05×3、P06×1、P07×3）各設精簡／標準／進階，預設標準版；句級播放膠囊 192 顆（含各版本）。
- 彈窗中譯：76 組示範（7 組主要示範＋69 個詞條）、230 句全部有中文，實測 `missing 0`；說明文字已移除，彈窗改為「標題 → 分頁 → 英文句 → 中譯 → 播放」。
- 中文翻譯：44 段逐段翻譯（P02–P07、P15、P18 課文與示範答案）＋ P08/P11/P18 三組題目、P08–P09 示範步驟共 21 條；屏幕字號 16.5–19px、色 `#334155`，實測可讀。
- 生詞：`TERMS` 62 個詞／詞組，全站自動加虛線，P02 命中 9 個、P03 16 個、P18 5 個；點擊以 TTS 發音並提示中文。
- 姓名與學校：`name` 彈窗與 P02 填空答案均為 Mary；`school` 彈窗與翻譯均為荃灣官立小學（Tsuen Wan Government Primary School），全站已無 Chan Tai Man / Sha Tin / Management Primary 殘留。
- 地名發音：示範句子中的 “Tsuen Wan” 以粵語讀「荃灣」（`zh-HK`），前後英文仍用 `en-GB`，靠 `speakSegments` 逐段接續朗讀；再點同一顆按鈕可中止。

- 標題朗讀：P08 5 顆（`What are Impromptu speaking skills?`／`Opinion Questions` 等）、全站 h2/h3/h4 英文標題自動加 `.say--title`，`data-say` 只含英文，遇到中譯即截斷；列印不顯示。
- 題目示範：抽題庫 14 題（P08 意見題 4 題、P11 辯論題 3 題、自我介紹／閱讀／未來／節日／通勤等）全部有「看示範 ↗」按鈕，彈窗三分頁（精簡版／標準版／進階版）＋逐句中譯；P08 第 2 題含 `/ What are your thoughts…` 的第二種問法亦已匹配。
- 抽題頁：抽出題目後「看三種示範 ↗」按鈕自動出現，清除後隱藏，鍵盤與觸屏點擊皆可開彈窗。
- 列印回歸：加入標題與題目按鈕後仍為 44 頁，按鈕與 tabs 不入列印。- 閱讀理解支架（P.18）：九道題（現代文 5 題＋英文寓言 4 題）各設「提示與答案」漸進式展開，內含淺黃「提示 Hint」、淺綠「參考答案 Model Answer」、淺藍「換句話說 Paraphrasing」三區；英文示範句下方的中譯以 16–18.5px 深色顯示，並可逐句播放。
- 預設全部收起，點按鈕才展開；再按收起；切換時自動停止朗讀，避免聲畫不同步。列印不顯示整個支架，維持 44 頁。
- 四天日程：P.00 新增四張日程卡（26/11 小組討論、27/11 討論總結＋核心＋即席、30/11 核心＋即席深化、1/12 閱讀＋朗讀＋禮儀），每卡列出分鐘分配、分組人數與本日頁碼，可一鍵進入該日。
- Day 篩選：頂部 Day 1–Day 4 膠囊只篩選側欄與上／下一頁範圍，教材仍按 PDF 全序保留；跳到別日頁面會自動回到「全部」，避免死路。
- 課堂工具 dock（右下）：計時器預設隨當日切換（Day 1 23:00、Day 2／3 30 秒、Day 4 60 秒），支援 23／20／15／3 分與 60／30 秒預設，最後 3 分鐘轉橙、1 分鐘轉紅並閃爍，收起後 chip 仍顯示剩餘時間。
- 全屏抽題：任何頁面按「抽題」即開 overlay，大字顯示題目、自動朗讀、30 秒圓環倒數；可「再抽一題」或直接開「看三種示範」，與 P08／P10／P24 內建抽題共用同一題庫。
- 段落標重點：工具 dock 開啟「標重點」後，點段落即加上黃色螢光底，再點取消；狀態存 localStorage，跨重載與列印保留，列印時 dock／Day 條隱藏。
- 列印回歸：加入日程卡後為 44 頁 A4（原 42 頁＋日程 2 頁），其餘版面與答案支架維持不變。