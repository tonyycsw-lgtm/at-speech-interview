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
