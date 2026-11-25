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
