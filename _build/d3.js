/* ---------------------------------------------------------------- P.17 */
window.PAGES.push({
  id: 'P17', num: '17', chapter: 'c5',
  en: 'Reading Comprehension', zh: '閱讀理解', kicker: 'Chapter 5 · P.17',
  blocks: [
    { type: 'h2', en: '升中面試閱讀理解技巧', zh: '' },
    { type: 'callout', tone: 'info', title: '面試閱讀理解特點', html: '<ul class="callout__list"><li>限時閱讀一篇短文，然後即席口頭回答問題</li><li>問題答案不一定能直接從文中找到，需分析及理解後作答</li><li>如確實不知道答案或不理解問題，寧願坦白表示而不要啞口無言</li></ul>' },

    { type: 'h3', text: '快速理解文意並正確回答問題的方法' },
    { type: 'steps', items: [
      { tag: '1', html: '先閱讀問題 — 找出其中的「關鍵字」或關鍵意思，然後從文中搜尋相關答案' },
      { tag: '2', html: '快速閱讀文首及文末 — 例如第一段及末段，或首句及末句，掌握主旨' },
      { tag: '3', html: '一面閱讀，一面搜索：<ul class="sub"><li>誰在說話？（作者是誰、身份、職業）</li><li>地點在哪？</li><li>甚麼時間？（大概年份、季節、月份、星期、時段）</li><li>主旨？（作者要說甚麼、為什麼要說、他透過甚麼方式完成）</li></ul>' },
      { tag: '4', html: '在關鍵字詞處劃下標記 — 方便尋找答案' },
      { tag: '5', html: '保持冷靜，組織答案 — 用完整句子回答，展現思考過程' }
    ]},

    { type: 'callout', tone: 'tip', title: '面試小貼士', html: '如果遇到不懂的字詞，可嘗試從上下文推測意思。如果真的不明白，可以說：<strong>\u0022Excuse me, could you please explain the meaning of this word?\u0022</strong> 展現積極的溝通態度。' }
  ]
});

/* ---------------------------------------------------------------- P.18 */
window.PAGES.push({
  id: 'P18', num: '18', chapter: 'c5',
  en: '現代文與英文閱讀理解', zh: 'Reading Comprehension · Practice', kicker: 'Chapter 5 · P.18',
  blocks: [
    { type: 'h2', en: '現代文閱讀理解', zh: '我愛樹（節錄 賀秋寧）' },
    { type: 'passage', a: 'P18_ZH_01', paragraphs: [
      '我愛樹，因為樹為我帶來優美和寧靜。',
      '每當我心情煩惱時，我就走進樹林間，一進去便覺釋然無慮，塵慮全消；也唯有在樹林中，才能任意沉思，而在沉思中，才能檢討自己。',
      '漫步在林間時，我的胸襟是安寧平靜的，如一潭碧翠的溪水。微風吹來時，地上的樹蔭，立刻擾亂成波狀紋紋。冷不防，一陣狂風吹來，樹蔭像萬馬奔騰，使人覺得天在旋轉，萬物在狂舞。這時候在這境界，是多麼愉快。',
      '秋天到了，天氣漸漸變涼了，綠樹的葉子開始枯萎，一葉一葉的飄落而下，但是樹不因葉子掉落而憔悴消瘦；相反的，秋高氣爽，它更顯得崇高雅潔，枝枝的芽苗緊緊的包藏著，立意要與冬神搏鬥。'
    ], source: '節錄 賀秋寧〈我愛樹〉' },

    { type: 'h3', text: '問題' },
    { type: 'ol', items: [
      '作者每當心情煩惱時，就走進樹林間。你在心情煩惱時，會走到哪裡？做什麼？',
      '文中第二段作者提到「塵慮全消」，試猜想作者所指的「塵慮」是指什麼。',
      '作者在第三段見到風吹樹蔭，聯想到「萬馬奔騰」、「天在旋轉」、「萬物在狂舞」的愉快境界。當風吹著你的時候，你會有甚麼聯想呢？請分享。',
      '文中第四段提到的「冬神」意旨甚麼？',
      '你認為作者從樹身上學到了什麼人生態度？'
    ]},

    { type: 'h2', en: 'English Reading Comprehension', zh: '英文閱讀理解' },
    { type: 'h3', text: "Exercise: The Goose With the Golden Eggs (Aesop\u0027s Fable)" },
    { type: 'passage', a: 'P18_EN_01', paragraphs: [
      'One day a countryman going to the nest of his Goose found there an egg all yellow and glittering. When he took it up it was as heavy as lead and he was going to throw it away, because he thought a trick had been played upon him. But he took it home on second thoughts, and soon found to his delight that it was an egg of pure gold. Every morning the same thing occurred, and he soon became rich by selling his eggs. As he grew rich he grew greedy; and thinking to get at once all the gold the Goose could give, he killed it and opened it only to find nothing.'
    ], source: 'Aesop\u0027s Fables' },

    { type: 'h3', text: 'Questions' },
    { type: 'ol', items: [
      'Why did the countryman first think it was a trick played upon him?',
      "What did the Goose\u0027s egg look like?",
      'What does the story tell us?',
      'If you were the countryman, what would you do with the egg?'
    ]}
  ]
});

