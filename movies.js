// 電影資料唯一來源。新增或修改欄位請先閱讀 AGENTS.md。
// 恐怖指標為本站編輯性描述（非爛番茄評分或使用者本人評分）。
// rt 為來源網站在 checked 日期查詢的快照，更新時須人工核對且記錄日期。
window.MOVIES = [
  {
    id: 'house-of-wax-2005', rt: { critics: 27, audience: 44, url: 'https://www.rottentomatoes.com/m/house_of_wax_2005', checked: '2026-11-12' }, director: 'Jaume Collet-Serra', runtime: '107 分鐘', title: '恐怖蠟像館', originalTitle: 'House of Wax', year: 2005,
    genre: ['生存恐怖', '殺人驚悚'], category: '生存驚悚', image: 'assets/wax.webp',
    tagline: '最完美的展品，也許還活著。',
    synopsis: '六名年輕朋友開車前往外地觀看美式足球賽，途中因車輛故障而被迫尋求協助。他們走進一座看似寧靜、卻異常空蕩的小鎮，鎮上最醒目的建築是一間精緻得不尋常的蠟像館。隨著同伴接連失蹤，眾人逐漸察覺那些栩栩如生的蠟像背後，可能藏著比想像中更可怕的真相。',
    setting: '偏僻小鎮、蠟像館', fear: '被追捕、身體遭到物化的恐懼',
    highlights: ['小鎮從平靜到失控的逐步轉變', '蠟像工藝帶來的不真實感與不安', '明確的逃生目標與連續追逐戲'],
    themes: ['孤立', '生存', '蠟像'], metrics: {scare: 4, gore: 4, pressure: 3, pace: 4},
    sourceLabel: 'Apple TV 電影資料', sourceUrl: 'https://tv.apple.com/tw/movie/%E6%81%90%E6%80%96%E8%A0%9F%E5%83%8F%E9%A4%A8/umc.cmc.209m5mzfewnb2l31plq6lpd2s'
  },
  {
    id: 'the-invisible-man-2020', rt: { critics: 91, audience: 88, url: 'https://www.rottentomatoes.com/m/the_invisible_man_2020', checked: '2026-11-12' }, director: 'Leigh Whannell', runtime: '124 分鐘', title: '隱形人', originalTitle: 'The Invisible Man', year: 2020,
    genre: ['心理驚悚', '科幻恐怖'], category: '心理驚悚', image: 'assets/invisible.webp',
    tagline: '最可怕的，是沒有人相信你。',
    synopsis: '西西莉亞好不容易逃離具有強烈控制慾的伴侶，試著在親友支持下重建生活。當她得知對方已經死亡，原以為噩夢終於結束，家中卻開始出現種種無法解釋的異常。她懷疑有人正以看不見的方式接近自己，但越努力尋求證明，身邊的人反而越質疑她的精神狀態。她必須在恐懼與孤立之中找出真相。',
    setting: '現代住宅、日常生活空間', fear: '無形監視、操控與不被相信',
    highlights: ['利用空蕩畫面讓觀眾自行尋找威脅', '把控制關係轉化為具體的驚悚經驗', '從猜疑延伸到對現實感的動搖'],
    themes: ['監視', '控制', '信任'], metrics: {scare: 4, gore: 2, pressure: 5, pace: 4},
    sourceLabel: '環球影業電影資料', sourceUrl: 'https://www.universalpictures.com/movies/the-invisible-man'
  },
  {
    id: 'obsession-2026', rt: { critics: 93, audience: 94, url: 'https://www.rottentomatoes.com/m/obsession_2025', checked: '2026-11-12' }, director: 'Curry Barker', runtime: '108 分鐘', title: '愛你致死不渝', originalTitle: 'Obsession', year: 2026,
    genre: ['超自然恐怖', '愛情驚悚'], category: '愛情驚悚', image: 'assets/obsession.webp',
    tagline: '當愛成了命令，就不再是愛。',
    synopsis: '一名長期暗戀朋友的男子，渴望讓對方也對自己產生同樣的感情。他藉助一件神祕物品許下願望，起初似乎真的得到了夢寐以求的回應。然而，對方的情感逐漸朝難以控制的方向發展，原本美好的幻想變成令人窒息的關係。他開始意識到，強求而來的愛情可能帶來遠比失戀更難承受的後果。',
    setting: '看似平凡的人際與戀愛關係', fear: '執念、佔有與無法撤回的願望',
    highlights: ['把「暗戀成真」翻轉成恐怖命題', '甜蜜與威脅同時出現的反差', '以超自然設定探討感情中的控制'],
    themes: ['執念', '佔有', '願望'], metrics: {scare: 3, gore: 3, pressure: 4, pace: 3},
    sourceLabel: '金馬影展電影資料', sourceUrl: 'https://www.goldenhorse.org.tw/film/programme/films/detail/4370?search_category=FFF&search_year=2026'
  }
];
