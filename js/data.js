/* =========================================================================
   data.js — 題庫、填空答案、音頻路徑映射
   來源：面試班.pdf（Interview Textbook ES-Version 202610，AT Speech Learning Institute）
   排序：完全依 PDF 頁序（P.00 目錄、P.01–P.27）
   語法：
     [[b:示範答案]]  可點擊填空（綠底揭示答案）
     [[s:示範資料]]  個人資料插槽（點擊顯示填寫提示）
   ========================================================================= */

window.CHAPTERS = [
  { id: 'c0', en: 'Contents', zh: '目錄' },
  { id: 'c1', en: 'My Pledge', zh: '我的承諾' },
  { id: 'c2', en: 'Core Interview Questions', zh: '核心面試問題' },
  { id: 'c3', en: 'Impromptu Speaking Skills', zh: '即席說話技巧' },
  { id: 'c4', en: 'Group Discussion', zh: '小組討論' },
  { id: 'c5', en: 'Reading Comprehension', zh: '閱讀理解' },
  { id: 'c6', en: 'Reciting Skills', zh: '朗讀技巧' },
  { id: 'c7', en: 'Interview Etiquette', zh: '面試禮儀' },
  { id: 'c8', en: 'Appendix', zh: '附錄' }
];

/* 音頻清單：留空即全部使用瀏覽器 TTS；
   若把 MP3 放入 /audio，於此加入 key（例：'P03_EN_01'）即可自動優先播放檔案。 */
window.AUDIO_MANIFEST = [
  'P02_EN_01',
  'P02_EN_02',
  'P02_EN_03',
  'P02_EN_04',
  'P02_EN_05',
  'P03_EN_01',
  'P03_EN_02',
  'P03_EN_03',
  'P03_EN_04',
  'P03_EN_05',
  'P03_EN_06',
  'P03_EN_07',
  'P04_EN_01',
  'P04_EN_02',
  'P04_EN_03',
  'P05_EN_01',
  'P05_EN_02',
  'P05_EN_03',
  'P05_EN_04',
  'P05_EN_05',
  'P05_EN_06',
  'P05_EN_07',
  'P05_EN_08',
  'P05_EN_09',
  'P06_EN_01',
  'P06_EN_02',
  'P06_EN_03',
  'P06_EN_04',
  'P06_EN_05',
  'P06_EN_06',
  'P06_EN_07',
  'P06_EN_08',
  'P07_EN_01',
  'P07_EN_02',
  'P07_EN_03',
  'P07_EN_04',
  'P08_EN_01',
  'P09_EN_01',
  'P09_EN_02',
  'P18_EN_01',
  'P22_EN_01'
];
window.AUDIO_BASE = 'audio/';

window.COURSE_META = {
  titleEn: 'Interview Textbook',
  titleZh: '升中面試互動課件',
  institution: 'AT Speech Learning Institute｜升中面試特訓',
  version: 'ES-V202610'
};

/* 示範資料庫：點擊課文中的 \[\[s:提示|key\]\] 插槽，以分頁彈窗顯示 3 種示範說法。
   html 內的 <mark> 會以主色高亮，say 為播放用的純文字（已代入示例資料）。 */
window.DEMO_BANK = {
  name: {
    title: '示範：怎樣說自己的名字',
    demos: [
      { label: '標準版', html: 'My name is <mark>Mary</mark>.',
        say: 'My name is Mary.' },
      { label: '加上背景', html: 'My name is <mark>Mary</mark>, and I am a Primary Six student at Tsuen Wan Government Primary School.',
        say: 'My name is Mary, and I am a Primary Six student at Tsuen Wan Government Primary School.' },
      { label: '說出名字的意思', html: 'My name is <mark>Mary</mark>. It means "beloved", and I try to be someone my friends can always rely on.',
        say: 'My name is Mary. It means beloved, and I try to be someone my friends can always rely on.' }
    ]
  },
  family: {
    title: '示範：怎樣介紹家庭成員',
    demos: [
      { label: '標準版', html: 'I live with my parents. I am <mark>the eldest child</mark>, so I help look after my younger brother.',
        say: 'I live with my parents. I am the eldest child, so I help look after my younger brother.' },
      { label: '獨生子女', html: 'I am <mark>an only child</mark>, but I never feel lonely because my parents and cousins are very close to me.',
        say: 'I am an only child, but I never feel lonely because my parents and cousins are very close to me.' },
      { label: '具體一點', html: 'There are four people in my family: my parents, my elder sister and me. We share the housework and talk every evening.',
        say: 'There are four people in my family: my parents, my elder sister and me. We share the housework and talk every evening.' }
    ]
  },
  school: {
    title: '示範：怎樣介紹就讀的小學',
    demos: [
      { label: '標準版', html: 'I study at <mark>Tsuen Wan Government Primary School</mark>. I like my school very much.',
        say: 'I study at Tsuen Wan Government Primary School. I like my school very much.' },
      { label: '進階版 · 學術', html: 'I am currently studying at <mark>Tsuen Wan Government Primary School</mark>, where I have developed a strong passion for languages and reading.',
        say: 'I am currently studying at Tsuen Wan Government Primary School, where I have developed a strong passion for languages and reading.' },
      { label: '進階版 · 活動', html: 'I attend <mark>Tsuen Wan Government Primary School</mark>. It is a lively school with many extracurricular activities, and I have made many good friends there.',
        say: 'I attend Tsuen Wan Government Primary School. It is a lively school with many extracurricular activities, and I have made many good friends there.' }
    ]
  },
  rank: {
    title: '示範：怎樣描述成績名次',
    demos: [
      { label: '標準版', html: 'I am proud to have achieved <mark>third place</mark> in my class this year.',
        say: 'I am proud to have achieved third place in my class this year.' },
      { label: '強調進步', html: 'Through hard work, I improved from fifteenth to <mark>third place</mark> in my class this year.',
        say: 'Through hard work, I improved from fifteenth to third place in my class this year.' },
      { label: '具體科目', html: 'I particularly excel in Mathematics and came <mark>second</mark> in this subject across my grade.',
        say: 'I particularly excel in Mathematics and came second in this subject across my grade.' }
    ]
  },
  subject: {
    title: '示範：怎樣說自己擅長的科目',
    demos: [
      { label: '數學', html: 'I am good at <mark>Mathematics</mark>. I enjoy solving problems step by step until the answer becomes clear.',
        say: 'I am good at Mathematics. I enjoy solving problems step by step until the answer becomes clear.' },
      { label: '中文 · 閱讀', html: 'I am good at <mark>Chinese</mark>. I love reading stories and writing about the characters I meet.',
        say: 'I am good at Chinese. I love reading stories and writing about the characters I meet.' },
      { label: '英文 · 表達', html: 'I am good at <mark>English</mark>. I enjoy reading English novels and speaking with my classmates.',
        say: 'I am good at English. I enjoy reading English novels and speaking with my classmates.' },
      { label: '體育 · 團隊', html: 'I am good at <mark>Physical Education</mark>. I play basketball every week and never give up during a match.',
        say: 'I am good at Physical Education. I play basketball every week and never give up during a match.' },
      { label: '視藝 · 創作', html: 'I am good at <mark>Visual Arts</mark>. I designed the poster for our class project and it was displayed in the hall.',
        say: 'I am good at Visual Arts. I designed the poster for our class project and it was displayed in the hall.' }
    ]
  },
  district: {
    title: '示範：怎樣說自己住哪一區',
    demos: [
      { label: '標準版', html: 'We live in <mark>Tsuen Wan</mark>.',
        say: 'We live in Tsuen Wan.' },
      { label: '生活細節', html: 'We live in <mark>Tsuen Wan</mark>, a lively district with parks and a big library near my home.',
        say: 'We live in Tsuen Wan, a lively district with parks and a big library near my home.' },
      { label: '上學路程', html: 'We live in <mark>Tsuen Wan</mark>; it takes me about twenty minutes to get to school by bus.',
        say: 'We live in Tsuen Wan. It takes me about twenty minutes to get to school by bus.' }
    ]
  },
  outing: {
    title: '示範：怎樣寫一次家庭外出',
    demos: [
      { label: '標準版', html: 'My family and I went to <mark>Victoria Park</mark> together.',
        say: 'My family and I went to Victoria Park together.' },
      { label: '加上畫面', html: 'My family and I went to <mark>Repulse Bay</mark> together, and we spent the whole afternoon building sandcastles.',
        say: 'My family and I went to Repulse Bay together, and we spent the whole afternoon building sandcastles.' },
      { label: '加上意義', html: 'To celebrate my birthday, my family and I went to <mark>a small restaurant in Tsuen Wan</mark>. It was simple, but it reminded me how much my parents care about me.',
        say: 'To celebrate my birthday, my family and I went to a small restaurant in Tsuen Wan. It was simple, but it reminded me how much my parents care about me.' }
    ]
  }
};