/* ---------------------------------------------------------------- P.19 */
window.PAGES.push({
  id: 'P19', num: '19', chapter: 'c6',
  en: 'Reciting Skills', zh: '朗讀技巧', kicker: 'Chapter 6 · P.19',
  blocks: [
    { type: 'h2', en: '朗讀工作坊', zh: '' },
    { type: 'h3', text: '朗讀定義' },
    { type: 'ul', items: [
      '<strong>周勤才：</strong>按書面語言轉化為具發音規範的有聲語言；利用聲音把書面語呈現的創造活動。',
      '<strong>彭永才：</strong>平面的文字化成立體的聲音，使有空間也有時間；要把印版文字，賦予生命，代入思想和感情。'
    ]},

    { type: 'h3', text: '聲情並茂' },
    { type: 'ul', items: [
      '<strong>聲</strong> — 清楚的發音、正確的讀音、恰當的語調、明朗的句讀',
      '<strong>情</strong> — 傳意的眼神、代入的感情、恰當的態勢',
      '<strong>聲情並茂而合節奏地誦讀出來</strong>，使聽誦的人受到感染而產生共鳴'
    ]},

    { type: 'h3', text: '技巧 1 – 朗讀時保持眼神接觸' },
    { type: 'passage', a: 'P19_ZH_01', highlight: true, paragraphs: [
      '這是一個小故事。故事說某年某月的某一天，一個閒人閒來無事，坐在一個角落裏靜靜地觀望著面前一個普通的蝴蝶蛹。那個蝴蝶蛹剛剛結束了封閉的狀態，在蛹的一端張開了一個小小的洞，這隻蝴蝶掙扎了數小時，似乎就是為了讓身體穿出蛹上那個小小的洞。然而，一切都是徒勞，蝴蝶未能夠破蛹而出。蛹裏的蝴蝶安靜下來，好像牠已經用盡了所有的力氣，無法再做任何的努力了。'
    ]},

    { type: 'h3', text: '技巧 2 – 句子適當停頓' },
    { type: 'paused', label: '朗讀示範：斜線為停頓位置（按右側按鈕顯示）', text: '這是一個/小故事。故事說/某年某月/的某一天，一個閒人/閒來無事，坐在一個角落裏/靜靜地觀望/著/面前一個/普通的蝴蝶蛹。那個蝴蝶蛹/剛剛結束了/封閉的狀態，在蛹的一端/張開了/一個小小的洞。這隻蝴蝶/掙扎了數小時，似乎就是為了/讓身體穿出/蛹上那個小小的洞。然而，一切/都是徒勞。蝴蝶沒有能夠/破蛹而出。蛹裏的蝴蝶/安靜下來，好像牠已經/用盡了/所有的力氣，無法再做/任何的努力了。' }
  ]
});

