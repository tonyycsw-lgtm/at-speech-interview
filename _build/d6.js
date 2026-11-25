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
