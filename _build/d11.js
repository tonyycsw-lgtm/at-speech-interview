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
