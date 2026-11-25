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
window.AUDIO_MANIFEST = [];
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
