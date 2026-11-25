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
