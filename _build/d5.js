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