/* ---------------------------------------------------------------- P.20 */
window.PAGES.push({
  id: 'P20', num: '20', chapter: 'c6',
  en: 'Reciting Skills (Continued)', zh: '朗讀技巧（續）', kicker: 'Chapter 6 · P.20',
  blocks: [
    { type: 'h3', text: '技巧 3 – 強調關鍵內容' },
    { type: 'paused', label: '朗讀示範（紅字為教學建議強調處，可切換）', text: '這是一個/小故事。故事說/某年某月/的某一天，一個閒人/閒來無事，坐在一個角落裏/靜靜地觀望/著/面前一個/普通的蝴蝶蛹。那個蝴蝶蛹/剛剛結束了/封閉的狀態，在蛹的一端/張開了/一個小小的洞。這隻蝴蝶/掙扎了數小時，似乎就是為了/讓身體穿出/蛹上那個小小的洞。然而，一切/都是徒勞。蝴蝶沒有能夠/破蛹而出。蛹裏的蝴蝶/安靜下來，好像牠已經/用盡了/所有的力氣，無法再做/任何的努力了。', emphasis: ['小故事','某年某月','某一天','閒來無事','靜靜地','小小的洞','掙扎','徒勞','破蛹而出','所有的力氣'] },

    { type: 'h2', en: '正粵音', zh: '粵語正音對照' },
    { type: 'soundGroups', items: [
      { no: 'I.', title: '唔', note: '合口（M） vs 不合口（N）', cols: [
        { k: '合口（M）', v: '唔' },
        { k: '不合口（N）', v: '吳、吾、五、午、梧、蜈' }
      ]},
      { no: 'II.', title: 'G 音 gong', note: '依聲調分組', cols: [
        { k: '平聲', v: '江、缸、綱、剛、崗' },
        { k: '上聲', v: '港、講' },
        { k: '入聲', v: '角、各、覺、閣' },
        { k: '去聲', v: '鋼、降' }
      ]},
      { no: 'III.', title: 'GW 音', note: '', cols: [
        { k: '平聲', v: '光、胱' },
        { k: '上聲', v: '廣' },
        { k: '入聲', v: '國、郭、幗' }
      ]},
      { no: 'IV.', title: 'NG（從口腔出） vs N（齒舌結合）', note: '', cols: [
        { k: 'NG 音', v: '亨、恆、肯、杏、燈、等、凳、鄧、朋、講' },
        { k: 'N 音', v: '痕、狠、恨、敦、墩、躉、貧、趨' }
      ]},
      { no: 'V.', title: 'N-（帶鼻音）', note: '俱屬 N 音、不是 O 音', cols: [
        { k: '例字', v: '藝、危、牛、偶、銀、屹、我、俄' }
      ]},
      { no: 'VI.', title: 'L 音 vs N 音', note: '', cols: [
        { k: 'L 音', v: '藍、李、黎、賴、呂' },
        { k: 'N 音', v: '你、男、泥、奶、難、女' }
      ]}
    ]}
  ]
});