window.PAGES = [

/* ---------------------------------------------------------------- P.00 */
{
  id: 'P00', num: '00', chapter: 'c0',
  en: 'Contents', zh: '目錄', kicker: 'Course Overview',
  blocks: [
    { type: 'days' },
    { type: 'lead', html: '全書八個章節、二十七頁，按原書頁序編排。點擊任何條目可直接跳頁。' },
    { type: 'toc', items: [
      { en: 'My Pledge', zh: '我的承諾', page: 'P01', num: '1' },
      { en: 'Core Interview Questions', zh: '核心面試問題', page: 'P02', num: '2' },
      { en: 'Impromptu Speaking Skills', zh: '即席說話技巧', page: 'P08', num: '8' },
      { en: 'Group Discussion', zh: '小組討論', page: 'P11', num: '11' },
      { en: 'Reading Comprehension', zh: '閱讀理解', page: 'P17', num: '17' },
      { en: 'Reciting Skills', zh: '朗讀技巧', page: 'P19', num: '19' },
      { en: 'Interview Etiquette', zh: '面試禮儀', page: 'P23', num: '23' },
      { en: 'Appendix / For Student Reference Only', zh: '附錄 / 僅供學生參考', page: 'P24', num: '24', sub: [
        'Common Interview Questions 一般面試問題',
        'Application Form 入學申請表格'
      ]}
    ]},
    { type: 'callout', tone: 'info', title: '頁序說明', html: '本課件頁碼與原書印刷頁碼一致（P.01–P.27）。原書 P.01「My Pledge」一頁未在掃描檔內，該頁以課程框架補建並標示待補原文；附錄「Application Form」同屬掃描檔缺頁。' }
  ]
},

/* ---------------------------------------------------------------- P.01 */
{
  id: 'P01', num: '01', chapter: 'c1',
  en: 'My Pledge', zh: '我的承諾', kicker: 'Chapter 1',
  blocks: [
    { type: 'lead', html: '給自己一個承諾：面試班不是「聽課」，是「開口」。每一堂課，你都要為自己的聲音負責。' },
    { type: 'callout', tone: 'warn', title: '原文頁待補', html: '掃描檔自目錄頁直接跳至 P.02，原書 P.01 的承諾頁正文未收錄。以下為依課程結構補建的承諾卡，內容可自行替換；原文補回後可直接覆蓋本頁。' },
    { type: 'pledge', title: 'My Pledge 我的承諾', items: [
      { text: '我會準時出席每一堂課，並在課前五分鐘做好準備。', zh: '' },
      { text: '我會用完整的英文句子回答，而不是單字。' },
      { text: '我會大聲、清楚地說話，讓最後一排的人都聽得見。' },
      { text: '我會勇於舉手、主動發言，不怕說錯。' },
      { text: '我會每天朗讀一段文字，練習眼神、停頓與語氣。' },
      { text: '我會在每次模擬面試後，記下一個要改進的地方。' }
    ]},
    { type: 'p', html: '簽署：<span class="signature-line"></span>　　日期：<span class="signature-line signature-line--sm"></span>' }
  ]
},

/* ---------------------------------------------------------------- P.02 */
{
  id: 'P02', num: '02', chapter: 'c2',
  en: 'Core Interview Questions (Questions 1–5)', zh: '核心面試問題（第 1–5 題）', kicker: 'Chapter 2 · P.2',
  blocks: [
    { type: 'h2', en: '1. Could you introduce yourself?', zh: '你可以介紹一下自己嗎？' },

    { type: 'h3', text: 'Basic information and family 基本資料與家庭' },
    { type: 'p', html: 'My name is [[b:Mary]]. I live with my parents. I am [[s:an only child / the eldest child|family]] [[s:I have two siblings 兄弟姐妹|family]]. I get along very well with my family.', a: 'P02_EN_01' },

    { type: 'h3', text: 'School and academic strengths 學校與學業優勢' },
    { type: 'p', html: 'I study at [[s:School Name|school]]. I like school very much. I particularly excel (擅長) in Chinese and English because I enjoy reading. I always work hard, I am proud to have achieved [[s:rank|rank]] in my class this year.', a: 'P02_EN_02' },

    { type: 'h3', text: 'Character strengths and weaknesses 性格優點與缺點' },
    { type: 'p', html: 'I am a hardworking and determined (有決心) person. I am good at [[s:Maths / Music|subject]]. I am also aware of my weaknesses. For instance, I can be quite a perfectionist (完美主義者), I often insist on completing one task thoroughly before starting another. I am learning to manage my time better so I can do more things.', a: 'P02_EN_03' },

    { type: 'callout', tone: 'tip', title: '以下是一些簡單的詞語，可以根據自己的性格來表達', html: '挑兩三個真正屬於你的詞，其餘留白。考官問「為什麼」，比問「是什麼」多。<br>點擊任何詞語，可看三句示範（分頁切換不同說法）。' },

    { type: 'pills', label: 'Strengths 優點', items: [
      'Diligent 勤奮', 'Positive 積極', 'Creative 有創意', 'Responsible 負責任',
      'Strong 堅強', 'A Team Player 有團隊精神的人', 'Curious 有好奇心'
    ]},
    { type: 'p', html: '<strong>Weakness：</strong>在描述缺點時，重點不在於那個「詞」，而是在於你「如何改進」。' },
    { type: 'pills', label: 'Weakness 可用的詞', items: [
      'Impulsive 衝動', 'Self-critical 自我要求嚴苛', 'Impatient 沒耐性', 'Reserved 內斂'
    ]},

    { type: 'h3', text: 'After school activities / awards 課外活動與獎項' },
    { type: 'p', html: 'I am in the school choir and the basketball team. I love singing and sports. I have received several Certificates of Merit at the Hong Kong Schools Music Festival. These experiences have taught me the value of teamwork and never give up (不輕易放棄).', a: 'P02_EN_04' },

    { type: 'pills', label: 'After School activities 課外活動', items: [
      'School Choir / Orchestra', 'STEM Club', 'Debate Club', 'Boy Scouts / Girl Guides'
    ]},
    { type: 'pills', label: 'Awards 獎項', items: [
      'Best Progress Award', 'Conduct Award', 'Outstanding Service Award', 'Speech Festival – Merit'
    ]},

    { type: 'h3', text: 'Social service 社會服務' },
    { type: 'p', html: 'I like helping others. As a school prefect and an active member of the Community Youth Club (CYC), I have learned how to be a responsible leader. I enjoy serving the community because making a positive impact brings me a great sense of achievement.', a: 'P02_EN_05' },
    { type: 'callout', tone: 'info', html: '社會服務是展現學生同理心（Empathy）和公民責任感（Civic Responsibility）的最佳途徑。' },
    { type: 'pills', label: 'Social Service Options 社會服務選項', items: [
      'Flag Selling 賣旗', 'Visiting Elderly Homes 探訪老人院', 'Beach Cleanup 沙灘清潔活動', 'Charity Bazaar 學校義賣活動'
    ]}
  ]
},

/* ---------------------------------------------------------------- P.03 */
{
  id: 'P03', num: '03', chapter: 'c2',
  en: 'Core Interview Questions (Continued)', zh: '核心面試問題（續）', kicker: 'Chapter 2 · P.3',
  blocks: [
    { type: 'h2', en: '1. Could you introduce yourself? (Continued)', zh: '自我介紹（續）· 示範答案' },
    { type: 'example', label: 'Example 示範', a: 'P03_EN_01', paragraphs: [
      'Good morning. My name is [[s:Name|name]] and I study at [[s:School Name|school]]. I am the eldest child in my family, which has taught me to be responsible and caring from a young age.',
      'In school, I am a hard-working student who excels in Chinese and English. I was very proud to receive the Best Progress Award last year, as it showed that my effort really paid off.',
      'Outside the classroom, I am an active person. I enjoy singing in the school choir and playing basketball. These activities helped me win a Merit in the Speech Festival and taught me how to be a good team player.',
      'I also love giving back to society through social service, such as flag selling and visiting elderly homes. These experiences made me more compassionate. As a school prefect, I enjoy helping my teachers and peers every day.',
      'Sometimes, I tend to focus too much on one thing because I want it to be perfect. However, I am learning to manage my time better and be more flexible. I truly hope to join your school family and learn from the teachers here. Thank you.'
    ]},
    { type: 'callout', tone: 'tip', title: '朗讀提示', html: '示範答案分五段：家庭 → 學業 → 課外 → 服務 → 自省。面試時不必逐字背，記住五個「路標」，用自己的話講。' },

    { type: 'h2', en: '2. Why do you want to attend our school?', zh: '你為什麼希望入讀本校？' },

    { type: 'h3', text: 'Qualities of teachers and students 師生特質' },
    { type: 'p', html: 'Having visited your school and spoken with both the teachers and students, I was deeply impressed by how kind, supportive, and capable the school community is. It is evident that the school fosters a warm and nurturing environment where every member is valued.', a: 'P03_EN_02' },

    { type: 'h3', text: 'Academic performances / sports performances of the school 學校的學術與體育表現' },
    { type: 'p', html: "Your school's outstanding reputation in academic achievements / sporting excellence is truly inspiring, and I sincerely hope to challenge myself and achieve the same high standards here.", a: 'P03_EN_03' },

    { type: 'h3', text: 'Subjects that interest you 你感興趣的科目' },
    { type: 'p', html: 'I am eager to explore subjects such as English Literature, Drama, Information and Communication Technology (ICT) 資訊及通訊科技, Arts 藝術, which are excellently provided by your curriculum.', a: 'P03_EN_04' },

    { type: 'h3', text: 'Facilities that interest you 你感興趣的設施' },
    { type: 'p', html: "I am also very impressed by your school's modern facilities. Especially the extensive library, the Auditorium 大演奏廳, the Indoor Swimming Pool, and the Drama and Dance Studio. I believe these will make my learning much more interesting.", a: 'P03_EN_05' },

    { type: 'h3', text: 'History / culture that attracts you 吸引你的歷史與文化' },
    { type: 'p', html: "Your school's illustrious history 輝煌的歷史, dating back to 19XX, and your time-honoured motto 歷史悠久校訓, 「[[b:校訓示範：To Serve and to Lead]]」, deeply inspire me. It is evident that the school has cultivated a distinguished culture 卓越的文化 where students are not only bright and articulate 口齒伶俐 but also hardworking and persistent 勤奮且堅持不懈.", a: 'P03_EN_06' },

    { type: 'h3', text: 'Personal academic performances / sports achievements / awards / characteristics 個人學業、體育、獎項與特質' },
    { type: 'p', html: '以下是一些簡單的詞語，可以根據自己的情況來用：' },
    { type: 'pills', label: 'Academic Performances 學業表現', items: [
      'Consistently high achiever 持續取得高分的學生', 'Always get good marks', 'Strong analytical skills',
      'Intellectually curious 具備求知慾', 'Love to learn new things', 'Diligent and self-motivated 勤奮且自我驅動',
      'Work hard and study by myself', 'Excel in [Subject] 在[科目]表現優異', 'Very good at subject',
      'Proficient in [Skill/Language] 精通[技能／語言]'
    ]},
    { type: 'example', label: 'Example 示範', a: 'P03_EN_07', paragraphs: [
      "I always get good marks in Maths. I love to learn new things and always try to find out more than what's in my books."
    ]}
  ]
},

/* ---------------------------------------------------------------- P.04 */
{
  id: 'P04', num: '04', chapter: 'c2',
  en: 'Core Interview Questions (Continued)', zh: '核心面試問題（續）', kicker: 'Chapter 2 · P.4',
  blocks: [
    { type: 'h2', en: '2. Why do you want to attend our school? (Continued)', zh: '為什麼選擇本校（續）' },

    { type: 'h3', text: 'Sports Achievements 體育成就' },
    { type: 'pills', label: '可用的表達', items: [
      'Dedicated athlete 專注的運動員', 'A keen sports player', 'Team player 具備團隊精神的人',
      'Resilient and disciplined 堅韌且守紀律', 'Demonstrated leadership as team captain 作為隊長展現領導力',
      'Sportsmanship 體育精神'
    ]},
    { type: 'example', label: 'Example 示範', a: 'P04_EN_01', paragraphs: [
      "As a keen sports player and the captain of my school's football team, I learned how important it is to work with a team and play fair even when it's difficult."
    ]},

    { type: 'h3', text: 'Awards and Honors 獎項與榮譽' },
    { type: 'pills', label: '可用的表達', items: [
      'Won the [Name of Award]', 'Recognized for outstanding performance in… 因在…的傑出表現而獲得認可',
      'Awarded a scholarship for academic excellence 因學術卓越而獲頒獎學金',
      'Champion / First / Second Runner-up in the [Competition Name]', 'Merit award'
    ]},
    { type: 'example', label: 'Example 示範', a: 'P04_EN_02', paragraphs: [
      "I was happy to win the Principal's Award and was recognized for my outstanding performance in the regional science fair."
    ]},

    { type: 'h3', text: 'Personal Characteristics 個人特質' },
    { type: 'pills', label: '可用的表達', items: [
      'Adaptable and versatile, An all-rounder 適應力強且多才多藝', 'Can change and learn new things easily',
      'Compassionate and empathetic 富有同情心且具備同理心', 'Proactive and initiative-taking 積極主動',
      'Detail-oriented 注重細節', 'Creative problem solver 具備創意的問題解決者',
      'Well-rounded individual 全面發展的個人'
    ]},
    { type: 'example', label: 'Example 示範', a: 'P04_EN_03', paragraphs: [
      "I consider myself a well-rounded individual who is both adaptable and versatile. I am a creative problem solver who enjoys tackling new challenges."
    ], note: '我認為自己是一個全面發展的個人，適應力強且多才多藝。我是一個具備創意的問題解決者，喜歡應對新的挑戰。' }
  ]
},

/* ---------------------------------------------------------------- P.05 */
{
  id: 'P05', num: '05', chapter: 'c2',
  en: 'Core Interview Questions (Continued)', zh: '核心面試問題（續）', kicker: 'Chapter 2 · P.5',
  blocks: [
    { type: 'h2', en: '3. Could you introduce your family?', zh: '你可以介紹你的家庭嗎？' },

    { type: 'h3', text: 'Basic information 基本資料' },
    { type: 'p', html: '<strong>How many family members do you have?</strong>' },
    { type: 'p', html: 'There are four of us in my family, including my father, my mother, my younger sister, and me. 一個妹妹（younger sister）、一個哥哥（elder brother）', a: 'P05_EN_01' },
    { type: 'p', html: '獨生子女（only child）：There are three of us in my family, including my parents and me. I am an only child, so I spend a lot of quality time with my parents.', a: 'P05_EN_02' },
    { type: 'p', html: '你是家裡最大的：可以說 "I am the eldest child, and I have two younger siblings."（我是長子，有兩個弟妹），一次過形容兄弟姊妹：Siblings', a: 'P05_EN_03' },
    { type: 'p', html: 'There are two of us in my family, including my mother and me. We are very happy and close. This has taught me to be more independent.（single-parent family 單親家庭）', a: 'P05_EN_04' },

    { type: 'h3', text: 'What are their careers? 他們的職業是什麼？' },
    { type: 'p', html: 'My father is an engineer, while my mother is a dedicated homemaker who takes great care of our daily lives. 建議用 "Homemaker"，比 "Housewife" 聽起來更具專業感和尊重感。', a: 'P05_EN_05' },
    { type: 'pills', label: 'Careers 職業詞庫', items: [
      'Manager', 'Engineer', 'Clerk / Office worker', 'Accountant', 'Lawyer', 'Doctor', 'Teacher',
      'Nurse', 'Businessman', 'Civil Servant', 'Sales Consultant', 'IT Consultant', 'Police Officer'
    ]},

    { type: 'h3', text: 'Where do you live? / Weekend activities 居住與週末活動' },
    { type: 'p', html: 'We live in… [[s:your district, e.g. Tsuen Wan|district]]' },
    { type: 'p', html: 'During weekends, we usually (go to the library / museums / go shopping / go hiking in the countryside / park) together. These outings are important to us because they help us stay healthy and relax after a busy week.', a: 'P05_EN_06' },

    { type: 'h3', text: 'Do you enjoy your family life? 你享受家庭生活嗎？' },
    { type: 'p', html: 'I really enjoy my family life. My parents love me, they not only guide me in my studies but also instill good values (灌輸良好價值觀) in me, teaching me to be a person of integrity (正直) and kindness. I love my parents very much and I am grateful (感激) for their constant support.', a: 'P05_EN_07' },

    { type: 'h3', text: 'A family story 家庭故事' },
    { type: 'h4', text: 'The Illness Story 生病照顧的故事' },
    { type: 'p', html: 'Let me share a meaningful family story with you. When I was about 8 years old, I got quite sick with a high fever. I felt very weak and scared. My parents took wonderful care of me. They stayed by my side almost all the time, checking my temperature and giving me medicine. They even told me stories to make me feel better.', a: 'P05_EN_08' },
    { type: 'p', html: 'After a few days, I got well again! To celebrate, my family and I went to [[s:the park / the beach / a nice restaurant|outing]] together. This experience made me truly feel my parents\' deep love for me, and it made me incredibly thankful to be born into this family. I learned that my family is always there for me, no matter what.', a: 'P05_EN_09' }
  ]
},

/* ---------------------------------------------------------------- P.06 */
{
  id: 'P06', num: '06', chapter: 'c2',
  en: 'Core Interview Questions (Continued)', zh: '核心面試問題（續）', kicker: 'Chapter 2 · P.6',
  blocks: [
    { type: 'h2', en: '4. What do you want to be in the future?', zh: '你將來想做什麼？' },
    { type: 'p', html: '同義問法：<em>What is your dream?／Where do you see yourself in 10 years?</em>　以下八段示範，選一段最接近你的想法，改成自己的版本。' },

    { type: 'p', html: 'When I grow up, I aspire to be a <strong>doctor</strong>. I believe it\'s a noble profession where I can genuinely help people and contribute to their well-being. I am particularly interested in medical research, and I hope to be part of a team that discovers new ways to treat illnesses, ultimately helping many people live healthier and happier lives.', a: 'P06_EN_01' },

    { type: 'p', html: 'My dream is to become a <strong>pilot</strong>. I am fascinated by aviation and the idea of flying across the globe. I would love to experience different cultures and see many beautiful places, such as Japan, France, and Australia. I believe being a pilot would allow me to combine my passion for travel with a challenging and rewarding career.', a: 'P06_EN_02' },

    { type: 'p', html: 'I wish to become an <strong>architect</strong> in the future. I am very keen on designing and creating new structures. I hope to design buildings that are not only functional but also inspiring and iconic, much like the impressive IFC building in Central, which truly represents Hong Kong\'s modern skyline. I want to contribute to shaping our city\'s future appearance.', a: 'P06_EN_03' },

    { type: 'p', html: 'I want to be a <strong>lawyer</strong> because I believe in justice and fairness. I would like to help people who are in need of legal assistance and ensure that everyone is treated equally under the law. I think a strong legal system is crucial for a stable and fair society, and I want to play a part in upholding those principles in Hong Kong.', a: 'P06_EN_04' },

    { type: 'p', html: 'I hope to be a <strong>teacher</strong> as I have a strong command of languages. Furthermore, I want to teach students not just academic knowledge, but how to develop strong moral character.', a: 'P06_EN_05' },

    { type: 'p', html: 'I <strong>haven\'t decided on a specific career</strong> yet, but I am very passionate about mathematics. I love solving complex problems and finding logical solutions. I hope to pursue a career where I can apply my mathematical skills.', a: 'P06_EN_06' },

    { type: 'p', html: 'I aspire to be a <strong>businessman</strong>, following in my father\'s footsteps. I am eager to learn how to create value, innovate, and contribute to the economy. I also want to be able to provide for my family in the future. I believe that with hard work and good ideas, I can build a successful enterprise and make a positive difference.', a: 'P06_EN_07' },

    { type: 'p', html: 'I plan to <strong>study Global Business overseas</strong>, ideally in the UK or the USA. I aim to earn a Master\'s and a Doctorate degree, and eventually start my own business. This education will provide the knowledge I need to make a positive impact on the community.', a: 'P06_EN_08' }
  ]
},

/* ---------------------------------------------------------------- P.07 */
{
  id: 'P07', num: '07', chapter: 'c2',
  en: 'Core Interview Questions (Continued)', zh: '核心面試問題（續）', kicker: 'Chapter 2 · P.7',
  blocks: [
    { type: 'h2', en: '5. Please introduce a book that you have read.', zh: '請介紹一本你看過的書。' },

    { type: 'p', html: 'I would like to introduce a book called <em>Science Discovery</em>.', a: 'P07_EN_01' },
    { type: 'p', html: '<strong>Summary：</strong>It is a non-fiction book that explores the most important scientific inventions and discoveries of the 20th century. It also shares the fascinating life stories of great scientists, such as Thomas Edison（愛迪生）and Albert Einstein（愛因斯坦）.', a: 'P07_EN_02' },
    { type: 'p', html: '<strong>I like this book because</strong> it is very informative but easy to understand. It uses simple language to explain complex ideas, which makes learning science very enjoyable.', a: 'P07_EN_03' },
    { type: 'p', html: '<strong>Impact：</strong>This book has sparked my curiosity（激發我的好奇心）about how things work. It inspired（啟發）me to be more observant（細心觀察）in my daily life and to keep exploring new knowledge. Thank you.', a: 'P07_EN_04' },

    { type: 'callout', tone: 'tip', title: '介紹書本的「萬用公式」', html: '無論你選擇哪本書，都可以遵循這個結構：' },
    { type: 'steps', items: [
      { tag: '1', html: '<strong>Title &amp; Author</strong> 書名與作者' },
      { tag: '2', html: '<strong>Summary</strong> 簡單內容：It is about…' },
      { tag: '3', html: '<strong>Personal Connection</strong> 個人感受：I like it because…' },
      { tag: '4', html: '<strong>Impact</strong> 這本書對你的影響：It inspired me to…' }
    ]},
    { type: 'pills', label: 'Genre 種類', items: [
      'Fiction 小說', 'Non-fiction 非小說', 'Biography 傳記', 'Fantasy 奇幻小說', 'Adventure 冒險小說'
    ]}
  ]
},

/* ---------------------------------------------------------------- P.08 */
{
  id: 'P08', num: '08', chapter: 'c3',
  en: 'Impromptu Speaking Skills', zh: '即席說話技巧', kicker: 'Chapter 3 · P.8',
  blocks: [
    { type: 'h2', en: 'What are Impromptu speaking skills?', zh: '什麼是即席說話技巧？' },
    { type: 'ol', items: [
      'They consist of speech patterns and a series of pre-set sentence structures.',
      'Impromptu skills help you to organise your thoughts in next to no time.（快速組織說話）',
      'They are useful when you are asked for your opinion…（問意見時適用）',
      'They are useful when you are asked about something you don\u0027t know…（不懂回答時適用）'
    ]},

    { type: 'h2', en: 'Opinion Questions', zh: '意見題示例' },
    { type: 'ol', items: [
      'What is your idea of a good classmate?',
      'What is your opinion on junk food? / What are your thoughts on junk food?',
      "Talk about 'bananas' for one minute.",
      'If your father were made redundant, how would you help him?'
    ]},

    { type: 'h2', en: 'When answering \u0027difficult\u0027 questions…', zh: '面對難題時' },
    { type: 'callout', tone: 'info', title: 'Three Golden Rules 三大黃金法則', html: '<ol class="callout__list"><li><strong>Follow the patterns</strong> 根據既定模式回答</li><li><strong>Keep it sweet and simple / Less is more</strong> 簡單就是美，少即是多</li><li><strong>Think in English, speak in English</strong> 用英文想、用英文答</li></ol>' },

    { type: 'h2', en: 'Pattern One: First–Second–Third', zh: '模式一：第一、第二、第三' },
    { type: 'steps', items: [
      { tag: '1', html: 'Say thank you' },
      { tag: '2', html: 'Repeat the question' },
      { tag: '3', html: 'State your position（說明立場）：I agree / think … is / is not <span class="or">OR</span> should / should not…' },
      { tag: '4', html: 'Signpost 思路路標 the points: I have three reasons for this. <strong>Firstly</strong>… <strong>Secondly</strong>… <strong>Thirdly</strong>…' },
      { tag: '5', html: 'Closing statement: I strongly believe……' }
    ]},

    { type: 'h3', text: 'Example 1: Do you think Hong Kong should control its air pollution? 香港應該控制空氣污染嗎？' },
    { type: 'steps', items: [
      { tag: 'Say thank you', html: 'Thank you for your question.' },
      { tag: 'Repeat', html: 'Your question is whether I think Hong Kong should control its air pollution.' }
    ], a: 'P08_EN_01' },
    { type: 'callout', tone: 'warn', html: '下一頁（P.09）接續同一題的立場、路標與總結，並示範第二題。' }
  ]
},

/* ---------------------------------------------------------------- P.09 */
{
  id: 'P09', num: '09', chapter: 'c3',
  en: 'Impromptu Speaking Skills (Continued)', zh: '即席說話技巧（續）', kicker: 'Chapter 3 · P.9',
  blocks: [
    { type: 'steps', items: [
      { tag: 'State your position', html: 'Yes, I completely agree. Hong Kong definitely needs to control its air pollution.' },
      { tag: 'Signpost', html: 'I have three main reasons for this. <strong>Firstly</strong>, poor air quality poses a serious risk to our health. <strong>Secondly</strong>, tourists and businesses will avoid coming to Hong Kong if the air is too polluted. <strong>Thirdly</strong>, I simply do not want my younger siblings to grow up breathing in polluted air.' },
      { tag: 'Closing', html: 'Therefore, I strongly believe Hong Kong must control its air pollution. It is important for everyone\u0027s health and for our city\u0027s future.' }
    ], a: 'P09_EN_01' },

    { type: 'h3', text: 'Example 2: Do you think Hong Kong children should do more exercise?' },
    { type: 'steps', items: [
      { tag: 'Say thank you', html: 'Thank you for your question.' },
      { tag: 'Repeat', html: 'Your question is whether I think Hong Kong children should do more exercise.' },
      { tag: 'State your position', html: 'Yes, I entirely agree. Hong Kong children should certainly do more exercise.' },
      { tag: 'Signpost', html: 'I have three main reasons for this. <strong>Firstly</strong>, doing more exercise makes us much healthier and stronger. <strong>Secondly</strong>, if we exercise regularly, we will not need to go to the doctor\u0027s so often. <strong>Thirdly</strong>, having a healthier body helps us focus and study much better.' },
      { tag: 'Closing', html: 'Therefore, I strongly believe Hong Kong children should do more exercise. It helps us grow up not just strong in body, but also sharp in mind, making us happier and better learners.' }
    ], a: 'P09_EN_02' },

    { type: 'p', html: '提示：兩題的骨架完全相同。你只需要替換「立場」與「三個理由」，就能在三十秒內組織出有結構的答案。' }
  ]
},

/* ---------------------------------------------------------------- P.10 */
{
  id: 'P10', num: '10', chapter: 'c3',
  en: 'Impromptu Speaking Skills (Continued)', zh: '即席說話技巧（續）', kicker: 'Chapter 3 · P.10',
  blocks: [
    { type: 'h2', en: 'Additional Three Coping Strategies', zh: '三個額外應變技巧' },

    { type: 'h3', text: 'Strategy 1: When you fail to catch the meaning / didn\u0027t hear clearly' },
    { type: 'note', html: '（沒聽清楚問題時適用）' },
    { type: 'ul', items: [
      '<strong>I beg your pardon?</strong>（最經典、有禮貌的說法）',
      'Sorry, I didn\u0027t quite catch that. 抱歉，我沒聽清楚',
      'Could you repeat the question, please? / Could you please say it again?'
    ]},

    { type: 'h3', text: 'Strategy 2: When you don\u0027t know how to answer' },
    { type: 'note', html: '（聽得懂問題，但一時想不到答案／沒有頭緒時適用）' },
    { type: 'ul', items: [
      'Say thank you and repeat the question.',
      'Buy some time（爭取思考時間）：That is a rather challenging question（具挑戰性的問題）.',
      'Let me think about it for a brief moment（短暫的時間）.',
      'The Honest Answer（誠實回答）：I\u0027m afraid I don\u0027t have a definitive answer（決定性的／最終答案）for you just yet. However, I\u0027m sure I will have a clearer perspective（更清晰的觀點）on this as I grow older.',
      'Closing: Thank you for challenging me with that question.'
    ]},

    { type: 'h3', text: 'Strategy 3: When you don\u0027t understand the meaning of a specific word' },
    { type: 'note', html: '（當你不知道某個特定單字的意思時適用）' },
    { type: 'ul', items: [
      'I\u0027m sorry, but could you please explain the meaning of \u0027…\u0027?',
      'My apologies, but I\u0027m not entirely sure what \u0027…\u0027 means. Could you please clarify（解釋）it for me?',
      'Example: \u0022My apologies, but I\u0027m not entirely sure what \u0027corporal punishment\u0027 means. Could you please clarify it for me?\u0022'
    ]},
    { type: 'callout', tone: 'tip', title: '使用時機', html: '三個策略都是「爭取時間」而非「承認失敗」。說的時候抬起頭、看著考官、語速放慢半分——停頓本身就是能力。' }
  ]
},

];


/* ---------------------------------------------------------------- P.11 */
window.PAGES.push({
  id: 'P11', num: '11', chapter: 'c4',
  en: 'Group Discussion', zh: '小組討論', kicker: 'Chapter 4 · P.11',
  blocks: [
    { type: 'h2', en: 'Group Discussion Skills', zh: '小組討論技巧' },
    { type: 'h3', text: "The '4 Don\u0027ts' 四不原則" },
    { type: 'ol', items: [
      'Do not deviate from the topic（不偏離主題）',
      'Do not engage in pointless arguments（不作無謂爭拗）',
      'Do not remain silent（不沉默）',
      'Do not dominate the conversation（不要壟斷發言）'
    ]},
    { type: 'h3', text: "The '4 Dos' 四要原則" },
    { type: 'ol', items: [
      'Be firm yet polite（堅定有禮）',
      'Be considerate of others（照顧別人）',
      'Listen actively（專心聆聽）',
      'Contribute proactively（主動發言）'
    ]},

    { type: 'h2', en: 'What is Group Discussion?', zh: '什麼是小組討論？' },
    { type: 'ul', items: [
      'A small group of candidates or students conversing, interacting, and occasionally debating a prescribed topic. 一群同學／考生就一預設題目進行討論、互動與辯論。',
      'In certain cases, a mutual agreement or consensus must be reached. 有時討論必須以達成共識為結果。',
      'Each participant is expected to formulate and present their own stance, supported by sound reasoning. 每位參與者須建立並表達自己的立場，並輔以合理的理由。',
      'Every candidate is required to engage fully through critical thinking, note-taking, active speaking, and listening. 每位考生須全方位投入，運用批判性思考、筆錄、主動發言以及聆聽。'
    ]},

    { type: 'h2', en: 'Example of Discussion Topics', zh: '討論題目示例' },
    { type: 'ol', items: [
      'Should students be required to wear school uniforms?',
      'Should Artificial Intelligence (AI) be integrated into school teaching?',
      'If schools allowed students to drop one subject, which one would it be?'
    ]},

    { type: 'h2', en: 'Five Steps of Group Discussion', zh: '小組討論五步曲' },
    { type: 'steps', items: [
      { tag: '1', html: 'Announcing the topic — 題目公布' },
      { tag: '2', html: 'Preparation time — 準備' },
      { tag: '3', html: 'The discussion — 討論（stating opinions, persuading others, and clarifying points 表達意見、說服他人、釐清觀點）' },
      { tag: '4', html: 'Stating your final position — 決定最終立場' }
    ]},
    { type: 'callout', tone: 'info', html: '第 5 步「Concluding the discussion 結論」見下一頁。' }
  ]
});