/* ---------------------------------------------------------------- P.21 */
window.PAGES.push({
  id: 'P21', num: '21', chapter: 'c6',
  en: 'Reciting Skills (Continued)', zh: '朗讀技巧（續）', kicker: 'Chapter 6 · P.21',
  blocks: [
    { type: 'soundGroups', items: [
      { no: 'VII.', title: 'K 音 vs H 音', note: '', cols: [
        { k: 'K 音', v: '佢' }, { k: 'H 音', v: '去' }
      ]},
      { no: 'VIII.', title: 'K 音 vs KW 音', note: '', cols: [
        { k: 'K 音', v: '確、溪、勤、卡' }, { k: 'KW 音', v: '擴、規、群、誇' }
      ]},
      { no: 'IX.', title: '入聲字 -k 與 -t', note: '', cols: [
        { k: '-k（aak3）', v: '伯、革、嚇、拍、北（bak1）' },
        { k: '-t', v: '壓（aat3；ngaat3）、不（bat1）' }
      ]}
    ]},

    { type: 'h3', text: '◇ 試讀' },
    { type: 'passage', a: 'P21_ZH_01', tone: 'quote', paragraphs: [
      '吳先生係我既好朋友，佢雖然家貧，但好鍾意藝術、人又唔虛偽。有次佢同個女去恆生銀行，上到閣樓，突然裡面黑 mengmeng，佢即刻話：好特別！點得架？真係要封你做偶像。'
    ], note: '這一段把第一至第六組的易混音集中在一起：吳（N）、五／午（N）、恆（NG）、藝（N-）、危（N-）、唔（M）、偽（N-）。' },

    { type: 'h3', text: '逐句讀技巧' },
    { type: 'passage', title: '世上沒有完美的父母', tone: 'quote', paragraphs: [
      '所有人都有弱點，有缺失，會做錯事，會有自相矛盾的時候。只有天主是完美的家長。',
      '世間最好的父母也曾犯錯和犯罪（沒有愛人的言行和心）。',
      '聖經說我們全都犯了罪，即是說，我和你都是遭扭曲的人。',
      '我看過一本書《你有問題！我有問題！》，正好說明了這點。我們都沒有完美的父母。同樣，你也不是完美的父母。'
    ]},

    { type: 'h2', en: '停連原則', zh: '語法與標點停頓' },
    { type: 'table', head: ['標點', '停頓'], rows: [
      ['頓號「、」、逗號「，」、冒號「：」、分號「；」', '停頓最短'],
      ['句號「。」、感歎號「！」、問號「？」、省略號「……」', '停頓最長']
    ]}
  ]
});

/* ---------------------------------------------------------------- P.22 */
window.PAGES.push({
  id: 'P22', num: '22', chapter: 'c6',
  en: 'Reciting Skills (Continued)', zh: '朗讀技巧（續）', kicker: 'Chapter 6 · P.22',
  blocks: [
    { type: 'h3', text: '語氣停頓' },
    { type: 'passage', tone: 'quote', paragraphs: [
      '敬重權威由家庭開始，這是每個孩童一定要學懂的關鍵一課。它決定你在學校、工作和在人際方面的發展。一個在成長階段常說「沒有人教我要做甚麼」的孩子，他出來社會工作必定遇到很多困難，好難有一份工做得長。'
    ]},

    { type: 'h3', text: '感情停連' },
    { type: 'passage', title: '環境保護', tone: 'quote', a: 'P22_ZH_01', paragraphs: [
      '地球正在發燒。冰川融化、海水上升、森林消失，這些都不是電影情節，而是真實發生的事。科學家警告，再不行動，北極熊將在五十年內絕種。我們還能裝作看不見嗎？'
    ]},

    { type: 'h2', en: 'English Poem Recitation', zh: '英文詩朗讀' },
    { type: 'poem', title: 'Poem 1: Some Things Don\u0027t Make Any Sense at All', lines: [
      'My mum says I\u0027m her sugarplum.',
      'My mum says I\u0027m her lamb.',
      'My mum says I\u0027m completely perfect',
      'Just the way I am.',
      'My mum says I\u0027m a super-special wonderful terrific little guy.',
      'My mum just had another baby.',
      'Why?'
    ], credit: '— Judith Viorst', a: 'P22_EN_01' },
    { type: 'callout', tone: 'tip', title: '朗讀提示', html: '<strong>Poem 1：</strong>前五行以溫暖、愉悅的語氣朗讀，表達母親的愛與讚美。最後兩行語速放慢，「Why?」要讀出困惑、不解的情感。' }
  ]
});