/* ---------------------------------------------------------------- P.12 */
window.PAGES.push({
  id: 'P12', num: '12', chapter: 'c4',
  en: 'Group Discussion (Continued)', zh: '小組討論（續）', kicker: 'Chapter 4 · P.12',
  blocks: [
    { type: 'steps', items: [ { tag: '5', html: 'Concluding the discussion — 結論' } ] },

    { type: 'h2', en: 'The Essentials of Group Discussion', zh: '小組討論的要點' },
    { type: 'ol', items: [
      'Always contribute fresh and relevant points. 提出新穎且相關的觀點',
      'Speak in a confident and considerate manner. 以自信且體貼的態度發言',
      'Aim to make a positive first impression. 力求留下良好的第一印象',
      'Always back up your arguments with sound reasoning. 以合理的論據支持你的論點'
    ]},

    { type: 'h2', en: 'Typical Flows of a Group Discussion', zh: '小組討論的常見走向' },
    { type: 'ul', items: [
      '<strong class="bad">✘ Lack of Interaction &amp; Direction（無互動、無方向）</strong>　Each candidate merely states their initial opinion and reasoning, leading to an awkward and prolonged silence. 各自陳述自己最初的意見與理由，導致討論陷入尷尬且長時間的沉默。',
      '<strong class="bad">✘ Fruitless &amp; Aimless Arguments（持續無意義的爭拗）</strong>　A few candidates dominate the session by debating points irrelevant to the actual topic. 少數成員主導了討論過程，但討論的內容卻偏離主題。',
      '<strong class="good">✓ Meaningful Discussion &amp; Progression（有意義的討論與推進）</strong>　Candidates engage with each other to reach a valid conclusion, summary, or mutual agreement. 成員之間彼此互動、回應、提問或反駁，並在此基礎上逐步歸納觀點。'
    ]},

    { type: 'h2', en: 'The 9 Principles of Group Discussion', zh: '小組討論九大原則' },
    { type: 'h3', text: 'Natural Openings 自然的開場白' },
    { type: 'ul', items: [
      '\u0022Good morning / afternoon everyone. Today, we are here to discuss whether…\u0022',
      '\u0022Shall we begin? The topic before us today is…\u0022'
    ]},
    { type: 'callout', tone: 'warn', title: 'Topic', html: '\u0022Should Artificial Intelligence (AI) be integrated into school teaching?\u0022 人工智能應該融入學校教學嗎？<br><span class="muted">以下九個原則，全部以這一題作示範。</span>' },

    { type: 'h3', text: '1. Take the Initiative: Be the First to Speak（主動開局：搶先發言）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '老師一說 "You may start now"，你第一個舉手或開口。這能展現你的領導力和自信！' },
    { type: 'steps', items: [
      { tag: 'Step 1', html: 'Frame the Topic（帶入話題）\u0022Good morning everyone. Today, we are here to discuss the statement: \u0027Should Artificial Intelligence (AI) be integrated into school teaching?\u0027\u0022' },
      { tag: 'Step 2', html: 'State Your Initial Stance（表明初步立場）<br><span class="agree">◇（Agree 同意）</span> \u0022Personally, I agree with this because AI can help us learn better.\u0022<br><span class="disagree">◇（Disagree 不同意）</span> \u0022In my opinion, I do not think it is a good idea because we still need our teachers.\u0022' }
    ]}
  ]
});

/* ---------------------------------------------------------------- P.13 */
window.PAGES.push({
  id: 'P13', num: '13', chapter: 'c4',
  en: 'Group Discussion (Continued)', zh: '小組討論（續）', kicker: 'Chapter 4 · P.13',
  blocks: [
    { type: 'steps', items: [
      { tag: 'Step 3', html: 'Provide Justification（簡單理由）\u0022This is because AI can help students learn at their own speed. This makes learning much faster and easier.\u0022' },
      { tag: 'Step 4', html: 'Invite Others to Join（邀請他人發言）\u0022This is my ideas. What do you think, everyone?\u0022' }
    ]},

    { type: 'h3', text: '2. Take the Lead in Concluding the Discussion（主導總結）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '看到計時器只剩大約 1 分鐘，小組還沒停，你主動站出來做結尾，考官會覺得你很有大局觀！' },
    { type: 'ul', items: [
      '<strong>Scenario A: Agree, Reach a Consensus（同意、達成共識）</strong>　\u0022Thank you everyone. To sum up, most of us agree that AI is very useful, but teachers are still the most important. So, we think schools should use AI to help teachers, not replace them.\u0022',
      '<strong>Scenario B: Disagree / No Consensus（不同意、未達共識）</strong>　\u0022Time is running short. It seems we have two different ideas today. Half of us think AI is good for learning, but the other half worry that students will stop thinking. So, we have different views today.\u0022'
    ]},

    { type: 'h3', text: '3. Invite Quiet Parties to Contribute（引導沉默的隊友）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '看到有組員（特別是坐在旁邊的）一直沒機會說話、或者很害羞，你主動點他／她的名字。這是展現 Teamwork（團隊精神）的超級加分關鍵！' },
    { type: 'ul', items: [
      '\u0022We haven\u0027t heard from [[s:Name]] yet. [[s:Name]], do you think AI is good or bad for students?\u0022',
      '\u0022[[s:Name]], what is your choice? Do you agree that AI can replace teachers?\u0022'
    ]},

    { type: 'h3', text: '4. Expressing Agreement Constructively（有效表達認同）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '當你想同意某人時，不要只說 "I agree"。要先說同意，再幫他多加一個簡單的理由。' },
    { type: 'ul', items: [
      '\u0022I totally agree with [[s:Name]]. AI is open 24 hours, so we can ask questions anytime. Also, it can help teachers do less paperwork, so teachers can spend more time with us.\u0022',
      '\u0022I think [[s:Name]] is right. AI makes lessons more fun. For example, we can use AI to do cool science projects.\u0022 有趣科學實驗'
    ]},

    { type: 'h3', text: '5. Expressing Disagreement Tactfully and Politely（有禮貌地表達反對）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '意見不同時，千萬不要說 "You are wrong"（大忌）。要先讚賞對方，再溫和地說出自己的想法。' },
    { type: 'p', html: '<span class="muted">→ 兩種句式見下一頁（P.14）。</span>' }
  ]
});

/* ---------------------------------------------------------------- P.14 */
window.PAGES.push({
  id: 'P14', num: '14', chapter: 'c4',
  en: 'Group Discussion (Continued)', zh: '小組討論（續）', kicker: 'Chapter 4 · P.14',
  blocks: [
    { type: 'steps', items: [
      { tag: 'Pattern 1', html: '<strong>The \u0027Acknowledge &amp; Pivot\u0027 Method（肯定並轉折）</strong>\u0022That is a very good point, [[s:Name]]. However, I think a bit differently. I don\u0027t think AI marking is perfect, because AI does not understand children\u0027s creative ideas. So, we still need human teachers.\u0022' },
      { tag: 'Pattern 2', html: '<strong>The \u0027Alternative Angle\u0027 Method（提供另一角度）</strong>\u0022You are right that AI can give answers very quickly. But if we look at it another way, students might become lazy and stop thinking by themselves.\u0022' }
    ]},

    { type: 'h3', text: '6. Managing Group Dynamics: Dealing with Deviations or Arguments（應對爭執與離題）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '當組員開始聊到無關的話題（例如講到哪款打機遊戲有 AI），或者有兩個人在吵起來時，你出來當「和事佬」拉回正軌。這是 Leadership（領導力）的最高體現。' },
    { type: 'ul', items: [
      '<strong>When the discussion goes off-topic（當小組離題時）</strong>：\u0022Excuse me everyone, let\u0027s look at the clock 不好意思打斷一下，我有注意到時間. Today our topic is about AI in school, so let\u0027s talk more about classroom learning instead of other things.\u0022',
      '<strong>When two candidates are debating heatedly（當兩位同學爭執不下時）</strong>：\u0022I think you both have great points. But we only have two minutes left, why don\u0027t we let others speak first?\u0022'
    ]},

    { type: 'h3', text: '7. What to Say When You Are Stuck（沒靈感、不知道說什麼時的應對）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '輪到你發言，但你腦袋一片空白。千萬不要安靜！用這幾句來「借別人的話」或者「換個簡單的角度」來過關。' },
    { type: 'ul', items: [
      '<strong>Option 1: Build on someone else\u0027s idea（同意別人、借力使力）</strong>\u0022I am not sure about the technology of AI yet. However, I agree with what [[s:Name]] said just now about cheating 抄襲作弊. It is a big problem that schools need to worry about.\u0022',
      '<strong>Option 2: Reframe the question / Change the angle（切換生活化的角度）</strong>\u0022AI is a bit difficult to talk about. But maybe we can think about the cost. Buying AI software is expensive, and not every student can afford it.\u0022'
    ]},

    { type: 'h3', text: '8. Clarifying Someone Else\u0027s Point（確認與澄清）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '隊友英文太差、講得不清楚，或者你真的沒聽懂。主動發問代表你有 Active Listening（專心聆聽），也是加分點。' },
    { type: 'ul', items: [
      '<strong>If you didn\u0027t hear properly（沒聽清楚時）</strong>：\u0022Excuse me 不好意思, [[s:Name]], I didn\u0027t hear your last sentence clearly. Could you say that again, please?\u0022',
      '<strong>If you don\u0027t understand their logic（不明白其邏輯時）</strong>：\u0022I know you don\u0027t like AI, [[s:Name]]. But I don\u0027t really understand why you think AI makes students less creative. Can you explain a bit more?\u0022'
    ]}
  ]
});

/* ---------------------------------------------------------------- P.15 */
window.PAGES.push({
  id: 'P15', num: '15', chapter: 'c4',
  en: 'Group Discussion (Continued)', zh: '小組討論（續）', kicker: 'Chapter 4 · P.15',
  blocks: [
    { type: 'h3', text: '9. Persuading the Group to Reach a Consensus（說服團隊達成共識）' },
    { type: 'callout', tone: 'tip', title: '什麼時候用？', html: '討論快結束了，但大家還在爭持不下，你提出一個「中間方案」來圓結大家。' },
    { type: 'ul', items: [
      '<strong>Suggesting a middle ground（提出折衷方案）</strong>：\u0022Since we have two strong ideas—[[s:Name A]] says AI is fast, and [[s:Name B]] says we need human teachers—why don\u0027t we meet in the middle? Let\u0027s agree that we use AI to help teachers, but not replace them. Is that okay with everyone?\u0022',
      '<strong>Using the majority rule（引導少數服從多數）</strong>：\u0022It looks like most of us think AI is good for schools. For our final conclusion, can the rest of the group accept this idea?\u0022'
    ]},

    { type: 'h2', en: 'Part 1: The 9 Principles — Ultra-Simple 3 Principles', zh: '九大原則 — 極簡 3 原則' },
    { type: 'p', html: '<span class="muted">（適合較難掌握九大原則技巧的同學）</span><br>Example: \u0022Should AI be integrated into school teaching?\u0022' },
    { type: 'p', html: 'By simply following <strong>Principles 1, 4 and 3</strong> in the exact order at the start of a group discussion, you will have successfully taken the first step. After that, just focus on listening and use the universal, all-purpose interactions provided below.' },
    { type: 'p', html: '只要在小組討論開場時依次序做到這三點，就已經成功跨出第一步。接下來只要專注聆聽並使用下方的萬用句型互動即可。' },

    { type: 'steps', items: [
      { tag: 'Principle 1', html: '<strong>Take the Initiative（主動發言／開場）</strong>：\u0022Good morning everyone. Today our topic is: Should AI be integrated into school teaching? Personally, I agree with this.\u0022（表明立場）' },
      { tag: 'Principle 4', html: '<strong>Express Agreement &amp; Reason（表達認同並給出簡單原因）</strong>：\u0022First, AI is very fast. Second, AI can help students study after school. So, I think AI is good for us.\u0022（簡單理由）' },
      { tag: 'Principle 3', html: '<strong>Invite Others（邀請他人／安全交棒）</strong>：\u0022This is my opinion. What do you think, Mary?\u0022（安全交棒給下一位）' }
    ]},

    { type: 'h2', en: 'Part 2: Four Scenarios — Useful Simple Phrases', zh: '四大情境 — 萬用簡單句型' },
    { type: 'h3', text: 'Scenario 1: When you AGREE（情境一：當你「同意」別人時）' },
    { type: 'pills', label: 'Simple Statements 簡單表達', items: [
      'I agree with [[s:Name]]. I also think AI is very useful.（我同意某人，我也覺得 AI 很有用。）',
      'That is a very good point, [[s:Name]].（某人，這是一個很好的亮點。）'
    ]},
    { type: 'p', html: '<strong>Simple Question to Ask（簡單發問）：</strong>[[s:Name]] says AI saves time. Do you all agree?' }
  ]
});

/* ---------------------------------------------------------------- P.16 */
window.PAGES.push({
  id: 'P16', num: '16', chapter: 'c4',
  en: 'Group Discussion (Continued)', zh: '小組討論（續）', kicker: 'Chapter 4 · P.16',
  blocks: [
    { type: 'h3', text: 'Scenario 2: When you DISAGREE（情境二：當你「不同意」別人時）' },
    { type: 'ul', items: [
      '\u0022I understand your point, [[s:Name]], but I think AI might make students lazy.\u0022（我懂你的意思，但我認為 AI 可能會讓學生變懶。）',
      '\u0022That is interesting, however, I have a different idea.\u0022（那很有趣，然而我有不同的想法。）'
    ]},
    { type: 'p', html: '<strong>Simple Question to Ask（簡單發問）：</strong>\u0022You said AI is perfect, but don\u0027t you think it has some risks?\u0022（你說 AI 很完美，但你不覺得它有一些風險嗎？）' },

    { type: 'h3', text: 'Scenario 3: When you are NEUTRAL（情境三：當你持「中立／持平」態度時）' },
    { type: 'ul', items: [
      '\u0022I think both ideas are good. AI has both pros and cons（好處與壞處）.\u0022（我覺得兩個想法都很好，AI 有利也有弊。）',
      '\u0022We can use AI, but teachers are still important.\u0022（我們可以使用 AI，但老師依然很重要。）'
    ]},
    { type: 'p', html: '<strong>Simple Question to Ask（簡單發問／引導共識）：</strong>\u0022Can we agree that AI should only be a helper, not a replacement?\u0022（我們能同意 AI 應該只是助手，而不是取代老師嗎？）' },

    { type: 'h3', text: 'Scenario 4: When you have No Idea / are Stuck（情境四：當你完全沒想法／沒意見）' },
    { type: 'ul', items: [
      '\u0022I don\u0027t have many ideas right now, but I really like John\u0027s opinion.\u0022（我現在沒有太多想法，但我很喜歡約翰的意見。）',
      '\u0022This topic is quite difficult for me, so I want to listen to others first.\u0022（這個題目對我來說有點難，所以我想先聽聽大家的想法。）'
    ]},
    { type: 'p', html: '<strong>Simple Question to Ask（簡單發問／向他人求助、交棒）：</strong>\u0022[[s:Name]], you are very good at this topic. Can you share your ideas first?\u0022（姓名，你很擅長這個話題。你可以先分享你的想法嗎？）<br>\u0022We haven\u0027t heard from [[s:Peter]] yet. Peter, what is your view?\u0022（我們還沒聽到彼得的發言。彼得，你的看法是什麼？）' },

    { type: 'callout', tone: 'info', title: '小結', html: '九個原則不必全用。開場（原則 1）→ 回應（原則 4／5）→ 交棒（原則 3）→ 收尾（原則 2 或 9），四步已足夠應付絕大多數小組討論。' }
  ]
});


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


/* ---------------------------------------------------------------- P.23 */
window.PAGES.push({
  id: 'P23', num: '23', chapter: 'c7',
  en: 'Interview Etiquette', zh: '面試禮儀', kicker: 'Chapter 7 · P.23',
  blocks: [
    { type: 'h2', en: 'Interview Etiquette and Tips', zh: '面試禮儀及小貼士' },
    { type: 'callout', tone: 'info', html: '面試官不只聆聽你的答案內容，更觀察你的肢體語言、態度和禮儀。良好的第一印象，往往來自細節！' },
    { type: 'bilingualList', items: [
      { zh: '儀容整潔，穿着大方得體。', en: 'Dress neatly and appropriately. Wear a watch and bring tissues.' },
      { zh: '提前 15 分鐘到場，熟習環境。', en: 'Arrive 15 minutes early to familiarise yourself with the surroundings.' },
      { zh: '保持心境開朗，面帶微笑，神態自然。', en: 'Stay positive, smile warmly, and remain composed.' },
      { zh: '先問好，才坐下，輕拉椅子，舉止溫文。', en: 'Greet the interviewers before taking your seat; pull the chair out gently and be courteous.' },
      { zh: '站立和坐下時，腰背挺直。', en: 'Sit and stand with your back straight.' },
      { zh: '表現自信，不時與對方保持眼神接觸，主動打招呼。', en: 'Be confident, maintain regular eye contact, and greet others proactively.' },
      { zh: '回答態度親切、有禮、誠懇，切忌造作。', en: 'Respond in a friendly, polite, and sincere manner; avoid affectation.' },
      { zh: '回答內容長度適中，從容不迫。', en: 'Keep your answers measured and unhurried.' },
      { zh: '談及小學生活時，多分享正面經驗。', en: 'When talking about your primary school life, focus on positive experiences.' },
      { zh: '無論交收任何文件，均應雙手接過並道謝。', en: 'Always use both hands when giving or receiving documents, and remember to say thank you.' },
      { zh: '戒除口頭禪，避免懶音和贅音。', en: 'Avoid filler words, lazy pronunciation, and unnecessary sounds.' },
      { zh: '切忌問一句才答一句，應主動表達。', en: 'Do not merely give one-word responses; take the initiative to express yourself fully.' }
    ]}
  ]
});

/* ---------------------------------------------------------------- P.24 */
window.PAGES.push({
  id: 'P24', num: '24', chapter: 'c8',
  en: 'Common Interview Questions', zh: '一般面試問題', kicker: 'Appendix · P.24',
  blocks: [
    { type: 'callout', tone: 'info', html: '附錄 / 僅供學生參考 <em>Appendix / For Student Reference Only</em>' },
    { type: 'h2', en: 'A. Habits and Hobbies', zh: '生活習慣與興趣' },
    { type: 'qa', start: 1, items: [
      { en: 'What do you usually do in your spare time?', zh: '你空閒時間通常做什麼？' },
      { en: 'Which festival do you like most, and why?', zh: '你最喜歡哪個節日？為什麼？' },
      { en: 'What do you enjoy doing when you are not studying?', zh: '你不溫書時喜歡做什麼？' },
      { en: 'How often do you visit the library?', zh: '你多常去圖書館？' },
      { en: 'What is your favourite book?', zh: '你最喜歡哪本書？' },
      { en: 'How often do you watch television?', zh: '你多常看電視？' },
      { en: 'What is your favourite TV programme or show, and why?', zh: '你最喜歡哪個電視節目？為什麼？' },
      { en: 'Do you enjoy going online, and how often do you play computer or video games?', zh: '你喜歡上網嗎？你多常玩電腦或電子遊戲？' },
      { en: 'Which websites do you regularly visit, and why?', zh: '你經常瀏覽哪些網站？為什麼？' },
      { en: 'Do you collect stamps, or any other items?', zh: '你有集郵或收集其他物品的習慣嗎？' }
    ]},

    { type: 'h2', en: 'B. Your primary school life', zh: '你的小學生活' },
    { type: 'qa', start: 11, items: [
      { en: 'What is the name of your primary school?', zh: '你的小學叫什麼名字？' },
      { en: 'Do you enjoy going to your school, and why? / Why not?', zh: '你喜歡你的學校嗎？為什麼？' },
      { en: 'What is your favourite subject, and what makes it so appealing to you?', zh: '你最喜歡哪個科目？是什麼讓它如此吸引你？' },
      { en: 'Apart from your favourite, what other subjects do you enjoy, and why?', zh: '除了最喜歡的科目外，你還喜歡哪些科目？為什麼？' },
      { en: 'When and where do you usually complete your homework?', zh: '你通常在什麼時間、什麼地方做功課？' },
      { en: 'Do you play any musical instruments? What do you enjoy most — or find most challenging — about playing them?', zh: '你有彈奏任何樂器嗎？你覺得彈奏它們最享受或最具挑戰的地方是什麼？' },
      { en: 'Do you participate in any sports at school, and what do you like or dislike about them?', zh: '你在學校有參與任何體育運動嗎？你喜歡或不喜歡它們的哪一點？' }
    ]}
  ]
});

/* ---------------------------------------------------------------- P.25 */
window.PAGES.push({
  id: 'P25', num: '25', chapter: 'c8',
  en: 'Common Interview Questions (Continued)', zh: '一般面試問題（續）', kicker: 'Appendix · P.25',
  blocks: [
    { type: 'h2', en: 'B. Your primary school life (Continued)', zh: '你的小學生活（續）' },
    { type: 'qa', start: 18, items: [
      { en: 'Have you won any awards or prizes? Please tell me about them.', zh: '你曾獲得過任何獎項嗎？請向我介紹一下。' },
      { en: 'Who is your favourite teacher, and why do you look up to them?', zh: '誰是你最喜歡的老師？為什麼你如此敬仰他／她？' }
    ]},

    { type: 'h2', en: 'C. Your future secondary school life', zh: '你的中學生活' },
    { type: 'qa', start: 20, items: [
      { en: 'How do you plan to commute to our school every day, and how long will the journey take?', zh: '你計劃每天用什麼交通工具到我們學校？車程大概需要多久？' },
      { en: 'If you were to miss your usual bus or train, what alternative arrangements would you make to ensure you arrive on time?', zh: '如果你錯過了平時搭乘的巴士或列車，你會作什麼應變安排以確保準時到校？' },
      { en: 'How do you intend to manage your travel time productively, or do you see it as a chance to wind down?', zh: '你打算如何有效利用你的往返時間？還是你把它當作放鬆的機會？' },
      { en: 'Are you used to travelling independently, or do you usually rely on your parents to take you to school?', zh: '你習慣自己獨立出行嗎？還是平時通常依賴父母接送上下學？' },
      { en: 'How do you plan to adjust your daily routine to balance a potentially longer commute with your extracurricular activities?', zh: '如果往返時間變長，你打算如何調整日常作息，以平衡交通與課外活動的時間？' }
    ]},

    { type: 'h2', en: 'Notes: Interview techniques', zh: '筆記：面試技巧' },
    { type: 'ul', items: [
      '<strong>Effective Communication</strong>: Mastering both verbal and non-verbal communication.（掌握言語與非言語溝通。）',
      '<strong>Articulating Strong Answers</strong>: Delivering structured, well-thought-out responses.（給出有結構、深度的回答。）',
      '<strong>Making a Lasting Impression</strong>: Impressing the interviewer through excellent eye contact, upright posture, and positive body language.（透過良好的眼神接觸、端正的坐姿與積極的肢體語言，給面試官留下深刻印象。）'
    ]}
  ]
});

/* ---------------------------------------------------------------- P.26 */
window.PAGES.push({
  id: 'P26', num: '26', chapter: 'c8',
  en: '中文面試問題', zh: '一般面試題目', kicker: 'Appendix · P.26',
  blocks: [
    { type: 'h2', en: '一般面試題目', zh: '' },
    { type: 'ol', start: 1, items: [
      '請介紹一下你自己。',
      '你為什麼希望入讀本校？',
      '如果成為本校的學生，你期望自己在學校達成哪些成就？',
      '請介紹你的家庭。',
      '你長大後想從事什麼職業？',
      '你對我們學校有多少認識？',
      '請介紹你就讀的小學。',
      '如果可以向我們問一個問題，你會問什麼？',
      '請介紹一本你看過的書（內容／讀後感）。',
      '你為什麼認為自己適合入讀本校？'
    ]},

    { type: 'h2', en: '個人資料、興趣及感受', zh: '' },
    { type: 'ol', start: 11, items: [
      '你每天通常幾點起床？',
      '你喜歡吃什麼食物？為什麼？',
      '你有什麼興趣或嗜好？',
      '你有參加課外活動嗎？／你最喜歡的課外活動是什麼？',
      '你認為自己是一個活潑的人，還是一個害羞的人？',
      '你喜歡哪些科目？',
      '哪一個科目的成績最好？',
      '你的志願是什麼？',
      '你長大後想做什麼職業？'
    ]}
  ]
});

/* ---------------------------------------------------------------- P.27 */
window.PAGES.push({
  id: 'P27', num: '27', chapter: 'c8',
  en: '中文面試問題（續）', zh: '日常生活與學校生活', kicker: 'Appendix · P.27',
  blocks: [
    { type: 'h2', en: '日常生活', zh: '' },
    { type: 'ol', start: 20, items: [
      '每天放學後會做什麼？',
      '在週末或假日，你會和家人一起進行哪些活動？',
      '你會如何分配學習和玩電腦遊戲的時間？',
      '你喜歡上網嗎？為什麼？',
      '你喜歡看哪些電視節目？為什麼？',
      '你有閱讀的習慣嗎？為什麼？',
      '你喜歡看什麼類型的書？為什麼？',
      '你有閱讀英文書的習慣嗎？'
    ]},

    { type: 'h2', en: '學校生活及感想', zh: '' },
    { type: 'ol', start: 28, items: [
      '你就讀哪一所小學？',
      '你喜歡現在就讀的小學嗎？為什麼？',
      '你對目前就讀的小學有什麼感受？為什麼？',
      '請介紹你的校園生活。',
      '你在小學參加過哪些活動？',
      '請介紹一個你做過的專題研習。',
      '你對升讀中學有什麼期望？'
    ]},

    { type: 'callout', tone: 'warn', title: '附錄缺頁', html: '原書目錄列有「Application Form 入學申請表格」，掃描檔未收錄該頁；如需使用，請提供原表格或另行補拍。' }
  ]
});

/* ------------------------------------------------- 互動練習：掛載到指定頁 */

/* 即席練習（抽題＋倒計時）掛在 P.10 章末 */
window.PAGES.find(function (p) { return p.id === 'P10'; }).blocks.push(
  { type: 'h2', en: 'Practice: Random Topic + 30-Second Timer', zh: '即席練習：抽題與倒計時' },
  { type: 'callout', tone: 'info', html: '按「抽題」取得一道題目，按「開始」計時。時限內依「模式一：First–Second–Third」講完五步。' },
  { type: 'draw', title: '即席抽題', bank: 'impromptu' },
  { type: 'timer', seconds: 30 }
);

/* 聽音辨字掛在 P.21 末（正粵音之後） */
window.PAGES.find(function (p) { return p.id === 'P21'; }).blocks.push(
  { type: 'h2', en: 'Listen & Choose', zh: '聽音辨字' },
  { type: 'callout', tone: 'tip', html: '比對兩個字，選出正確答案。答對變綠並響「叮」，答錯變紅並抖動，可重試。' },
  { type: 'quiz', items: [
    { text: '吳', options: ['唔', '吳'], answer: 1, hint: 'NG 音（從口腔出）／N 音（齒舌結合）的對比：吳、吾、五、午、梧、蜈 屬 N 音。' },
    { text: '你', options: ['你', '李'], answer: 0, hint: 'L 音：藍、李、黎、賴、呂；N 音：你、男、泥、奶、難、女。' },
    { text: '光', options: ['江', '光'], answer: 1, hint: 'GW 音（光、胱、廣、國、郭、幗）與 G 音（江、缸、綱、剛、崗）之別。' },
    { text: '北', options: ['北', '不'], answer: 0, hint: '入聲 -k（伯、革、嚇、拍、北 bak1）與 -t（壓 aat3、不 bat1）之別。' }
  ]}
);

/* ------------------------------------------------- 題庫與測驗資料 */
window.DRAW_BANK = {
  impromptu: [
    'What is your idea of a good classmate?',
    'What is your opinion on junk food?',
    "Talk about 'bananas' for one minute.",
    'If your father were made redundant, how would you help him?',
    'Should students be required to wear school uniforms?',
    'Should Artificial Intelligence (AI) be integrated into school teaching?',
    'If schools allowed students to drop one subject, which one would it be?',
    'Do you think Hong Kong should control its air pollution?',
    'Do you think Hong Kong children should do more exercise?',
    'Why do you want to attend our school?',
    'Please introduce a book that you have read.',
    'What do you want to be in the future?',
    'Which festival do you like most, and why?',
    'How do you plan to commute to our school every day?'
  ]
};


/* 詞庫示範：點擊任何詞庫膠囊，彈出三句可代入的示範。
   鍵名規則：詞條英文部分 → 小寫、非字母數字轉連字號，前綴 word:（見 js/app.js wordKey）。
   label 為彈窗分頁；html 內 <mark> 高亮目標詞；say 省略時由 app.js 去標籤後朗讀。 */
(function () {
  var bank = window.DEMO_BANK = window.DEMO_BANK || {};

  function add(key, title, labels, list) {
    bank[key] = {
      title: title,
      demos: list.map(function (html, i) {
        return { label: labels[i] || ('說法 ' + (i + 1)), html: html };
      })
    };
  }

  var TRAIT = ['自我介紹', '加上例子', '面試追問'];
  var CLUB = ['我參加了', '學到什麼', '成果'];
  var AWARD = ['我獲得', '怎麼得到', '意義'];
  var SERVICE = ['我做過', '感受', '學到'];
  var STUDY = ['直接說', '加上例子', '加成果'];

  /* ---------------------------------------------------- P.02 優點 */
  add('word:diligent', '示範：Diligent 勤奮 怎麼說', TRAIT, [
    'I am a <mark>diligent</mark> student. I always finish my homework before dinner.',
    'My teachers say I am <mark>diligent</mark> because I never give up on a difficult exercise.',
    'Being <mark>diligent</mark> helped me improve from fifteenth to third place last year.'
  ]);

  add('word:positive', '示範：Positive 積極 怎麼說', TRAIT, [
    'I am a <mark>positive</mark> person. I try to smile even when a task is hard.',
    'My classmates say I am <mark>positive</mark> because I encourage them before every test.',
    'A <mark>positive</mark> attitude helps me learn from mistakes instead of giving up.'
  ]);

  add('word:creative', '示範：Creative 有創意 怎麼說', TRAIT, [
    'I am a <mark>creative</mark> student. I enjoy drawing posters and thinking of new ideas.',
    'I won the class poster competition because I designed a <mark>creative</mark> slogan for our project.',
    'In group work, I am the one who suggests <mark>creative</mark> ways to present our ideas.'
  ]);

  add('word:responsible', '示範：Responsible 負責任 怎麼說', TRAIT, [
    'I am a <mark>responsible</mark> student. I always hand in my work on time.',
    'As the class monitor, I am <mark>responsible</mark> for collecting homework and helping new classmates.',
    'Being <mark>responsible</mark> means I keep my promises, even when nobody is watching.'
  ]);

  add('word:strong', '示範：Strong 堅強 怎麼說', TRAIT, [
    'I am <mark>strong</mark> both physically and mentally. I play basketball every week.',
    'I stay <mark>strong</mark> when I lose a match; I train harder the next day.',
    'My <mark>strong</mark> will helped me finish a long hiking trip with my family.'
  ]);

  add('word:a-team-player', '示範：A Team Player 怎麼說', TRAIT, [
    'I am a <mark>team player</mark>. I listen to my group and share the work fairly.',
    'In our group project, I was a <mark>team player</mark> who helped a shy classmate speak in front of the class.',
    'Being a <mark>team player</mark> taught me that a group can achieve more than one person alone.'
  ]);

  add('word:curious', '示範：Curious 有好奇心 怎麼說', TRAIT, [
    'I am a <mark>curious</mark> learner. I always ask why things happen.',
    'I am <mark>curious</mark> about science, so I read books about space and inventions.',
    'My <mark>curiosity</mark> led me to join the STEM Club and build my first robot.'
  ]);

  /* ---------------------------------------------------- P.02 缺點 */
  add('word:impulsive', '示範：Impulsive 衝動 怎麼說', ['直接說', '如何改善', '面試追問'], [
    'Sometimes I am <mark>impulsive</mark>; I answer too quickly before thinking.',
    'I am a little <mark>impulsive</mark>, so I now pause and take a breath before I speak.',
    'To control my <mark>impulsive</mark> habit, I write down my ideas before answering in group discussions.'
  ]);

  add('word:self-critical', '示範：Self-critical 怎麼說', ['直接說', '如何改善', '面試追問'], [
    'I can be <mark>self-critical</mark>; I notice every small mistake in my work.',
    'I am <mark>self-critical</mark>, but I am learning to praise myself when I finish a difficult task.',
    'My teacher told me that being <mark>self-critical</mark> is good, as long as I do not give up.'
  ]);

  add('word:impatient', '示範：Impatient 沒耐性 怎麼說', ['直接說', '如何改善', '面試追問'], [
    'I am sometimes <mark>impatient</mark> when I have to wait for others.',
    'I am working on being less <mark>impatient</mark> by helping slower classmates instead of rushing them.',
    'I used to be <mark>impatient</mark> with long books; now I read ten pages every night.'
  ]);

  add('word:reserved', '示範：Reserved 內斂 怎麼說', ['直接說', '如何改善', '面試追問'], [
    'I am a little <mark>reserved</mark>, so I listen more than I speak at first.',
    'I am <mark>reserved</mark> in new groups, but I ask one question to every new classmate.',
    'Being <mark>reserved</mark> helps me observe carefully; I now try to share my ideas out loud too.'
  ]);

  /* -------------------------------------------- P.02 課外活動 */
  add('word:school-choir-orchestra', '示範：School Choir 怎麼說', CLUB, [
    'I joined the school <mark>choir</mark> in Primary Four and sing every Wednesday.',
    'Singing in the <mark>choir</mark> taught me to listen carefully and keep in time with others.',
    'Last year our <mark>choir</mark> performed at the Speech Festival and we received a Merit award.'
  ]);

  add('word:stem-club', '示範：STEM Club 怎麼說', CLUB, [
    'I am a member of the <mark>STEM Club</mark>. We build small robots after school.',
    'In the <mark>STEM Club</mark> I learned to test an idea, fail, and try again.',
    'Our <mark>STEM Club</mark> project, a water-saving alarm, won the school innovation prize.'
  ]);

  add('word:debate-club', '示範：Debate Club 怎麼說', CLUB, [
    'I joined the <mark>Debate Club</mark> to become better at expressing my ideas.',
    'In the <mark>Debate Club</mark> I learned to support my opinion with reasons and examples.',
    'Our <mark>Debate Club</mark> team reached the final of the inter-school competition.'
  ]);

  add('word:boy-scouts-girl-guides', '示範：Boy Scouts 怎麼說', CLUB, [
    'I am a member of the <mark>Boy Scouts</mark>; we meet every Saturday morning.',
    '<mark>Scouts</mark> training taught me to stay calm, help others and work in a team.',
    'I received a service badge after joining a <mark>Scouts</mark> hiking and clean-up camp.'
  ]);

  /* ------------------------------------------------ P.02 獎項 */
  add('word:best-progress-award', '示範：Best Progress Award 怎麼說', AWARD, [
    'I received the <mark>Best Progress Award</mark> last year.',
    'I earned the <mark>Best Progress Award</mark> by improving my Chinese results from 60 to 85 marks.',
    'The <mark>Best Progress Award</mark> showed me that steady effort matters more than one good test.'
  ]);

  add('word:conduct-award', '示範：Conduct Award 怎麼說', AWARD, [
    'I was given the <mark>Conduct Award</mark> in Primary Five.',
    'I received the <mark>Conduct Award</mark> for being polite, honest and helpful every day.',
    'The <mark>Conduct Award</mark> reminds me that good manners are as important as good marks.'
  ]);

  add('word:outstanding-service-award', '示範：Outstanding Service Award 怎麼說', AWARD, [
    'I received the <mark>Outstanding Service Award</mark> for my work as a school prefect.',
    'I earned the <mark>Outstanding Service Award</mark> after organising three flag-selling days.',
    'The <mark>Outstanding Service Award</mark> made me want to keep serving the community.'
  ]);

  add('word:speech-festival-merit', '示範：Speech Festival Merit 怎麼說', AWARD, [
    'I received a <mark>Merit</mark> at the Hong Kong Schools Speech Festival.',
    'I practised my poem every evening to win a <mark>Merit</mark> at the Speech Festival.',
    'The <mark>Merit</mark> encouraged me to join the festival again this year.'
  ]);

  /* -------------------------------------------- P.02 社會服務 */
  add('word:flag-selling', '示範：Flag Selling 賣旗 怎麼說', SERVICE, [
    'I have joined <mark>flag selling</mark> for two years.',
    'When I do <mark>flag selling</mark>, I greet every passer-by politely, even when they say no.',
    '<mark>Flag selling</mark> taught me that a small donation can still help someone a lot.'
  ]);

  add('word:visiting-elderly-homes', '示範：Visiting Elderly Homes 怎麼說', SERVICE, [
    'Our class visits an <mark>elderly home</mark> every Christmas.',
    'I enjoy <mark>visiting elderly homes</mark> because the residents love telling us stories.',
    '<mark>Visiting elderly homes</mark> taught me to listen patiently and speak more slowly.'
  ]);

  add('word:beach-cleanup', '示範：Beach Cleanup 怎麼說', SERVICE, [
    'I joined a <mark>beach cleanup</mark> with my family last summer.',
    'At the <mark>beach cleanup</mark> we collected over fifty bags of plastic bottles and rubbish.',
    'The <mark>beach cleanup</mark> showed me that everyone must protect our sea.'
  ]);

  add('word:charity-bazaar', '示範：Charity Bazaar 怎麼說', SERVICE, [
    'Our school holds a <mark>charity bazaar</mark> every year; I help at the book stall.',
    'I designed the price signs for the <mark>charity bazaar</mark> and sold old books to younger students.',
    'The <mark>charity bazaar</mark> taught me how to work with others for a good cause.'
  ]);

  /* -------------------------------------------- P.03 學業表現 */
  add('word:consistently-high-achiever', '示範：Consistently high achiever 怎麼說', STUDY, [
    'I am a <mark>consistently high achiever</mark> in Chinese, English and Mathematics.',
    'I have been a <mark>consistently high achiever</mark> because I revise a little every day.',
    'Being a <mark>consistently high achiever</mark> does not come from luck; it comes from routine.'
  ]);

  add('word:always-get-good-marks', '示範：Always get good marks 怎麼說', STUDY, [
    'I <mark>always get good marks</mark> in Mathematics and Science.',
    'I <mark>always get good marks</mark> because I check my work twice before handing it in.',
    'I <mark>always get good marks</mark> in reading, which helped me join the school reading club.'
  ]);

  add('word:strong-analytical-skills', '示範：Strong analytical skills 怎麼說', STUDY, [
    'I have <mark>strong analytical skills</mark>; I like breaking a problem into smaller steps.',
    'My <mark>strong analytical skills</mark> helped our group solve the maths challenge first.',
    'I use my <mark>strong analytical skills</mark> in Science lessons when I plan an experiment.'
  ]);

  add('word:intellectually-curious', '示範：Intellectually curious 怎麼說', STUDY, [
    'I am <mark>intellectually curious</mark> and often ask how and why.',
    'Being <mark>intellectually curious</mark> led me to read about space and climate change.',
    'My teachers describe me as <mark>intellectually curious</mark> because I ask questions beyond the textbook.'
  ]);

  add('word:love-to-learn-new-things', '示範：Love to learn new things 怎麼說', STUDY, [
    'I <mark>love to learn new things</mark>, from coding to cooking.',
    'I <mark>love to learn new things</mark>, so I joined both the STEM Club and the choir.',
    'My classmates know that I <mark>love to learn new things</mark> and often ask me to try new activities first.'
  ]);

  add('word:diligent-and-self-motivated', '示範：Diligent and self-motivated 怎麼說', STUDY, [
    'I am <mark>diligent and self-motivated</mark>; I plan my revision without being reminded.',
    'I am <mark>diligent and self-motivated</mark>, so I finished the whole reading list before the holiday.',
    'Being <mark>diligent and self-motivated</mark> helped me keep up with my studies while training for the basketball team.'
  ]);

  add('word:work-hard-and-study-by-myself', '示範：Work hard and study by myself 怎麼說', STUDY, [
    'I <mark>work hard and study by myself</mark> every evening.',
    'I <mark>work hard and study by myself</mark>, using notes and online exercises when I am stuck.',
    'My parents do not need to push me because I <mark>work hard and study by myself</mark>.'
  ]);

  add('word:excel-in-subject', '示範：Excel in [Subject] 怎麼說', STUDY, [
    'I <mark>excel in Mathematics</mark> and enjoy challenging problems.',
    'I <mark>excel in Chinese writing</mark> and won a school composition prize last year.',
    'I <mark>excel in Science</mark> because I love doing experiments and recording results.'
  ]);

  add('word:very-good-at-subject', '示範：Very good at subject 怎麼說', STUDY, [
    'I am <mark>very good at English</mark>, especially speaking and reading.',
    'I am <mark>very good at Mathematics</mark> and often help my classmates with homework.',
    'I am <mark>very good at Music</mark> and play the violin in the school orchestra.'
  ]);

  add('word:proficient-in-skill-language', '示範：Proficient in 怎麼說', STUDY, [
    'I am <mark>proficient in English and Cantonese</mark>.',
    'I am <mark>proficient in coding</mark> and built a simple quiz game for our class.',
    'I am <mark>proficient in using spreadsheets</mark>, which helped me organise our group project data.'
  ]);
})();


/* 詞庫示範（續）：P.04 運動與個人特質、P.05 職業、P.07 書類。 */
(function () {
  var bank = window.DEMO_BANK = window.DEMO_BANK || {};

  function add(key, title, labels, list) {
    bank[key] = {
      title: title,
      demos: list.map(function (html, i) {
        return { label: labels[i] || ('說法 ' + (i + 1)), html: html };
      })
    };
  }

  var SPORT = ['直接說', '加上例子', '團隊'];
  var PRIZE = ['完整句子', '加上背景', '成果'];
  var SELF = ['直接說', '加上例子', '面試'];
  var JOB = ['家人職業', '我的志願', '為什麼'];
  var BOOK = ['偏好', '最近讀的', '推薦'];

  /* ---------------------------------------- P.04 運動表現 */
  add('word:dedicated-athlete', '示範：Dedicated athlete 怎麼說', SPORT, [
    'I am a <mark>dedicated athlete</mark>; I train three times a week.',
    'As a <mark>dedicated athlete</mark>, I keep a training diary and warm up before every match.',
    'My coach calls me a <mark>dedicated athlete</mark> because I never skip practice, even in summer.'
  ]);

  add('word:a-keen-sports-player', '示範：A keen sports player 怎麼說', SPORT, [
    'I am <mark>a keen sports player</mark> and enjoy basketball and swimming.',
    '<mark>A keen sports player</mark> like me tries to improve one small skill every week.',
    'I have been <mark>a keen sports player</mark> since Primary Three, when I joined the school team.'
  ]);

  add('word:team-player', '示範：Team player 怎麼說', SPORT, [
    'I am <mark>a team player</mark> and always pass the ball to a teammate in a better position.',
    'Being <mark>a team player</mark> means I cheer for my teammates even when I am on the bench.',
    'My team voted me <mark>a team player</mark> of the year after we won the inter-class tournament.'
  ]);

  add('word:resilient-and-disciplined', '示範：Resilient and disciplined 怎麼說', SPORT, [
    'I am <mark>resilient and disciplined</mark> in both training and study.',
    'I stayed <mark>resilient and disciplined</mark> after losing three matches and kept training every morning.',
    'My coach says I am <mark>resilient and disciplined</mark> because I follow the plan and never complain.'
  ]);

  add('word:demonstrated-leadership-as-team-captain', '示範：Leadership as team captain 怎麼說', SPORT, [
    'I <mark>demonstrated leadership as team captain</mark> of the school basketball team.',
    'I <mark>demonstrated leadership as team captain</mark> by planning training and encouraging younger players.',
    'I <mark>demonstrated leadership as team captain</mark> when our coach was away and I led the warm-up.'
  ]);

  add('word:sportsmanship', '示範：Sportsmanship 怎麼說', SPORT, [
    'I show good <mark>sportsmanship</mark>: I shake hands with the other team after every match.',
    'Good <mark>sportsmanship</mark> means accepting a loss calmly and learning from it.',
    'My teacher praised my <mark>sportsmanship</mark> when I helped an opponent who fell during a race.'
  ]);

  /* ---------------------------------------- P.04 獎項表達 */
  add('word:won-the-name-of-award', '示範：Won the [Name of Award] 怎麼說', PRIZE, [
    'I <mark>won the Best Progress Award</mark> last year.',
    'I <mark>won the Inter-class Reading Award</mark> after finishing forty books in one term.',
    'I <mark>won the Outstanding Service Award</mark> for organising our school charity bazaar.'
  ]);

  add('word:recognized-for-outstanding-performance-in', '示範：Recognized for outstanding performance 怎麼說', PRIZE, [
    'I was <mark>recognized for outstanding performance in Mathematics</mark>.',
    'I was <mark>recognized for outstanding performance in volleyball</mark> after our team reached the final.',
    'I was <mark>recognized for outstanding performance in drama</mark>, where I played the main role.'
  ]);

  add('word:awarded-a-scholarship-for-academic-excellence', '示範：Awarded a scholarship 怎麼說', PRIZE, [
    'I was <mark>awarded a scholarship for academic excellence</mark> in Primary Six.',
    'I was <mark>awarded a scholarship for academic excellence</mark> after three years of steady results.',
    'The school <mark>awarded me a scholarship for academic excellence</mark>, which I used to buy books.'
  ]);

  add('word:champion-first-second-runner-up-in-the-competition-name', '示範：Champion / Runner-up 怎麼說', PRIZE, [
    'I was the <mark>champion</mark> in the school speech competition.',
    'Our team was <mark>first runner-up</mark> in the inter-school basketball tournament.',
    'I was <mark>second runner-up</mark> in the district writing contest.'
  ]);

  add('word:merit-award', '示範：Merit award 怎麼說', PRIZE, [
    'I received a <mark>merit award</mark> at the Speech Festival.',
    'I earned a <mark>merit award</mark> for my drawing in the art competition.',
    'A <mark>merit award</mark> may not be first place, but it showed me that my effort was noticed.'
  ]);

  /* ---------------------------------------- P.04 個人特質 */
  add('word:adaptable-and-versatile-an-all-rounder', '示範：Adaptable and versatile 怎麼說', SELF, [
    'I am <mark>adaptable and versatile</mark>; I can join a new group and help with different tasks.',
    'As an <mark>all-rounder</mark>, I enjoy sport, music and reading equally.',
    'I am <mark>adaptable</mark> enough to switch between leading a group and supporting a leader.'
  ]);

  add('word:can-change-and-learn-new-things-easily', '示範：Can learn new things easily 怎麼說', SELF, [
    'I <mark>can learn new things easily</mark>, such as a new app or a new sport.',
    'I <mark>can change and learn new things easily</mark>, so I adapted to online lessons without trouble.',
    'When our group changed our topic, I learned the new material quickly and shared a summary with everyone.'
  ]);

  add('word:compassionate-and-empathetic', '示範：Compassionate and empathetic 怎麼說', SELF, [
    'I am <mark>compassionate and empathetic</mark>; I notice when a classmate is upset.',
    'I was <mark>compassionate</mark> enough to sit with a new student at lunch and introduce him to my friends.',
    'Being <mark>empathetic</mark> helps me understand both sides during a group discussion.'
  ]);

  add('word:proactive-and-initiative-taking', '示範：Proactive and initiative-taking 怎麼說', SELF, [
    'I am <mark>proactive</mark>; I start my revision early instead of waiting for tests.',
    'I took the <mark>initiative</mark> to set up a study group before the exams.',
    'My teacher says I am <mark>proactive and initiative-taking</mark> because I offered to lead the class clean-up.'
  ]);

  add('word:detail-oriented', '示範：Detail-oriented 怎麼說', SELF, [
    'I am <mark>detail-oriented</mark> and check every number in my maths work.',
    'Being <mark>detail-oriented</mark> helped me spot a mistake in our group poster before we printed it.',
    'I am <mark>detail-oriented</mark>, so I keep careful notes and tidy files.'
  ]);

  add('word:creative-problem-solver', '示範：Creative problem solver 怎麼說', SELF, [
    'I am a <mark>creative problem solver</mark>; I look for a different way when the first plan fails.',
    'As a <mark>creative problem solver</mark>, I used cardboard and a phone torch to finish our science model.',
    'Our teacher called me a <mark>creative problem solver</mark> when I found a cheaper way to build the display stand.'
  ]);

  add('word:well-rounded-individual', '示範：Well-rounded individual 怎麼說', SELF, [
    'I am a <mark>well-rounded individual</mark> who enjoys sport, music and service.',
    'I try to be a <mark>well-rounded individual</mark> by balancing study, basketball and volunteering.',
    'Being a <mark>well-rounded individual</mark> means I can talk about many topics, not just marks.'
  ]);

  /* ---------------------------------------- P.05 職業 */
  add('word:manager', '示範：Manager 怎麼說', JOB, [
    'My father is a <mark>manager</mark> in a logistics company.',
    'I would like to be a <mark>manager</mark> one day because I enjoy organising people and plans.',
    'A good <mark>manager</mark> listens to the team and makes fair decisions.'
  ]);

  add('word:engineer', '示範：Engineer 怎麼說', JOB, [
    'My uncle is an <mark>engineer</mark> who designs bridges.',
    'I want to be an <mark>engineer</mark> because I love building and solving problems.',
    '<mark>Engineers</mark> need patience, because one small mistake can affect many people.'
  ]);

  add('word:clerk-office-worker', '示範：Clerk / Office worker 怎麼說', JOB, [
    'My mother works as an <mark>office worker</mark> in a bank.',
    'A <mark>clerk</mark> keeps records and helps customers, which needs careful organisation.',
    'My aunt is a <mark>clerk</mark>; she says good communication is the most important skill.'
  ]);

  add('word:accountant', '示範：Accountant 怎麼說', JOB, [
    'My cousin is an <mark>accountant</mark> in a small company.',
    'I am interested in becoming an <mark>accountant</mark> because I like numbers and accuracy.',
    'An <mark>accountant</mark> must be honest and careful, as every figure matters.'
  ]);

  add('word:lawyer', '示範：Lawyer 怎麼說', JOB, [
    'My neighbour is a <mark>lawyer</mark> who helps people with contracts.',
    'I would like to be a <mark>lawyer</mark> so I can speak for people who need help.',
    'A <mark>lawyer</mark> must read carefully and explain difficult ideas clearly.'
  ]);

  add('word:doctor', '示範：Doctor 怎麼說', JOB, [
    'My aunt is a <mark>doctor</mark> at a public hospital.',
    'I hope to become a <mark>doctor</mark> because I want to help people feel better.',
    'Being a <mark>doctor</mark> needs strong science knowledge and a kind manner.'
  ]);

  add('word:teacher', '示範：Teacher 怎麼說', JOB, [
    'My mother is a <mark>teacher</mark> in a primary school.',
    'I might become a <mark>teacher</mark> because I enjoy explaining things to my classmates.',
    'A <mark>teacher</mark> needs patience, because every student learns at a different speed.'
  ]);

  add('word:nurse', '示範：Nurse 怎麼說', JOB, [
    'My sister is a <mark>nurse</mark> and works night shifts.',
    'I admire <mark>nurses</mark> because they stay calm when patients are worried.',
    'I would consider being a <mark>nurse</mark>; I like caring for others and working in a team.'
  ]);

  add('word:businessman', '示範：Businessman 怎麼說', JOB, [
    'My father is a <mark>businessman</mark> who runs a small trading company.',
    'I want to be a <mark>businessman</mark> because I enjoy finding out what customers need.',
    'A <mark>businessman</mark> must be honest; trust is more important than a quick profit.'
  ]);

  add('word:civil-servant', '示範：Civil Servant 怎麼說', JOB, [
    'My uncle is a <mark>civil servant</mark> in the Housing Department.',
    'I would like to be a <mark>civil servant</mark> so I can serve the public.',
    '<mark>Civil servants</mark> must be responsible and fair to everyone.'
  ]);

  add('word:sales-consultant', '示範：Sales Consultant 怎麼說', JOB, [
    'My cousin works as a <mark>sales consultant</mark> in a furniture shop.',
    'A <mark>sales consultant</mark> needs to listen first and recommend the right product.',
    'I could be a <mark>sales consultant</mark> because I like meeting new people.'
  ]);

  add('word:it-consultant', '示範：IT Consultant 怎麼說', JOB, [
    'My brother is an <mark>IT consultant</mark> who helps companies with their systems.',
    'I am interested in being an <mark>IT consultant</mark> because I enjoy coding and problem solving.',
    'An <mark>IT consultant</mark> must keep learning, as technology changes every year.'
  ]);

  add('word:police-officer', '示範：Police Officer 怎麼說', JOB, [
    'My neighbour is a <mark>police officer</mark> in our district.',
    'I respect <mark>police officers</mark> because they protect the community day and night.',
    'Being a <mark>police officer</mark> needs courage, honesty and a strong sense of duty.'
  ]);

  /* ---------------------------------------- P.07 書類 */
  add('word:fiction', '示範：Fiction 小說 怎麼說', BOOK, [
    'My favourite genre is <mark>fiction</mark>, especially stories about friendship.',
    'I have just finished a <mark>fiction</mark> book about a boy who sails around the world.',
    'I recommend <mark>fiction</mark> because it lets you live a different life for a few hours.'
  ]);

  add('word:non-fiction', '示範：Non-fiction 非小說 怎麼說', BOOK, [
    'I enjoy <mark>non-fiction</mark> books about science and history.',
    'I read a <mark>non-fiction</mark> book about climate change last month.',
    'I recommend <mark>non-fiction</mark> because everything you learn is true and useful.'
  ]);

  add('word:biography', '示範：Biography 傳記 怎麼說', BOOK, [
    'I like reading a <mark>biography</mark> of people who worked hard.',
    'I finished a <mark>biography</mark> of a scientist who invented a life-saving machine.',
    'A <mark>biography</mark> shows how a real person faced failure, which is encouraging.'
  ]);

  add('word:fantasy', '示範：Fantasy 奇幻小說 怎麼說', BOOK, [
    'I enjoy <mark>fantasy</mark> because it takes me to a world of magic.',
    'I am reading a <mark>fantasy</mark> novel about a dragon and a young mapmaker.',
    'I recommend <mark>fantasy</mark> to classmates who want to escape stress for a while.'
  ]);

  add('word:adventure', '示範：Adventure 冒險小說 怎麼說', BOOK, [
    'I love <mark>adventure</mark> stories full of travel and danger.',
    'Last week I read an <mark>adventure</mark> book about a mountain rescue.',
    'I recommend <mark>adventure</mark> because it teaches courage and quick thinking.'
  ]);
})();


/* 中文翻譯與生詞表
   1. ZH_MAP：按「頁碼#區塊序號」掛上中文翻譯（example / passage 用同長度陣列，逐段對應）。
   2. TERMS：生詞與詞組，app.js 會在英文段落中自動加虛線底線，點擊以 TTS 發音並顯示中文。 */
(function () {
  var W = window;

  var ZH = {
    /* ------------------------------------------------ P.02 自我介紹 */
    'P02#2': '我叫 Mary。我和父母同住。我是家中唯一的孩子，或我是家中最大的孩子、有兩個弟妹。我和家人相處得很好。',
    'P02#4': '我在荃灣官立小學讀書，很喜歡這所學校。我特別擅長中文和英文，因為我喜歡閱讀。我一直努力讀書，很自豪今年在班裡取得第三名。',
    'P02#6': '我是個勤奮而有決心的人，擅長數學或音樂。我也清楚自己的弱點：例如我有時頗完美主義，總要完成一件事才開始另一件。我正在學習更好地分配時間，讓自己可以做更多事情。',
    'P02#12': '我參加了學校合唱團和籃球隊，喜歡唱歌和運動。我在香港學校音樂節得過幾張優異證書。這些經歷教會我團隊合作的價值，也教會我永不放棄。',
    'P02#16': '我喜歡幫助別人。作為學校風紀和社區青年團（CYC）的活躍成員，我學會做一個負責任的領袖。我享受服務社區，因為帶來正面影響讓我很有成就感。',

    /* ------------------------------------------------ P.03 示範答案 */
    'P03#1': [
      '早晨。我叫 Mary，在荃灣官立小學讀書。我是家中最大的孩子，這讓我從小學會負責任、關心別人。',
      '在學校，我是個勤奮的學生，中文和英文都表現出色。去年獲得最佳進步獎，我很自豪，因為這證明我的努力沒有白費。',
      '課堂以外，我是個活躍的人。我喜歡在學校合唱團唱歌，也喜歡打籃球。這些活動幫我在朗誦節取得優異成績，也教會我如何做個好隊員。',
      '我也喜歡透過社會服務回饋社會，例如賣旗和探訪老人院。這些經歷讓我更有同理心。作為學校風紀，我每天都樂意幫助老師和同學。',
      '有時我會太專注一件事，因為我想把它做到最好。不過，我正在學習更好地分配時間，也讓自己更有彈性。我真誠希望加入你們的學校大家庭，向這裡的老師學習。謝謝。'
    ],
    'P03#5': '參觀過貴校、並與老師和同學交談後，我深深感受到校園社群是多麼友善、互相支持和有能力。很明顯，學校營造了溫暖而充滿培育的環境，每個成員都受到重視。',
    'P03#7': '貴校在學術成就、體育卓越方面的傑出聲譽實在令人鼓舞，我衷心希望在這裡挑戰自己，達到同樣的高標準。',
    'P03#9': '我很渴望探索英國文學、戲劇、資訊及通訊科技（ICT）、藝術等科目，這些都是貴校課程提供得非常出色的領域。',
    'P03#11': '我也很欣賞貴校現代化的設施，尤其是藏書豐富的圖書館、大演奏廳、室內游泳池，以及戲劇與舞蹈室。我相信這些會讓我的學習更加有趣。',
    'P03#13': '貴校輝煌的歷史可追溯至 19XX 年，歷史悠久的校訓「To Serve and to Lead」深深啟發我。很明顯，學校培育了卓越的文化，學生不只聰明、口齒伶俐，而且勤奮、堅持不懈。',
    'P03#17': [
      '我數學一向成績不錯。我喜歡學習新事物，也總想找出課本以外的更多知識。'
    ],

    /* ------------------------------------------------ P.04 運動與獎項 */
    'P04#3': [
      '作為熱愛運動的球員和學校足球隊隊長，我學會了團隊合作有多重要，也學會即使困難也要公平比賽。'
    ],
    'P04#6': [
      '我很高興獲得校長獎，並在區域科學展覽中因傑出表現而獲得認可。'
    ],
    'P04#9': [
      '我認為自己是個全面發展的人，適應力強又多才多藝。我是個有創意的問題解決者，喜歡迎接新挑戰。'
    ],

    /* ------------------------------------------------ P.05 家庭 */
    'P05#2': '你有幾位家庭成員？',
    'P05#3': '我家有四個人：爸爸、媽媽、妹妹和我。（也可換成一個妹妹、一個哥哥。）',
    'P05#4': '獨生子女：我家有三個人，包括父母和我。我是獨生子女，所以我和父母共度很多優質時間。',
    'P05#5': '你是家裡最大的：可以說「我是家中最大的孩子，有兩個弟妹」，一次過形容兄弟姊妹：siblings。',
    'P05#6': '我家有兩個人：媽媽和我。我們很快樂、很親密，這教會我更加獨立。（單親家庭：single-parent family）',
    'P05#8': '我爸爸是工程師，媽媽是盡心的家庭主婦，把我們的日常生活照顧得很好。建議用 homemaker，比 housewife 聽起來更專業、更受尊重。',
    'P05#12': '週末我們通常一起去圖書館、博物館、逛街、到郊外遠足或去公園。這些外出對我們很重要，因為它們幫助我們保持健康，也在忙碌一週後放鬆。',
    'P05#14': '我真的很享受家庭生活。父母愛我，他們不只指導我讀書，也向我灌輸良好價值觀，教我做個正直、善良的人。我很愛父母，也感激他們一直以來的支持。',
    'P05#17': '讓我分享一個難忘的家庭故事。我大約八歲時發高燒，病得很重，覺得很虛弱、很害怕。父母無微不至地照顧我，幾乎一直守在身邊，替我量體溫、餵藥，還說故事讓我好過一點。',
    'P05#18': '幾天後我康復了！為了慶祝，我和家人一起去了公園、沙灘或一間不錯的餐廳。這次經歷讓我真正感受到父母深厚的愛，也讓我非常感恩能出生在這個家庭。我明白到，無論發生什麼事，家人總會支持我。',

    /* ------------------------------------------------ P.06 職業 */
    'P06#2': '長大後，我希望成為醫生。我相信這是高尚的職業，可以真正幫助別人，促進他們的健康。我對醫學研究特別有興趣，希望加入團隊，找出治療疾病的新方法，最終幫助更多人活得更健康、更快樂。',
    'P06#3': '我的夢想是成為機師。我對航空著迷，也嚮往飛越全球。我很想體驗不同文化，看看日本、法國、澳洲等美麗的地方。我相信機師能讓我結合對旅行的熱愛，與一份有挑戰性、有滿足感的事業。',
    'P06#4': '我將來希望成為建築師。我很喜歡設計和創造新建築。我希望設計出既實用又啟發人心、具標誌性的建築，就像中環的國際金融中心，真正代表香港的現代天際線。我想為塑造我們城市的未來外貌出一分力。',
    'P06#5': '我想成為律師，因為我相信公義和公平。我希望能幫助需要法律協助的人，確保每個人在法律面前都得到平等對待。我認為健全的法律制度對穩定、公平的社會至關重要，而我想在香港維護這些原則。',
    'P06#6': '我希望成為老師，因為我有很強的語言能力。此外，我想教導學生的不只是學科知識，還有如何培養良好的品德。',
    'P06#7': '我還沒決定具體職業，但我很熱愛數學。我喜歡解決複雜問題，找出合乎邏輯的答案。我希望從事能運用數學能力的工作。',
    'P06#8': '我希望跟隨爸爸的步伐，成為商人。我渴望學習如何創造價值、創新，並為經濟作出貢獻。我也希望將來能供養家人。我相信憑努力和好主意，可以建立成功的企業，帶來正面改變。',
    'P06#9': '我計劃到海外修讀環球商業，最好在英國或美國。我的目標是取得碩士和博士學位，最終創立自己的事業。這些教育會給我所需的知識，為社會帶來正面影響。',

    /* ------------------------------------------------ P.07 好書推介 */
    'P07#1': '我想介紹一本叫《Science Discovery》的書。',
    'P07#2': '摘要：這是一本非小說類書籍，探索二十世紀最重要的科學發明和發現，也分享偉大科學家如愛迪生和愛因斯坦的精彩人生故事。',
    'P07#3': '我喜歡這本書，因為它資訊豐富卻容易理解。它用簡單的語言解釋複雜的概念，讓學習科學變得很有趣。',
    'P07#4': '影響：這本書激發我對事物運作的好奇心，啟發我在日常生活中更細心觀察，並繼續探索新知識。謝謝。',

    /* ------------------------------------------------ P.15–P.16 小組討論 */
    'P15#4': '（適合較難掌握九大原則技巧的同學）例子：「AI 應否融入學校教學？」',
    'P15#5': '只要在小組討論開始時，按正確次序運用原則 1、4、3，你就已成功踏出第一步。之後，專注聆聽，並運用下面提供的通用互動句型。',

    /* ------------------------------------------------ P.18 閱讀理解 */
    'P18#6': [
      '從前有個鄉下人走到他養的鵝的巢邊，發現那裡有一隻金黃閃亮的蛋。他拿起來，覺得重得像鉛，正想丟掉，因為他以為有人捉弄他。但他想了一想，還是把蛋帶回家，不久便驚喜地發現那是一隻純金的蛋。每天早上都發生同樣的事，他很快靠賣蛋富起來。他越富有就越貪心，想一次過取得鵝能給出的所有金子，於是把鵝殺了，剖開卻什麼也沒有。'
    ]
  };

  W.ZH_MAP = ZH;

  /* 清單題目（ol）與示範步驟（steps）的中文，按區塊逐條對應。 */
  var ZH_ITEMS = {
    'P08#3': [
      '你心目中怎樣的同學才算好同學？',
      '你對垃圾食物有什麼看法？',
      '用一分鐘談談「香蕉」。',
      '如果你爸爸被裁員，你會怎樣幫他？'
    ],
    'P11#8': [
      '學生應否被要求穿校服？',
      '人工智能（AI）應否融入學校教學？',
      '如果學校允許學生放棄一科，會是哪一科？'
    ],
    'P18#8': [
      '為什麼鄉下人起初以為有人捉弄他？',
      '鵝的蛋是什麼樣子的？',
      '這個故事告訴我們什麼？',
      '如果你是那個鄉下人，你會怎樣處理那隻蛋？'
    ]
  };

  var ZH_STEPS = {
    'P08#9': [
      '謝謝你的問題。',
      '你的問題是，我是否認為香港應該控制空氣污染。'
    ],
    'P09#0': [
      '是的，我完全同意。香港確實需要控制空氣污染。',
      '我對此有三個主要原因。第一，空氣質素差會嚴重危害我們的健康。第二，如果空氣太污染，旅客和企業都會避免來香港。第三，我實在不希望我的弟妹在污染空氣中長大。',
      '因此，我堅信香港必須控制空氣污染。這對每個人的健康和我們城市的未來都很重要。'
    ],
    'P09#2': [
      '謝謝你的問題。',
      '你的問題是，我是否認為香港兒童應該多做運動。',
      '是的，我完全同意。香港兒童當然應該多做運動。',
      '我對此有三個主要原因。第一，多做運動令我們更健康、更強壯。第二，如果我們定期運動，就不必那麼常看醫生。第三，健康的身體有助我們更專注、讀得更好。',
      '因此，我堅信香港兒童應該多做運動。這不只讓我們身體強壯，也讓我們頭腦靈活，成為更快樂、更好的學習者。'
    ]
  };

  /* 把翻譯掛回對應區塊：p 用字串，example / passage 用逐段陣列。 */
  if (W.PAGES) {
    W.PAGES.forEach(function (page) {
      (page.blocks || []).forEach(function (b, i) {
        var key = page.id + '#' + i;
        var z = ZH[key];
        if (z) b.zh = z;
        if (ZH_ITEMS[key]) b.zhItems = ZH_ITEMS[key];
        if (ZH_STEPS[key] && b.items) {
          b.items.forEach(function (it, j) { if (ZH_STEPS[key][j]) it.zh = ZH_STEPS[key][j]; });
        }
      });
    });
  }

  W.TERMS = [
    { term: 'extracurricular activities', zh: '課外活動' },
    { term: 'Community Youth Club', zh: '社區青年團' },
    { term: 'Certificates of Merit', zh: '優異證書' },
    { term: 'sense of achievement', zh: '成就感' },
    { term: 'positive impact', zh: '正面影響' },
    { term: 'teamwork', zh: '團隊合作' },
    { term: 'perfectionist', zh: '完美主義者' },
    { term: 'determined', zh: '有決心的' },
    { term: 'weaknesses', zh: '弱點' },
    { term: 'prefect', zh: '風紀／學長' },

    { term: 'academic achievements', zh: '學術成就' },
    { term: 'sporting excellence', zh: '體育卓越' },
    { term: 'illustrious history', zh: '輝煌的歷史' },
    { term: 'time-honoured motto', zh: '歷史悠久的校訓' },
    { term: 'distinguished culture', zh: '卓越的文化' },
    { term: 'curriculum', zh: '課程' },
    { term: 'extensive library', zh: '藏書豐富的圖書館' },
    { term: 'auditorium', zh: '演奏廳' },
    { term: 'facilities', zh: '設施' },
    { term: 'reputation', zh: '聲譽' },
    { term: 'articulate', zh: '口齒伶俐' },
    { term: 'persistent', zh: '堅持不懈' },
    { term: 'compassionate', zh: '有同理心的' },
    { term: 'flexible', zh: '有彈性的' },
    { term: 'peers', zh: '同輩／同學' },

    { term: 'well-rounded', zh: '全面發展' },
    { term: 'adaptable', zh: '適應力強' },
    { term: 'versatile', zh: '多才多藝' },
    { term: 'creative problem solver', zh: '有創意的問題解決者' },
    { term: 'outstanding performance', zh: '傑出表現' },
    { term: 'regional science fair', zh: '區域科學展覽' },
    { term: 'keen', zh: '熱衷' },
    { term: 'sportsmanship', zh: '體育精神' },

    { term: 'homemaker', zh: '家庭主婦（較尊重的說法）' },
    { term: 'instill', zh: '灌輸' },
    { term: 'integrity', zh: '正直' },
    { term: 'grateful', zh: '感激' },
    { term: 'siblings', zh: '兄弟姊妹' },
    { term: 'only child', zh: '獨生子女' },
    { term: 'single-parent family', zh: '單親家庭' },

    { term: 'aspire', zh: '立志／渴望' },
    { term: 'noble profession', zh: '高尚的職業' },
    { term: 'well-being', zh: '身心健康' },
    { term: 'aviation', zh: '航空' },
    { term: 'architect', zh: '建築師' },
    { term: 'functional', zh: '實用的' },
    { term: 'iconic', zh: '標誌性的' },
    { term: 'skyline', zh: '天際線' },
    { term: 'justice', zh: '公義' },
    { term: 'legal assistance', zh: '法律協助' },
    { term: 'uphold', zh: '維護' },
    { term: 'command of languages', zh: '語言能力' },
    { term: 'moral character', zh: '品德' },
    { term: 'passionate', zh: '熱愛' },
    { term: 'enterprise', zh: '企業' },

    { term: 'non-fiction', zh: '非小說類' },
    { term: 'informative', zh: '資訊豐富' },
    { term: 'curiosity', zh: '好奇心' },
    { term: 'observant', zh: '細心觀察' },

    { term: 'countryman', zh: '鄉下人' },
    { term: 'glittering', zh: '閃閃發光' },
    { term: 'greedy', zh: '貪心' }
  ];
})();


/* d8：示範答案「精簡版 / 標準版 / 進階版」三檔切換（P02 自我介紹、P03 選校理由、P04 獎項活動） */
(function (W) {
  var V = {
    'P03#1': {
      short: [
        'Good morning. My name is Mary, and I study at Tsuen Wan Government Primary School.',
        'I am a hardworking student who does best in Chinese and English, and I was proud to receive the Best Progress Award last year.',
        'Outside the classroom, I enjoy singing in the school choir and playing basketball, which taught me to be a good team player.'
      ],
      shortZh: [
        '早晨。我叫 Mary，在荃灣官立小學讀書。',
        '我是個勤奮的學生，中文和英文表現最好。去年我很自豪獲得最佳進步獎。',
        '課堂以外，我喜歡在學校合唱團唱歌和打籃球，這教會我如何做個好隊員。'
      ],
      adv: [
        'Good morning. My name is Mary, and I am a Primary Six student at Tsuen Wan Government Primary School. As the eldest child in my family, I have learned responsibility and care from an early age.',
        'In school, I am a diligent student with a particular strength in Chinese and English. Receiving the Best Progress Award last year meant a great deal to me, because it rewarded effort rather than natural ability — and effort is what I can control.',
        'Outside the classroom, I am an active member of the school choir and the basketball team. Those activities have taught me to listen, to compromise, and to keep going when the group is depending on me.',
        'I also serve as a school prefect, which has shown me that leadership is mainly a matter of noticing what others need.',
        'I still have much to learn, but I believe a school like yours — where students are encouraged to serve and to lead — is where I would grow fastest.'
      ],
      advZh: [
        '早晨。我叫 Mary，是荃灣官立小學的六年級學生。身為家中最大的孩子，我自小學會了負責任和關心別人。',
        '在校內，我是個勤奮的學生，尤其擅長中文和英文。去年獲得最佳進步獎對我意義重大，因為它獎勵的是努力而不是天賦——而努力正是我能掌握的。',
        '課堂以外，我是學校合唱團和籃球隊的活躍成員。這些活動教會我聆聽、妥協，以及在團隊需要我時堅持下去。',
        '我亦是學校風紀，這讓我明白領導主要是留意別人的需要。',
        '我仍有很多要學習的地方，但我相信像貴校這樣鼓勵學生服務與領導的學校，會是我成長最快的地方。'
      ]
    },
    'P02#2': {
      short: 'My name is Mary. I live with my parents, and we get along very well.',
      shortZh: '我叫 Mary，和父母同住，我們相處得很好。',
      adv: 'Good morning. My name is Mary, and I live with my parents in Tsuen Wan. As the eldest child at home, I have learned to be responsible and considerate. We get along very well, and my family is the source of my confidence.',
      advZh: '早晨。我叫 Mary，與父母住在荃灣。作為家中最大的孩子，我學會了負責任、體諒別人。我們相處融洽，家人是我自信的來源。'
    },
    'P02#4': {
      short: 'I study at Tsuen Wan Government Primary School, and I like it very much. I do best in Chinese and English because I love reading.',
      shortZh: '我在荃灣官立小學讀書，很喜歡這所學校。我中文和英文最好，因為我愛閱讀。',
      adv: 'I study at Tsuen Wan Government Primary School, a school I have genuinely grown to love. I particularly excel in Chinese and English, largely because reading has opened a world of ideas to me. Last year I was proud to be placed third in my class, and that success has pushed me to aim even higher.',
      advZh: '我在荃灣官立小學讀書，這是一所我真心喜愛的學校。我特別擅長中文和英文，很大程度上是因為閱讀為我打開了思想的世界。去年我很自豪在班裡取得第三名，這份成績推動我訂下更高的目標。'
    },
    'P02#6': {
      short: 'I am hardworking and determined, and I am strongest in Maths. I am also learning to keep my perfectionism in check.',
      shortZh: '我勤奮而有決心，最擅長數學。我也在學習控制自己的完美主義。',
      adv: 'I would describe myself as hardworking and determined, with a particular strength in Mathematics. I am equally honest about my weaknesses: I can be something of a perfectionist, insisting on finishing one task to the highest standard before I move on. I am now learning to plan my time more wisely, so that I can achieve more without exhausting myself.',
      advZh: '我會形容自己勤奮而有決心，尤其擅長數學。我同樣坦誠面對弱點：我有時頗完美主義，總要先把一件事做到最好才肯開始下一件。我正在學習更明智地分配時間，讓自己做得更多而不至於累壞。'
    },
    'P03#5': {
      short: 'Having visited your school, I was impressed by how kind and supportive the teachers and students are.',
      shortZh: '參觀貴校後，我對老師和同學的友善與互相支持印象深刻。',
      adv: 'Having spent a morning at your school and spoken with both teachers and students, I came away genuinely impressed. What struck me most was not the buildings but the people: staff who listened patiently, and students who welcomed a visitor with real warmth. It is clear that your school has built a caring community in which every member is valued.',
      advZh: '在貴校待了一個上午、並與老師和同學交談後，我真心留下深刻印象。最打動我的不是建築，而是人：耐心聆聽的教職員，以及真心歡迎訪客的同學。很明顯，貴校建立了一個彼此關懷的社群，每個成員都受到重視。'
    },
    'P03#7': {
      short: 'Your school\'s strong academic and sports results inspire me, and I hope to reach the same standard here.',
      shortZh: '貴校出色的學術與體育成績激勵了我，我希望在這裡達到同樣的水準。',
      adv: 'Your school\'s consistent excellence — whether in public examination results or on the sports field — is genuinely inspiring. What impresses me is not merely the trophies, but the disciplined effort behind them. I sincerely hope to test myself against that standard, and to add to it in my own way.',
      advZh: '貴校持續的卓越表現——無論是公開考試成績還是運動場上的表現——實在令人鼓舞。打動我的不只是獎盃，而是獎盃背後自律的努力。我衷心希望以這個標準挑戰自己，並以自己的方式為它增添一分。'
    },
    'P03#9': {
      short: 'I am eager to study English Literature, Drama, ICT and Art at your school.',
      shortZh: '我很渴望在貴校修讀英國文學、戲劇、資訊及通訊科技和藝術。',
      adv: 'I am eager to explore the subjects your curriculum offers so well — English Literature, Drama, Information and Communication Technology, and the Arts. Literature and Drama would sharpen both my language and my confidence, while ICT and Art would let me turn ideas into something others can see. I look forward to stretching myself across both the linguistic and the creative sides of school life.',
      advZh: '我很渴望探索貴校課程提供得如此出色的科目——英國文學、戲劇、資訊及通訊科技，以及藝術。文學與戲劇會磨練我的語言和自信，而 ICT 與藝術則讓我把想法變成別人看得見的作品。我期待在語言與創意兩方面同時拓展自己。'
    },
    'P03#11': {
      short: 'I am impressed by your library, auditorium, swimming pool and drama studio.',
      shortZh: '貴校的圖書館、演奏廳、游泳池和戲劇室都令我印象深刻。',
      adv: 'I was particularly impressed by your modern facilities: a library extensive enough for real research, a proper auditorium for performance, an indoor pool that makes training possible all year round, and a drama and dance studio where ideas can be rehearsed into shape. I can already picture myself using them, and I believe they would make my learning far more vivid.',
      advZh: '我尤其欣賞貴校現代化的設施：藏書足夠做真正研究的圖書館、可正式演出的演奏廳、一年四季都能訓練的室內游泳池，以及可把想法排練成形的戲劇與舞蹈室。我已經可以想像自己使用它們，相信會讓我的學習生動得多。'
    },
    'P03#13': {
      short: 'Your long history and your motto, “To Serve and to Lead”, inspire me deeply.',
      shortZh: '貴校悠久的歷史與校訓「To Serve and to Lead」，深深啟發我。',
      adv: 'Your school\'s illustrious history, reaching back to 19XX, and its time-honoured motto, “To Serve and to Lead”, speak to me powerfully. A school that has lasted so long must have kept faith with something worthwhile. Its distinguished culture — students who are bright and articulate, yet also diligent and persistent — is exactly the environment in which I hope to grow.',
      advZh: '貴校輝煌的歷史可追溯至 19XX 年，歷史悠久的校訓「To Serve and to Lead」深深打動我。一所能夠屹立這麼久的學校，必定堅守了值得堅守的東西。它卓越的文化——學生既聰明、口齒伶俐，又勤奮、堅持不懈——正是我希望成長的環境。'
    },
    'P03#17': {
      short: 'I do well in Maths, and I enjoy learning new things.',
      shortZh: '我數學成績不錯，也喜歡學習新事物。',
      adv: 'I consistently achieve strong results in Mathematics, partly because I am never satisfied with the textbook alone. I enjoy following a problem further than the syllabus requires, and I often read ahead to see where an idea comes from. That curiosity, more than the marks themselves, is what I value.',
      advZh: '我數學成績一直不錯，部分原因是我不滿足於只看課本。我喜歡把一個問題追得比課程要求更遠，也常常預先閱讀，看看一個概念從何而來。我最看重的，是這份好奇心，而不是分數本身。'
    },
    'P04#3': {
      short: 'As captain of the football team, I learned how much teamwork and fair play matter.',
      shortZh: '作為足球隊隊長，我學會了團隊合作與公平比賽有多重要。',
      adv: 'As a keen sports player and the captain of my school\'s football team, I learned far more than tactics. Leading a side taught me to cover for my teammates, and to keep playing fair in the moments when it is hardest — when a decision goes against you, or when the score is slipping away. That lesson has shaped the way I work with people ever since.',
      advZh: '作為熱愛運動的球員和學校足球隊隊長，我學到的遠不止戰術。帶領一支球隊教會我補位照顧隊友，也教我在最困難的時刻仍然公平作賽——當判決對你不利，或比分逐漸落後的時候。這個體會從此塑造了我與人合作的方式。'
    },
    'P04#6': {
      short: 'I was glad to win the Principal\'s Award and to be recognised at the regional science fair.',
      shortZh: '我很高興獲得校長獎，並在區域科學展覽中獲得肯定。',
      adv: 'Winning the Principal\'s Award was a real honour, but the recognition that meant more to me came at the regional science fair, where our project was singled out for its originality. It taught me that careful preparation and honest curiosity are noticed, even in a crowded hall of entries.',
      advZh: '獲得校長獎是很大的榮譽，但對我意義更大的，是在區域科學展覽中獲得肯定——我們的作品因為原創性而受到注意。這教會我：即使置身擠滿參賽作品的場館，用心的準備與真誠的好奇仍然會被看見。'
    },
    'P04#9': {
      short: 'I am a well-rounded, adaptable person who enjoys solving problems creatively.',
      shortZh: '我是個全面、適應力強的人，喜歡有創意地解決問題。',
      adv: 'I consider myself a well-rounded individual — adaptable enough to settle quickly into new settings, and versatile enough to contribute across subjects and activities. Above all, I am a creative problem solver: when the obvious route fails, I enjoy finding another one, and I do not lose heart when the first attempt does not work.',
      advZh: '我認為自己是個全面發展的人——適應力足以讓我在新環境中很快安頓下來，多才多藝足以讓我在不同科目與活動中有所貢獻。最重要的是，我是個有創意的問題解決者：當明顯的路行不通，我樂於另尋他法，也不會因為第一次嘗試失敗而灰心。'
    },
    'P02#12': {
      short: 'I am in the school choir and the basketball team, and I love singing and sports.',
      shortZh: '我參加了學校合唱團和籃球隊，喜歡唱歌和運動。',
      adv: 'I sing in the school choir and play for the basketball team, and both have shaped me. I have received several Certificates of Merit at the Hong Kong Schools Music Festival, which taught me how much steady practice matters. Above all, these activities have shown me the value of teamwork — and of never giving up when a performance or a match does not go our way.',
      advZh: '我在學校合唱團唱歌，也為籃球隊出賽，兩者都塑造了我。我在香港學校音樂節得過幾張優異證書，這教會我穩定練習有多重要。最重要的是，這些活動讓我明白團隊合作的價值——也讓我在表演或比賽不順時學會不輕言放棄。'
    },
    'P02#16': {
      short: 'I like helping others, and I serve as a school prefect and a member of the Community Youth Club.',
      shortZh: '我喜歡幫助別人，我是學校風紀，也是社區青年團成員。',
      adv: 'I genuinely enjoy helping others. As a school prefect and an active member of the Community Youth Club, I have learned that a responsible leader listens first and acts second. Serving the community gives me a real sense of achievement, because a positive impact on one person\'s day is something I can see immediately.',
      advZh: '我真心喜歡幫助別人。作為學校風紀和社區青年團的活躍成員，我學會一個負責任的領袖先聆聽、後行動。服務社區讓我有真正的成就感，因為為一個人的一天帶來正面影響，是我能即時看見的。'
    },
    'P05#3': {
      short: 'There are four of us in my family: my parents, my younger sister and me.',
      shortZh: '我家有四個人：父母、妹妹和我。',
      adv: 'There are four of us in my family: my father, my mother, my younger sister and me. With a younger sibling at home, I have learned to share, to be patient, and to take responsibility without being asked. Our home is not a large one, but it is a warm one, and I think that has shaped me more than anything else.',
      advZh: '我家有四個人：爸爸、媽媽、妹妹和我。家裏有個年幼的弟妹，讓我學會分享、有耐性，也學會主動承擔責任。我們的家不算大，卻很溫暖，我認為這對我的影響比任何事都深。'
    },
    'P05#8': {
      short: 'My father is an engineer and my mother is a homemaker.',
      shortZh: '我爸爸是工程師，媽媽是家庭主婦。',
      adv: 'My father is an engineer, whose work has taught me to solve problems patiently and precisely. My mother is a dedicated homemaker who looks after our daily lives with remarkable care — and I have come to understand that running a home well is a form of quiet leadership. Between the two of them, I have learned both how to think and how to care.',
      advZh: '我爸爸是工程師，他的工作教會我有耐性、精確地解決問題。媽媽是盡心的家庭主婦，以極大的細心照顧我們的日常生活——而我漸漸明白，把一個家打理得好，是一種安靜的領導。在他們身上，我學會了如何思考，也學會了如何關心別人。'
    },
    'P05#14': {
      short: 'I enjoy my family life, and I am grateful for my parents\' love and support.',
      shortZh: '我享受家庭生活，也感激父母的愛與支持。',
      adv: 'I really enjoy my family life. My parents do not simply tell me what to do; they guide me in my studies and, more importantly, instill in me values I will keep for life — integrity, kindness, and the habit of finishing what I begin. I love them dearly, and I am grateful for a support that has never once been conditional.',
      advZh: '我真的很享受家庭生活。父母不只是叫我怎樣做；他們指導我讀書，更重要的是，向我灌輸一些我一生受用的價值觀——正直、善良，以及有始有終的習慣。我很愛他們，也感激這份從不附帶條件的支持。'
    },
    'P06#2': {
      short: 'When I grow up, I want to be a doctor because I want to help people.',
      shortZh: '長大後，我想做醫生，因為我想幫助別人。',
      adv: 'When I grow up, I aspire to be a doctor, because medicine is one of the few professions in which knowledge and kindness are required in equal measure. I am particularly drawn to medical research: I would like to be part of a team that finds better ways to treat illness, so that help reaches people who might otherwise never receive it. That, to me, is a life worth spending.',
      advZh: '長大後，我希望成為醫生，因為醫學是少數同時需要知識與善心的行業。我尤其被醫學研究吸引：我希望加入團隊，找出更好的治療方法，讓幫助能到達那些原本永遠得不到幫助的人。對我來說，這樣的人生值得投入。'
    },
    'P07#2': {
      short: 'The book is Science Discovery, a non-fiction book about the great scientific inventions of the 20th century.',
      shortZh: '這本書是《Science Discovery》，是一本關於二十世紀偉大科學發明的非小說類書籍。',
      adv: 'The book is called Science Discovery, a work of non-fiction that traces the most important scientific inventions and discoveries of the twentieth century. What makes it unusual is that it explains the science through the lives of the people who made it — Thomas Edison, Albert Einstein and others — so that discovery becomes a human story rather than a list of dates.',
      advZh: '這本書叫《Science Discovery》，是一部非小說作品，追溯二十世紀最重要的科學發明與發現。它特別之處，在於透過創造科學的人——愛迪生、愛因斯坦等——的生平來解釋科學，讓發現變成一個人的故事，而不是一列年份。'
    },
    'P07#3': {
      short: 'I like this book because it is informative yet easy to understand.',
      shortZh: '我喜歡這本書，因為它資訊豐富卻容易理解。',
      adv: 'I like this book because it is informative without ever becoming heavy. It explains genuinely complex ideas in plain language and small, well-chosen examples, so that a reader my age can follow the reasoning rather than simply memorise the conclusion. That, I think, is the surest test of good science writing.',
      advZh: '我喜歡這本書，因為它資訊豐富卻不沉重。它用平實的語言和精心挑選的小例子解釋真正複雜的概念，讓我這個年紀的讀者能跟上推理，而不是死記結論。我認為，這正是好的科普寫作最可靠的標準。'
    },
    'P07#4': {
      short: 'This book sparked my curiosity, and it has made me more observant in daily life.',
      shortZh: '這本書激發了我的好奇心，也讓我日常更細心觀察。',
      adv: 'This book has changed how I look at ordinary things. It sparked my curiosity about how the world actually works, and it inspired me to become more observant in daily life — to ask why a kettle whistles, or how a bridge holds its shape. Most of all, it left me wanting to keep exploring, which is why I would recommend it to anyone. Thank you.',
      advZh: '這本書改變了我看日常事物的方式。它激發我對世界如何運作的好奇，也啟發我在日常生活中更細心觀察——會問水煲為何會鳴叫，橋樑又為何能保持形狀。最重要的是，它讓我想要繼續探索，這也是我會向任何人推薦它的原因。謝謝。'
    }
  };

  if (!W.PAGES) return;

  function toItems(b) {
    if (b.type === 'example') {
      return { items: (b.paragraphs || []).slice(), zh: (Array.isArray(b.zh) ? b.zh : [b.zh]).slice() };
    }
    return { items: [b.html || ''], zh: Array.isArray(b.zh) ? b.zh.slice() : [b.zh || ''] };
  }

  W.PAGES.forEach(function (page) {
    (page.blocks || []).forEach(function (b, i) {
      var key = page.id + '#' + i;
      var cfg = V[key];
      if (!cfg) return;
      var std = toItems(b);
      b.variants = [
        { label: '精簡版', items: Array.isArray(cfg.short) ? cfg.short : [cfg.short], zh: Array.isArray(cfg.shortZh) ? cfg.shortZh : [cfg.shortZh] },
        { label: '標準版', items: std.items, zh: std.zh },
        { label: '進階版', items: Array.isArray(cfg.adv) ? cfg.adv : [cfg.adv], zh: Array.isArray(cfg.advZh) ? cfg.advZh : [cfg.advZh] }
      ];
    });
  });
})(window);


/* d9：示範彈窗句子的中文翻譯（7 組主要示範 + 69 個詞條，共 230 句）。
   鍵與 DEMO_BANK 相同；陣列順序必須與 demos 一致。 */
(function (W) {
  var Z = {
    name: [
      '我叫 Mary。',
      '我叫 Mary，是荃灣官立小學的六年級學生。',
      '我叫 Mary。這個名字有「親愛、受喜愛」的意思，我希望能成為朋友可以隨時依靠的人。'
    ],
    family: [
      '我和父母同住。我是家中最大的孩子，所以要幫忙照顧弟弟。',
      '我是獨生子，但我從不覺得孤單，因為父母和表兄弟姐妹都跟我很親近。',
      '我家有四個人：父母、姐姐和我。我們分擔家務，每天晚上也會聊天。'
    ],
    school: [
      '我在荃灣官立小學讀書，很喜歡這所學校。',
      '我現時在荃灣官立小學就讀，並在這裡培養了對語言和閱讀的濃厚興趣。',
      '我就讀荃灣官立小學。這是一所活動豐富的學校，我在那裡結識了很多好朋友。'
    ],
    rank: [
      '我很自豪今年在班裡取得第三名。',
      '憑著努力，我今年由第十五名進步到班裡第三名。',
      '我特別擅長數學，並在全年級這一科取得第二名。'
    ],
    subject: [
      '我擅長數學，喜歡一步一步拆解問題，直到答案清晰為止。',
      '我擅長中文，愛讀故事，也愛寫下我遇到的人物。',
      '我擅長英文，喜歡讀英文小說，也喜歡和同學用英語交談。',
      '我擅長體育，每週打籃球，比賽中從不輕言放棄。',
      '我擅長視覺藝術，我為班級專題設計的海報曾在大堂展出。'
    ],
    district: [
      '我們住在荃灣。',
      '我們住在荃灣，這是一個熱鬧的地區，我家附近有公園和一座大型圖書館。',
      '我們住在荃灣，乘巴士上學大約要二十分鐘。'
    ],
    outing: [
      '我和家人一起去了維多利亞公園。',
      '我和家人一起去了淺水灣，整個下午都在堆沙堡。',
      '為了慶祝我的生日，我和家人去了荃灣一間小餐廳。雖然簡單，卻讓我體會到父母有多關心我。'
    ],
    'word:diligent': [
      '我是個勤奮的學生，總是在晚飯前完成功課。',
      '老師說我勤奮，因為我從不放棄一道難題。',
      '勤奮幫助我去年由第十五名進步到第三名。'
    ],
    'word:positive': [
      '我是個積極的人，即使任務艱難，我也會嘗試微笑面對。',
      '同學說我積極，因為每次測驗前我都會鼓勵他們。',
      '積極的態度讓我從錯誤中學習，而不是放棄。'
    ],
    'word:creative': [
      '我是個有創意的學生，喜歡畫海報、想新點子。',
      '我贏了班級海報比賽，因為我為專題設計了一句有創意的標語。',
      '在小組工作中，我就是那個提出創意方式來呈現想法的人。'
    ],
    'word:responsible': [
      '我是個負責任的學生，總是把功課準時交齊。',
      '作為班長，我負責收功課，也負責幫助新同學。',
      '負責任的意思是信守承諾，即使沒有人看著。'
    ],
    'word:strong': [
      '我身心都很堅強，每週都打籃球。',
      '輸掉比賽時我仍然堅強，第二天更加努力練習。',
      '我堅強的意志幫助我完成了與家人一起的長途遠足。'
    ],
    'word:a-team-player': [
      '我是個團隊合作者，會聆聽組員，公平分擔工作。',
      '在小組專題中，我是個團隊合作者，幫助一位害羞的同學在全班面前發言。',
      '做一個團隊合作者讓我明白，一群人能比一個人成就更多。'
    ],
    'word:curious': [
      '我是個有好奇心的學習者，總是問「為什麼會這樣」。',
      '我對科學很好奇，所以會讀關於太空和發明的書。',
      '我的好奇心讓我加入 STEM 學會，並造出第一個機械人。'
    ],
    'word:impulsive': [
      '有時我會衝動，未想清楚就太快回答。',
      '我有點衝動，所以現在說話前會先停一停、深呼吸。',
      '為了控制衝動的習慣，我在小組討論回答前會先寫下自己的想法。'
    ],
    'word:self-critical': [
      '我有時會自我批評，留意到功課中每一個小錯。',
      '我會自我批評，但我正在學習在完成困難任務後讚賞自己。',
      '老師告訴我，自我批評是好的，只要不放棄就可以。'
    ],
    'word:impatient': [
      '要等別人時，我有時會不耐煩。',
      '我正在改善，透過幫助較慢的同學，而不是催促他們。',
      '我以前對長篇書籍沒有耐性，現在每晚讀十頁。'
    ],
    'word:reserved': [
      '我比較內斂，所以起初會多聽少說。',
      '我在新群體中比較內斂，但我會向每位新同學問一個問題。',
      '內斂幫助我細心觀察；現在我也嘗試把想法大聲說出來。'
    ],
    'word:school-choir-orchestra': [
      '我四年級加入學校合唱團，每週三練唱。',
      '在合唱團唱歌教會我細心聆聽，並與他人保持同一節拍。',
      '去年我們的合唱團在朗誦節演出，並獲得優異獎。'
    ],
    'word:stem-club': [
      '我是 STEM 學會成員，放學後會造小型機械人。',
      '在 STEM 學會，我學會了測試想法、失敗、再試一次。',
      '我們的 STEM 專題——一個省水警報器——贏得學校創新獎。'
    ],
    'word:debate-club': [
      '我加入辯論學會，希望更善於表達自己的想法。',
      '在辯論學會，我學會用理由和例子支持自己的觀點。',
      '我們的辯論隊進入了校際比賽決賽。'
    ],
    'word:boy-scouts-girl-guides': [
      '我是童軍成員，每個星期六早上集會。',
      '童軍訓練教會我保持冷靜、幫助別人、團隊合作。',
      '我參加童軍遠足與清潔營後，獲得了服務章。'
    ],
    'word:best-progress-award': [
      '我去年獲得最佳進步獎。',
      '我把中文成績由六十分提升到八十五分，因而獲得最佳進步獎。',
      '最佳進步獎讓我明白，穩定的努力比一次好成績更重要。'
    ],
    'word:conduct-award': [
      '我在五年級獲頒操行獎。',
      '我因為每天都禮貌、誠實、樂於助人，而獲得操行獎。',
      '操行獎提醒我，良好的禮貌與好成績同樣重要。'
    ],
    'word:outstanding-service-award': [
      '我因為擔任學校風紀的工作，獲得傑出服務獎。',
      '我籌辦了三次賣旗日後，獲得傑出服務獎。',
      '傑出服務獎讓我更想繼續服務社區。'
    ],
    'word:speech-festival-merit': [
      '我在香港學校朗誦節獲得優異獎。',
      '我每晚練習那首詩，終於在朗誦節獲得優異獎。',
      '這個優異獎鼓勵我今年再次參加朗誦節。'
    ],
    'word:flag-selling': [
      '我參與賣旗已經兩年。',
      '賣旗時，我禮貌地問候每位路人，即使他們拒絕。',
      '賣旗教會我，小小的捐款也能大大幫助別人。'
    ],
    'word:visiting-elderly-homes': [
      '我們班每年聖誕節都會探訪老人院。',
      '我喜歡探訪老人院，因為院友很愛跟我們講故事。',
      '探訪老人院教會我耐心聆聽，說話也放慢一點。'
    ],
    'word:beach-cleanup': [
      '去年夏天我和家人參加了淨灘。',
      '淨灘時我們收集了超過五十袋膠樽和垃圾。',
      '淨灘讓我明白，每個人都必須保護海洋。'
    ],
    'word:charity-bazaar': [
      '我們學校每年舉辦慈善義賣，我在書檔幫忙。',
      '我為慈善義賣設計價錢牌，並把舊書賣給低年級同學。',
      '慈善義賣教會我如何與他人合作做一件好事。'
    ],
    'word:consistently-high-achiever': [
      '我在中文、英文和數學都是持續取得高分的學生。',
      '我能夠持續取得高分，是因為我每天都溫習一點。',
      '持續取得高分不是靠運氣，而是靠習慣。'
    ],
    'word:always-get-good-marks': [
      '我數學和科學一向取得好成績。',
      '我總是取得好成績，因為交功課前我會檢查兩次。',
      '我在閱讀一向取得好成績，這幫助我加入了學校讀書會。'
    ],
    'word:strong-analytical-skills': [
      '我有很強的分析能力，喜歡把問題拆成更小的步驟。',
      '我強的分析能力幫助我們組最先解開數學挑戰。',
      '我在科學課設計實驗時，會運用我強的分析能力。'
    ],
    'word:intellectually-curious': [
      '我有求知慾，常常問「怎樣」和「為什麼」。',
      '求知慾讓我去閱讀關於太空和氣候變化的資料。',
      '老師形容我有求知慾，因為我會問課本以外的問題。'
    ],
    'word:love-to-learn-new-things': [
      '我喜歡學習新事物，由編程到烹飪都喜歡。',
      '我喜歡學習新事物，所以同時加入了 STEM 學會和合唱團。',
      '同學都知道我喜歡學習新事物，常叫我先試新活動。'
    ],
    'word:diligent-and-self-motivated': [
      '我勤奮而自我驅動，不用人提醒也會計劃溫習。',
      '我勤奮而自我驅動，所以在假期前已讀完整張書單。',
      '勤奮而自我驅動，讓我在練籃球的同時也能跟上學業。'
    ],
    'word:work-hard-and-study-by-myself': [
      '我每天傍晚都努力讀書、自己學習。',
      '我努力讀書、自己學習，遇到不明白時會用筆記和網上練習。',
      '父母不用催我，因為我努力讀書、自己學習。'
    ],
    'word:excel-in-subject': [
      '我擅長數學，喜歡有挑戰性的難題。',
      '我擅長中文寫作，去年贏得校內作文獎。',
      '我擅長科學，因為我喜歡做實驗並記錄結果。'
    ],
    'word:very-good-at-subject': [
      '我很擅長英文，尤其是會話和閱讀。',
      '我很擅長數學，常常幫同學做功課。',
      '我很擅長音樂，在學校管弦樂團拉小提琴。'
    ],
    'word:proficient-in-skill-language': [
      '我精通英語和粵語。',
      '我精通編程，為班級造了一個簡單的問答遊戲。',
      '我精通試算表，這幫助我整理小組專題的數據。'
    ],
    'word:dedicated-athlete': [
      '我是個投入的運動員，每週訓練三次。',
      '作為投入的運動員，我會寫訓練日記，每場比賽前熱身。',
      '教練說我是投入的運動員，因為我從不缺席練習，連夏天也是。'
    ],
    'word:a-keen-sports-player': [
      '我是熱愛運動的球員，喜歡籃球和游泳。',
      '像我這樣的熱愛運動者，每週都會嘗試改進一個小技巧。',
      '我自三年級加入校隊起，就是熱愛運動的球員。'
    ],
    'word:team-player': [
      '我是個團隊球員，總會把球傳給位置更好的隊友。',
      '做團隊球員，就是即使坐在後備席也為隊友打氣。',
      '我們贏得班際比賽後，隊友選我為年度團隊球員。'
    ],
    'word:resilient-and-disciplined': [
      '我在訓練和學業上都堅毅而有紀律。',
      '連輸三場後，我仍然堅毅而有紀律，繼續每朝訓練。',
      '教練說我堅毅而有紀律，因為我跟從計劃、從不抱怨。'
    ],
    'word:demonstrated-leadership-as-team-captain': [
      '我作為學校籃球隊隊長，展現了領導能力。',
      '我作為隊長展現領導能力，負責計劃訓練並鼓勵年輕球員。',
      '教練不在時，我帶領熱身，展現了隊長的領導能力。'
    ],
    'word:sportsmanship': [
      '我有良好的體育精神，每場比賽後都會與對方握手。',
      '良好的體育精神，就是平靜接受失敗並從中學習。',
      '我在比賽中扶起跌倒的對手，老師稱讚我的體育精神。'
    ],
    'word:won-the-name-of-award': [
      '我去年贏得最佳進步獎。',
      '我在一學期讀完四十本書後，贏得班際閱讀獎。',
      '我因為籌辦學校慈善義賣，贏得傑出服務獎。'
    ],
    'word:recognized-for-outstanding-performance-in': [
      '我因數學的傑出表現而獲得嘉許。',
      '我們球隊進入決賽後，我因排球的傑出表現而獲得嘉許。',
      '我因戲劇的傑出表現而獲得嘉許，並在劇中擔任主角。'
    ],
    'word:awarded-a-scholarship-for-academic-excellence': [
      '我在六年級獲頒學術卓越獎學金。',
      '我連續三年成績穩定，因而獲頒學術卓越獎學金。',
      '學校頒我學術卓越獎學金，我用它來買書。'
    ],
    'word:champion-first-second-runner-up-in-the-competition-name': [
      '我在學校演講比賽中奪得冠軍。',
      '我們球隊在校際籃球賽中獲得亞軍。',
      '我在全區寫作比賽中獲得季軍。'
    ],
    'word:merit-award': [
      '我在朗誦節獲得優異獎。',
      '我因在美術比賽中的畫作而獲得優異獎。',
      '優異獎未必是第一名，但它讓我知道我的努力被看見。'
    ],
    'word:adaptable-and-versatile-an-all-rounder': [
      '我適應力強、多才多藝，能加入新群體並協助不同工作。',
      '作為一個全面的人，我同樣喜歡運動、音樂和閱讀。',
      '我的適應力足以讓我在領導小組與支持領袖之間切換。'
    ],
    'word:can-change-and-learn-new-things-easily': [
      '我很容易學會新事物，例如新應用程式或新運動。',
      '我容易改變和學會新事物，所以毫無困難地適應了網上課堂。',
      '我們組更改題目時，我很快學會新內容，並向所有人分享摘要。'
    ],
    'word:compassionate-and-empathetic': [
      '我有同理心、關懷別人，會察覺同學不開心。',
      '我足夠關懷別人，在午飯時陪一位新同學坐，並介紹他給我的朋友。',
      '有同理心幫助我在小組討論中理解雙方的立場。'
    ],
    'word:proactive-and-initiative-taking': [
      '我主動積極，會提早開始溫習，而不是等測驗。',
      '我在考試前主動成立讀書小組。',
      '老師說我主動積極，因為我自薦帶領班級清潔。'
    ],
    'word:detail-oriented': [
      '我注重細節，會檢查數學功課中每一個數字。',
      '注重細節讓我在小組海報印刷前發現了一個錯誤。',
      '我注重細節，所以筆記做得仔細、檔案整理整齊。'
    ],
    'word:creative-problem-solver': [
      '我是個有創意的問題解決者，第一個計劃失敗時會另尋方法。',
      '作為有創意的問題解決者，我用紙板和手機電筒完成了科學模型。',
      '我找到更便宜的方法製作展示架，老師稱我為有創意的問題解決者。'
    ],
    'word:well-rounded-individual': [
      '我是個全面發展的人，喜歡運動、音樂和服務。',
      '我嘗試在學業、籃球和義工之間取得平衡，做個全面發展的人。',
      '全面發展意味著我能談論很多話題，不只分數。'
    ],
    'word:manager': [
      '我爸爸是物流公司的經理。',
      '我將來想成為經理，因為我喜歡組織人手和計劃。',
      '好的經理會聆聽團隊，並作出公平的決定。'
    ],
    'word:engineer': [
      '我叔叔是設計橋樑的工程師。',
      '我想成為工程師，因為我喜歡建造和解決問題。',
      '工程師需要耐性，因為一個小錯可以影響很多人。'
    ],
    'word:clerk-office-worker': [
      '我媽媽在銀行做文職。',
      '文員負責記錄和協助客戶，需要細心組織。',
      '我姑姑是文員；她說良好的溝通是最重要的技能。'
    ],
    'word:accountant': [
      '我表哥在一間小公司做會計師。',
      '我對成為會計師有興趣，因為我喜歡數字和準確。',
      '會計師必須誠實、細心，因為每個數字都重要。'
    ],
    'word:lawyer': [
      '我鄰居是律師，幫人處理合約。',
      '我想成為律師，為有需要的人發聲。',
      '律師必須仔細閱讀，並把複雜的概念解釋清楚。'
    ],
    'word:doctor': [
      '我姑姑是公立醫院的醫生。',
      '我希望成為醫生，因為我想幫人康復。',
      '做醫生需要紮實的科學知識和溫和的態度。'
    ],
    'word:teacher': [
      '我媽媽是小學老師。',
      '我可能會成為老師，因為我喜歡向同學解釋事情。',
      '老師需要耐性，因為每個學生學習速度不同。'
    ],
    'word:nurse': [
      '我姐姐是護士，要輪夜班。',
      '我敬佩護士，因為病人憂慮時她們仍保持冷靜。',
      '我會考慮做護士；我喜歡照顧別人，也喜歡團隊工作。'
    ],
    'word:businessman': [
      '我爸爸是經營小型貿易公司的商人。',
      '我想成為商人，因為我喜歡了解顧客需要什麼。',
      '商人必須誠實；信任比快速獲利更重要。'
    ],
    'word:civil-servant': [
      '我叔叔是房屋署的公務員。',
      '我想成為公務員，為市民服務。',
      '公務員必須負責任，並對所有人公平。'
    ],
    'word:sales-consultant': [
      '我表哥在家具店做銷售顧問。',
      '銷售顧問要先聆聽，再推薦合適的產品。',
      '我可以做銷售顧問，因為我喜歡認識新朋友。'
    ],
    'word:it-consultant': [
      '我哥哥是 IT 顧問，幫公司處理系統問題。',
      '我對成為 IT 顧問有興趣，因為我喜歡編程和解決問題。',
      'IT 顧問必須持續學習，因為科技每年都在變。'
    ],
    'word:police-officer': [
      '我鄰居是我們這區的警察。',
      '我尊敬警察，因為他們日日夜夜保護社區。',
      '做警察需要勇氣、誠實和強烈的責任感。'
    ],
    'word:fiction': [
      '我最喜歡的類型是小說，尤其是關於友情的故事。',
      '我剛讀完一本小說，講一個男孩環遊世界航行。',
      '我推薦小說，因為它讓你花幾小時過另一種人生。'
    ],
    'word:non-fiction': [
      '我喜歡關於科學和歷史的非小說類書籍。',
      '我上個月讀了一本關於氣候變化的非小說類書籍。',
      '我推薦非小說，因為你學到的都是真實而有用的。'
    ],
    'word:biography': [
      '我喜歡讀努力過的人的傳記。',
      '我讀完一位發明救命儀器的科學家的傳記。',
      '傳記展示真實的人如何面對失敗，很鼓舞人心。'
    ],
    'word:fantasy': [
      '我喜歡奇幻，因為它帶我進入魔法世界。',
      '我正在讀一本關於龍和年輕製圖師的奇幻小說。',
      '我推薦奇幻給想暫時逃離壓力的同學。'
    ],
    'word:adventure': [
      '我喜歡充滿旅行和危險的冒險故事。',
      '上週我讀了一本關於山難救援的冒險書。',
      '我推薦冒險故事，因為它教會人勇氣和機智。'
    ]
  };

  var bank = W.DEMO_BANK || {};
  Object.keys(Z).forEach(function (k) {
    var g = bank[k];
    if (!g) return;
    g.demos.forEach(function (d, i) {
      if (Z[k][i]) d.zh = Z[k][i];
    });
  });
})(window);


/* d10：練習題目的三種示範答案（14 題，對應抽題庫、意見題、辯論題）。
   每題 3 個版本：精簡版 / 標準版 / 進階版；彈窗沿用 DEMO_BANK。 */
(function (W) {
  var bank = W.DEMO_BANK = W.DEMO_BANK || {};
  W.Q_DEMO = {};

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  var Q = [
    ['What is your idea of a good classmate?', [
      ['A good classmate is kind and helpful, and I try to be one myself.',
       '我認為好同學是善良、樂於助人的，我也努力做這樣的人。'],
      ['To me, a good classmate is someone who is kind, honest and willing to share. I appreciate classmates who explain a difficult question patiently, and I try to do the same for others.',
       '對我來說，好同學是善良、誠實、樂於分享的人。我很欣賞那些耐心解釋難題的同學，我也努力同樣對待別人。'],
      ['To me, a good classmate is not simply someone who gets high marks. A good classmate is kind when it is inconvenient, honest when honesty is costly, and generous with what they understand — the sort of person who explains a difficult question patiently rather than showing off the answer. I try to be that person, because a class is only as strong as the way its members treat one another.',
       '對我來說，好同學不只是成績好的人。好同學會在不方便的時候仍然友善，在誠實要付出代價時仍然誠實，也樂於把自己明白的教給別人——是那種耐心解釋難題，而不是炫耀答案的人。我努力做這樣的人，因為一個班有多強，取決於班裡的人怎樣對待彼此。']
    ]],
    ['What is your opinion on junk food?', [
      ['I think junk food is fine once in a while, but not every day.',
       '我認為垃圾食物偶爾吃沒問題，但不應天天吃。'],
      ['In my opinion, junk food is enjoyable but should be eaten only occasionally. It tastes good and is convenient, yet it contains too much sugar and salt, so I keep it for special occasions.',
       '我認為垃圾食物好吃，但只應偶爾吃。它味道好又方便，但糖和鹽太多，所以我只在特別場合才吃。'],
      ['I think junk food is a treat, not a habit. It is convenient and enjoyable, and there is nothing wrong with sharing a bag of crisps after a match; the problem begins when it replaces real food. Too much sugar and salt affects concentration as well as health, so I limit it to special occasions and make sure my everyday meals are proper ones.',
       '我認為垃圾食物是獎勵，不是習慣。它方便又好吃，比賽後一起吃一包薯片並無不可；問題在於它取代了正餐。糖和鹽太多，既影響健康也影響專注力，所以我只限在特別場合吃，並確保日常三餐是正經的一餐。']
    ]],
    ["Talk about 'bananas' for one minute.", [
      ['Bananas are cheap, sweet and easy to carry, which is why I eat one most days.',
       '香蕉便宜、香甜、容易攜帶，所以我大多數日子都會吃一隻。'],
      ['Bananas are one of the most convenient fruits. They come in their own packaging, they are cheap, and they give you energy quickly, which is why I take one to school on training days.',
       '香蕉是最方便的水果之一。它自備「包裝」、價錢便宜，又能快速提供能量，所以我在練習日會帶一隻回學校。'],
      ['Bananas deserve more credit than they usually get. They come in their own wrapping, cost very little, and release energy steadily, which makes them ideal before a basketball practice. They also travel well — mine survive a school bag better than any other fruit — and they are sweet enough to feel like a treat without being one. For a student in a hurry, that is hard to beat.',
       '香蕉值得比平時得到更多欣賞。它自備外皮、價錢便宜，又能穩定釋放能量，非常適合籃球練習前吃。它也耐放——我的香蕉在書包裡比其他水果都撐得住——而且甜得像是獎勵，卻不算零食。對趕時間的學生來說，很難找到更好的選擇。']
    ]],
    ['If your father were made redundant, how would you help him?', [
      ['I would help my father by staying positive and spending less.',
       '我會保持正面，並減少花費，以此幫助爸爸。'],
      ['If my father were made redundant, I would help by being patient at home and by spending less on things I do not need. I would also encourage him, because losing a job is hard on one\'s confidence.',
       '如果爸爸被裁員，我會在家裡保持耐性，並減少買不需要的東西。我也會鼓勵他，因為失業對一個人的自信心打擊很大。'],
      ['If my father were made redundant, I would not pretend it was nothing, but I would try to make home a calmer place. I would cut back on anything I do not truly need, help more with chores so that he has time to rest and search, and remind him of what he is good at — because losing a job damages confidence long before it damages a bank account.',
       '如果爸爸被裁員，我不會假裝什麼事都沒有，但我會努力讓家成為一個更平靜的地方。我會削減一切非必要的開支，多做家務，讓他有時間休息和找工作，並且提醒他擅長什麼——因為失業打擊自信，往往比打擊銀行戶口更早。']
    ]],
    ['Should students be required to wear school uniforms?', [
      ['I think students should wear school uniforms because they save time and reduce pressure.',
       '我認為學生應穿校服，因為校服省時，也減少壓力。'],
      ['I believe students should be required to wear school uniforms. They save time in the morning, they cost less than a full wardrobe of fashion, and they make everyone look equal regardless of family income.',
       '我認為學生應該穿校服。校服省下早上的時間，比一整套時裝便宜，也讓所有人不論家庭收入都看起來平等。'],
      ['I believe school uniforms are worth keeping. They remove a daily decision and a daily competition at once: nobody has to choose an outfit, and nobody is judged on one. They are also cheaper than a fashion wardrobe, and they make a school feel like a community rather than a collection of individuals. My only reservation is comfort, which schools can improve through better fabric rather than abandoning the uniform altogether.',
       '我認為校服值得保留。它同時消除了每日的選擇和每日的比較：沒有人要為穿什麼煩惱，也沒有人因穿著被評價。校服也比時裝便宜，讓學校像一個社群，而不是一群各自為政的人。我唯一的保留是舒適度，學校可以改善布料，而不必乾脆取消校服。']
    ]],
    ['Should Artificial Intelligence (AI) be integrated into school teaching?', [
      ['I think AI should be used in school, but as a helper, not a replacement for teachers.',
       '我認為學校可以使用 AI，但它是助手，不是老師的替代品。'],
      ['I believe AI should be integrated into teaching, but carefully. It can explain a concept again at midnight, mark routine exercises and free teachers for real discussion, yet it cannot notice that a student is discouraged.',
       '我認為 AI 應該融入教學，但要謹慎。它可以在深夜再解釋一次概念、批改例行練習，讓老師有時間真正討論；但它察覺不到一個學生已經灰心。'],
      ['I would welcome AI in the classroom, provided it is positioned as a tool rather than a teacher. It can do what humans do badly: repeat an explanation patiently at eleven at night, mark a hundred routine exercises without fatigue, and adapt practice to each student\'s pace. What it cannot do is notice that a student has gone quiet, or decide what a class most needs to hear. Used well, AI gives teachers more time for exactly that.',
       '我歡迎 AI 進入課堂，前提是它是工具，而不是老師。它能做人類做得不好的事：在晚上十一點仍有耐性地重複解釋、不疲倦地批改一百份例行練習、按每個學生的進度調整練習。但它做不到的，是察覺一個學生靜了下來，或判斷一班人最需要聽什麼。用得好，AI 正好為老師騰出時間做這些。']
    ]],
    ['If schools allowed students to drop one subject, which one would it be?', [
      ['I would not drop any subject, but if I had to choose, I would drop the one that builds the fewest core skills.',
       '我不會放棄任何科目；但如果一定要選，我會選最不能建立核心能力的一科。'],
      ['If schools allowed students to drop one subject, I would choose whichever subject they find least useful for their future — but I would keep the core ones. Personally, I would rather drop nothing.',
       '如果學校容許學生放棄一科，我會選對自己將來最沒有用的一科——但核心科目一定保留。就我個人而言，我寧願一科也不放棄。'],
      ['If schools allowed students to drop a subject, I would be cautious about it. The subject I found hardest has often taught me the most, and a thirteen-year-old is not the best judge of what will matter at twenty-three. If something must go, I would drop a subject that builds neither language, number nor thinking — but I would keep a balance, because breadth now buys choices later.',
       '如果學校容許放棄一科，我會很謹慎。最難的那一科，往往教會我最多；而十三歲的人，並不是判斷什麼在二十三歲有用時的最佳人選。如果一定要放棄，我會選一科既不建立語文、數字也不建立思考的科目——但我會保持平衡，因為今天的廣度，買的是將來的選擇。']
    ]],
    ['Do you think Hong Kong should control its air pollution?', [
      ['Yes, Hong Kong should control air pollution because it affects everyone\'s health.',
       '是的，香港應該控制空氣污染，因為它影響每個人的健康。'],
      ['Yes, I think Hong Kong should control air pollution. Bad air harms children\'s health and makes our city less attractive, and cleaner air would benefit everyone.',
       '是的，我認為香港應該控制空氣污染。空氣差損害兒童健康，也令城市失去吸引力，而更清潔的空氣對所有人都有好處。'],
      ['Yes, and the case is not really political but medical. Poor air quality damages children\'s lungs before they can complain about it, and it also makes Hong Kong harder to sell to visitors and businesses. Controls may cost money in the short term, but the cost of doing nothing — in health, in productivity and in reputation — is higher and keeps rising.',
       '是的，而且這不只是政治問題，而是醫學問題。空氣差會在兒童懂得投訴之前就已損害他們的肺，也令香港更難吸引旅客和企業。控制措施短期要花錢，但什麼都不做的代價——在健康、生產力和聲譽上——更高，而且不斷上升。']
    ]],
    ['Do you think Hong Kong children should do more exercise?', [
      ['Yes, Hong Kong children should do more exercise because it keeps them healthy and helps them think.',
       '是的，香港兒童應該多做運動，因為運動保持健康，也幫助思考。'],
      ['Yes, I agree that Hong Kong children should exercise more. Many of us sit for most of the day, and regular sport improves both health and concentration.',
       '是的，我同意香港兒童應該多做運動。我們很多人一天大部分時間都坐著，而定期運動既能改善健康，也能提升專注力。'],
      ['Yes, and I would put it more strongly than "should". Hong Kong children spend most of the day seated, first in lessons and then in front of screens, and no amount of homework compensates for that. Regular exercise protects health, improves concentration and teaches the habit of pushing through discomfort — which is, incidentally, the same habit examinations require.',
       '是的，我會比「應該」說得更強。香港兒童一天大部分時間都坐著，先在課堂，然後在屏幕前，再多的功課也補償不了。定期運動保護健康、提升專注，也教會人撐過不舒服的習慣——順帶一提，這正是考試所需要的同一種習慣。']
    ]],
    ['Why do you want to attend our school?', [
      ['I want to attend your school because of its strong teachers and its caring community.',
       '我想入讀貴校，因為貴校有優秀的老師和關懷的社群。'],
      ['I want to attend your school because I was impressed by both its teachers and its students. I hope to study in a place where effort is valued and where I can grow with people who are kind to one another.',
       '我想入讀貴校，因為老師和同學都令我印象深刻。我希望在一個重視努力的地方讀書，並與彼此友善的人一起成長。'],
      ['I want to attend your school for two reasons that have little to do with its reputation. First, when I visited, the teachers spoke about their students with obvious care, and the students spoke about their school with pride — that combination is rarer than good results. Second, your school seems to expect students to contribute, not merely to succeed, and I would like to be educated somewhere that treats those two things as one.',
       '我想入讀貴校，原因有兩個，都與名聲關係不大。第一，我參觀時，老師談到學生時明顯很關心，學生談到學校時很有自豪感——這種組合比好成績更罕見。第二，貴校似乎期望學生有所貢獻，而不只是成功；我希望在一所把這兩件事視為同一件事的學校受教育。']
    ]],
    ['Please introduce a book that you have read.', [
      ['I would like to introduce Science Discovery, a non-fiction book about famous inventions.',
       '我想介紹《Science Discovery》，這是一本關於著名發明的非小說類書籍。'],
      ['I would like to introduce Science Discovery, a non-fiction book about the great scientific inventions of the twentieth century and the people who made them.',
       '我想介紹《Science Discovery》，這是一本關於二十世紀偉大科學發明，以及創造它們的人的非小說類書籍。'],
      ['I would like to introduce Science Discovery, a non-fiction book that traces the great inventions of the twentieth century through the lives of the people who made them. It is cleverly written: a kettle, a bridge and a light bulb become stories about patience and failure, not just facts to memorise. It changed how I read — I now ask where an idea came from, not only what it is.',
       '我想介紹《Science Discovery》，這本非小說類書籍透過發明者的生平，追溯二十世紀的偉大發明。它寫得巧妙：水煲、橋樑和燈泡都變成關於耐性和失敗的故事，而不只是要背的事實。它改變了我閱讀的方式——現在我會問一個想法從何而來，而不只是它是什麼。']
    ]],
    ['What do you want to be in the future?', [
      ['I want to be a doctor because I want to help people stay healthy.',
       '我想做醫生，因為我想幫助別人保持健康。'],
      ['When I grow up, I would like to be a doctor. I am interested in science, and I would like a job where knowledge is used to help people directly.',
       '長大後，我想做醫生。我對科學有興趣，也希望從事一份直接把知識用來幫助別人的工作。'],
      ['When I grow up, I hope to become a doctor, though I am aware of what that demands. Medicine appeals to me because it joins two things I value — science that must be exact, and care that must be human. I am particularly interested in medical research, where one careful finding can help people I will never meet.',
       '長大後，我希望成為醫生，雖然我知道這需要什麼。醫學吸引我，因為它結合了我重視的兩件事——必須精確的科學，以及必須以人為本的關懷。我尤其對醫學研究有興趣，因為一個謹慎的發現，可以幫助我永遠不會遇見的人。']
    ]],
    ['Which festival do you like most, and why?', [
      ['My favourite festival is Lunar New Year because my whole family gets together.',
       '我最喜歡農曆新年，因為全家人會聚在一起。'],
      ['My favourite festival is the Lunar New Year. My family gathers for a big meal, and I enjoy hearing my grandparents\' stories and seeing my cousins again.',
       '我最喜歡農曆新年。一家人聚在一起吃大餐，我喜歡聽祖父母講故事，也喜歡再見到表兄弟姐妹。'],
      ['My favourite festival is the Lunar New Year, though not for the red packets. What I value is how the city slows down: my family cooks together for an afternoon, my grandparents repeat stories I have heard before and will want to hear again, and for a few days nobody is in a hurry. A festival, I think, is a formal excuse for the things we would otherwise postpone.',
       '我最喜歡農曆新年，不過不是為了紅包。我珍惜的是整個城市慢下來：一家人一起煮一個下午的飯，祖父母重複我聽過、而將來仍想再聽的故事，那幾天沒有人趕時間。我認為，節日就是給那些我們本來會一再拖延的事情，一個正式的藉口。']
    ]],
    ['How do you plan to commute to our school every day?', [
      ['I would come to school by bus, and the journey takes about twenty minutes.',
       '我會乘巴士上學，車程大約二十分鐘。'],
      ['I plan to come to school by bus every day; the journey takes about twenty minutes. If the bus is full, I can also take the MTR.',
       '我計劃每天乘巴士上學，車程約二十分鐘。如果巴士太滿，我也可以改乘港鐵。'],
      ['I plan to travel by bus, which takes about twenty-five minutes door to door, with the MTR as a fallback when traffic is heavy. I would leave half an hour early rather than cut it fine, because arriving flustered is a poor way to begin an interview or a lesson. I have checked the route already, so the first week will not be a guessing game.',
       '我計劃乘巴士，點對點約二十五分鐘；交通繁忙時會改乘港鐵作後備。我會提早半小時出門，而不是剛剛趕上，因為慌慌張張地到達，是開始面試或上課的差勁方式。我已經查過路線，所以第一週不會是場猜謎遊戲。']
    ]]
  ];

  var LABELS = ['精簡版', '標準版', '進階版'];
  Q.forEach(function (item) {
    var q = item[0];
    var key = 'q:' + slug(q);
    bank[key] = {
      title: '示範：' + q,
      demos: item[1].map(function (pair, i) {
        return { label: LABELS[i] || ('示範 ' + (i + 1)), html: pair[0], say: pair[0], zh: pair[1] };
      })
    };
    W.Q_DEMO[slug(q)] = key;
  });
})(window);


/* d11：閱讀理解（P.18）九道題的「提示 / 參考答案 / 換句話說」。
   英文題：modelEn + modelZh；中文題：model。alts 每項可為 {en, zh} 或 {zh}。 */
(function (W) {
  W.Q_INFO = [
    /* ---------------- 現代文：我愛樹 ---------------- */
    {
      q: '作者每當心情煩惱時，就走進樹林間。你在心情煩惱時，會走到哪裡？做什麼？',
      hint: '先講「去哪裡」，再講「做什麼」，最後講「為甚麼有效」。三個步驟各一句，答案自然有條理。',
      model: '我心情煩惱時，通常會走到海邊，沿著海旁慢慢走，聽海浪的聲音。走著走著，心裡的煩躁會慢慢沉下來，然後我才能靜下來想清楚問題。',
      alts: [
        { zh: '每當我感到煩惱，我會走到樓下的公園，坐在長椅上看著人來人往，甚麼也不想，等心情平復了才回家。' },
        { zh: '我煩惱的時候會躲進房間寫日記，把不開心的事全部寫出來。寫完之後，事情好像就沒有那麼大了。' },
        { zh: '我會去游泳池游幾個塘。水裡很安靜，只聽到自己的呼吸，游完之後整個人會鬆一口氣。' }
      ]
    },
    {
      q: '文中第二段作者提到「塵慮全消」，試猜想作者所指的「塵慮」是指什麼。',
      hint: '看「釋然無慮，塵慮全消」之後那一句——「才能任意沉思，而在沉思中，才能檢討自己」。能妨礙沉思和自省的，就是「塵慮」。',
      model: '「塵慮」是指世俗的煩惱和雜念，例如功課與成績的壓力、人際關係的困擾、對得失的計較。作者走進樹林，就是暫時放下這些牽掛，讓心靜下來。',
      alts: [
        { zh: '「塵慮」就是日常生活中擾亂心神的瑣事與掛慮：未做完的功課、和同學的摩擦、對名次的擔心。' },
        { zh: '我認為「塵慮」指城市生活帶來的疲累與計較，是那些令人無法安靜思考的事情。' },
        { zh: '「塵」指俗世，「慮」指憂慮，合起來就是世俗的憂慮，包括學業、金錢和別人對自己的看法。' }
      ]
    },
    {
      q: '作者在第三段見到風吹樹蔭，聯想到「萬馬奔騰」、「天在旋轉」、「萬物在狂舞」的愉快境界。當風吹著你的時候，你會有甚麼聯想呢？請分享。',
      hint: '不要重複作者的「萬馬奔騰」。說一個你自己真實的畫面：可以是聲音、運動、氣味或一個人物。先講風，再講你想到的畫面，最後講感受。',
      model: '當風吹著我，我會想到運動場上的歡呼聲。風迎面吹來，就像比賽開始前吸的那一口氣，令我覺得整個人醒了過來，很想立刻跑出去。',
      alts: [
        { zh: '風吹來的時候，我會想到海上的帆船。帆被風撐得鼓鼓的，船身微微傾斜，那種向前衝的感覺令我很想大叫。' },
        { zh: '我會想到秋天落葉在空中打轉，像一群人在跳舞。雖然有點涼，但心裡反而覺得很熱鬧。' },
        { zh: '我會想到媽媽晾衣服時，床單在風中啪啦啪啦地響。那是放學回家、聞到飯香之前的聲音，令我覺得安心。' }
      ]
    },
    {
      q: '文中第四段提到的「冬神」意旨甚麼？',
      hint: '這是一種「擬人」寫法：把冬天當成一個人來寫。想一想，冬天最嚴酷的是甚麼？樹又要面對甚麼？',
      model: '「冬神」是把冬天擬人化，代表寒冷、嚴酷和逆境。樹要與冬神搏鬥，就是說它要在最艱難的季節裡堅持下去，不讓自己枯死。',
      alts: [
        { zh: '「冬神」象徵嚴寒的考驗。作者不說「過冬」，而說「與冬神搏鬥」，令冬天像一個對手，樹就顯得有意志。' },
        { zh: '我認為「冬神」指大自然最無情的力量：低溫、乾旱和落葉。樹把芽苗包好，就是準備和它打一場仗。' },
        { zh: '「冬神」是作者想像出來的冬天之神，代表一切令人退縮的困難；與它搏鬥，就是不放棄。' }
      ]
    },
    {
      q: '你認為作者從樹身上學到了什麼人生態度？',
      hint: '抓住兩個對比：落葉之後「不憔悴消瘦」，反而「更顯得崇高雅潔」；以及「芽苗緊緊包藏」、「立意要與冬神搏鬥」。',
      model: '我認為作者學到的是堅韌。樹在秋天失去葉子，卻不因此而憔悴，反而更顯崇高雅潔；它把芽苗緊緊包好，準備與寒冬搏鬥。人生也一樣，遇到打擊不必消沉，可以在逆境中儲備力量，等春天再長出來。',
      alts: [
        { zh: '樹教會我接受失去。葉子掉了就掉了，不必假裝沒有失去；但樹沒有因此停下來，它把養分留給芽，等下一次生長。' },
        { zh: '我學到的是沉著：不張揚、不抱怨，在沒有人看見的時候默默準備。' },
        { zh: '作者學到的是「不以一時得失判斷自己」。落葉不是失敗，過冬也不是終點，只要根還在，就有下一個春天。' }
      ]
    },

    /* ---------------- English: The Goose With the Golden Eggs ---------------- */
    {
      q: 'Why did the countryman first think it was a trick played upon him?',
      hint: '留意兩個線索："all yellow and glittering"（金黃閃亮）和 "as heavy as lead"（重得像鉛）。先講他看見甚麼，再講他為甚麼誤會。',
      modelEn: 'Because the egg was all yellow and glittering, and it was as heavy as lead. He had never seen a goose egg like that, so he thought someone had played a trick on him.',
      modelZh: '因為那隻蛋金黃閃亮，而且重得像鉛。他從未見過這樣的鵝蛋，所以以為有人捉弄他。',
      alts: [
        { en: 'He thought it was a trick because the egg looked strange — golden, glittering and far too heavy for a goose egg.',
          zh: '他以為是捉弄，因為那隻蛋很奇怪——金黃閃亮，對鵝蛋來說又重得不合理。' },
        { en: 'The egg seemed too good to be true: it shone like gold and weighed like lead, so he suspected a trick.',
          zh: '那隻蛋好得令人難以置信：亮得像金，重得像鉛，所以他懷疑是騙局。' },
        { en: 'He had never seen an egg that colour or that weight, so his first thought was that someone was making fun of him.',
          zh: '他從未見過那種顏色、那種重量的蛋，所以第一個念頭就是有人在戲弄他。' }
      ]
    },
    {
      q: "What did the Goose's egg look like?",
      hint: '用文中的形容詞作答：顏色（yellow, glittering）＋重量（as heavy as lead）。一句話就夠，記得用完整句子。',
      modelEn: 'It was all yellow and glittering, and it was as heavy as lead — in fact, it was an egg of pure gold.',
      modelZh: '它金黃閃亮，重得像鉛——事實上，那是一隻純金的蛋。',
      alts: [
        { en: 'It looked like a lump of gold: bright, glittering and much heavier than an ordinary egg.',
          zh: '它看起來像一塊金：明亮、閃爍，而且比普通蛋重得多。' },
        { en: 'The egg was golden and shiny, and it felt as heavy as a piece of lead in his hand.',
          zh: '那隻蛋金黃有光澤，拿在手上重得像一塊鉛。' },
        { en: 'It was yellow, glittering and unusually heavy, which is why he could not believe it was a real egg.',
          zh: '它黃得發亮，又異常地重，所以他不相信那是一只真的蛋。' }
      ]
    },
    {
      q: 'What does the story tell us?',
      hint: '看結局：他想要一次得到所有金子，殺了鵝，打開卻「only to find nothing」。先把結局講出來，再講道理（貪心）。',
      modelEn: 'The story tells us that greed destroys what we already have. The countryman wanted all the gold at once, so he killed the Goose — and in the end he found nothing.',
      modelZh: '這個故事告訴我們，貪心會毀掉我們已經擁有的東西。鄉下人想一次得到所有金子，於是殺了鵝，最後卻一無所有。',
      alts: [
        { en: 'It warns us that greed makes people act foolishly and lose more than they gain.',
          zh: '它警告我們，貪心會令人做出愚蠢的事，失去的比得到的更多。' },
        { en: 'It teaches us to be content with what comes steadily, instead of destroying the source of our fortune.',
          zh: '它教我們要滿足於穩定而來的東西，而不是毀掉財富的來源。' },
        { en: 'The moral is simple: do not risk a certain good for an uncertain fortune.',
          zh: '教訓很簡單：不要為不確定的財富，賭上已經握在手裡的幸福。' }
      ]
    },
    {
      q: 'If you were the countryman, what would you do with the egg?',
      hint: '用 "If I were..., I would..." 的假設句式。答案要有兩個動作：保存金蛋／留住鵝，以及怎樣用那些金。',
      modelEn: 'If I were the countryman, I would keep the Goose and collect one egg every morning. I would save part of the gold and be patient, because a steady supply is worth far more than one greedy gamble.',
      modelZh: '如果我是那個鄉下人，我會留下那隻鵝，每天早上收一隻蛋。我會把部分金子儲起來，耐心等待，因為穩定的來源遠比一次貪心的賭博有價值。',
      alts: [
        { en: 'I would look after the Goose carefully and never kill it, since it was giving me gold every day.',
          zh: '我會好好照顧那隻鵝，絕不會殺它，因為它每天都為我帶來金子。' },
        { en: 'I would sell the eggs gradually and use the money to improve my farm, rather than risk everything for one fortune.',
          zh: '我會逐步賣蛋，用那些錢改善農場，而不是為了一次過發財而賭上一切。' },
        { en: 'I would tell no one about the Goose, keep it safe, and treat the gold as savings rather than spending money.',
          zh: '我不會告訴任何人關於那隻鵝的事，會好好保護它，並把金子當作儲蓄而不是零用錢。' }
      ]
    }
  ];
})(window);


/* d12：四天課程日程（2026-2027 荃灣官立小學升中面試訓練班）
   依原日程表：26/11、27/11、30/11、1/12；pages 指向現有 section id，排序仍依 PDF。 */
window.COURSE_DAYS = [
  {
    id: 'day1', tab: 'Day 1', date: '26/11（四）',
    en: 'Group Discussion', zh: '小組討論',
    summary: '20 分鐘介紹，然後 3 組 × 23 分鐘；每組 8 人，每人約 3 分鐘分享。',
    detail: [
      '小組討論介紹（20 分鐘）',
      '全班 24 人分 3 組，每組 8 人',
      '每組討論約 23 分鐘，每人約 3 分鐘分享',
      '其餘兩組做觀察員，結束後給予評語'
    ],
    pages: ['P11', 'P12', 'P13', 'P14', 'P15', 'P16'],
    preset: 1380, presetLabel: '23:00'
  },
  {
    id: 'day2', tab: 'Day 2', date: '27/11（五）',
    en: 'Summary + Core + Impromptu', zh: '討論總結＋核心問題＋即席說話',
    summary: '先做 15 分鐘討論總結，再逐題練核心問題，最後以書內題目練即席說話。',
    detail: [
      '小組討論總結（15 分鐘）',
      '核心問題：每講完一題，即邀學生個人表達並即時回饋',
      '即席說話：用書內 common interview questions 或中文題目，以英語或粵語作答',
      '重點：增加互動、多鼓勵、加強表達自信'
    ],
    pages: ['P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10', 'P16'],
    preset: 30, presetLabel: '30 秒'
  },
  {
    id: 'day3', tab: 'Day 3', date: '30/11（一）',
    en: 'Core + Impromptu (Practice)', zh: '核心問題＋即席說話（深化）',
    summary: '以抽題庫反覆輪替，練反應與結構；重點不在背稿。',
    detail: [
      '核心問題快速輪替，每人一題',
      '即席說話：30 秒準備、1 分鐘作答',
      '同儕互評：內容、結構、語氣',
      '老師即時示範與回饋'
    ],
    pages: ['P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10'],
    preset: 30, presetLabel: '30 秒'
  },
  {
    id: 'day4', tab: 'Day 4', date: '1/12（二）',
    en: 'Reading + Reciting + Etiquette', zh: '閱讀理解＋朗讀＋面試禮儀',
    summary: '閱讀理解實戰、朗讀聲情並茂，最後以面試禮儀與總結收尾。',
    detail: [
      '閱讀理解：限時閱讀、口頭作答、提示與示範',
      '朗讀技巧：停頓、強調、聲情並茂',
      '面試禮儀：進場、坐姿、眼神、離場',
      '總結與答問'
    ],
    pages: ['P17', 'P18', 'P19', 'P20', 'P21', 'P22', 'P23', 'P24', 'P25', 'P26', 'P27'],
    preset: 60, presetLabel: '60 秒'
  }
];
