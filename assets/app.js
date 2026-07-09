const site = {
  eventDate: "2026年4月予定",
  place: "JAIST キャンパス内 特設エリア",
  address: "石川県能美市旭台1-1",
  contactEmail: "sakura@example.jp",
  links: {
    gajumaru: "https://example.com/gajumaru",
    jaist: "https://www.jaist.ac.jp/",
    momiji: "https://example.com/momiji",
    instagram: "https://example.com/sns",
  },
};

// Placeholder data. Replace these objects after each department confirms official information.
const projects = [
  {
    title: "春の屋台ストリート",
    description: "学生団体による軽食とドリンクの屋台エリアです。",
    time: "11:00から15:30",
    place: "中央広場",
    category: "Food",
    audience: "友人同士、家族連れ",
    recommend: "短い時間でも祭りの雰囲気を楽しめます。",
  },
  {
    title: "研究室オープン企画",
    description: "研究内容を学生がわかりやすく紹介します。",
    time: "12:30から14:30",
    place: "講義棟 1F",
    category: "Campus",
    audience: "初めてJAISTに来る方",
    recommend: "キャンパスらしさを感じられる企画です。",
  },
  {
    title: "SAKURAステージ",
    description: "音楽、パフォーマンス、サークル発表を行います。",
    time: "13:00から16:00",
    place: "特設ステージ",
    category: "Stage",
    audience: "ライブ感を楽しみたい方",
    recommend: "会場の一体感が伝わる中心企画です。",
  },
  {
    title: "子ども向けワークショップ",
    description: "親子で参加しやすいものづくり体験です。",
    time: "10:30から12:00",
    place: "学生会館",
    category: "Workshop",
    audience: "小さなお子さま連れ",
    recommend: "落ち着いた屋内で参加できます。",
  },
  {
    title: "桜フォトスポット",
    description: "記念写真を撮れる春らしい装飾エリアです。",
    time: "終日",
    place: "正門付近",
    category: "Photo",
    audience: "来場者全員",
    recommend: "来場の記念を残しやすい企画です。",
  },
];

const faqs = [
  ["開催日はいつですか？", "開催日は2026年4月を予定しています。正式な日程は確定後に更新します。"],
  ["雨天でも開催しますか？", "小雨の場合は一部内容を変更して実施予定です。荒天時の判断は前日までに掲載します。"],
  ["予約は必要ですか？", "通常来場は予約不要です。一部ワークショップのみ事前申込制になる場合があります。"],
  ["学外からも参加できますか？", "はい。学生、教職員、地域の方、学外の方も参加できます。"],
  ["駐車場はありますか？", "駐車台数には限りがあります。公共交通機関またはシャトルバスの利用をおすすめします。"],
  ["子ども連れでも参加できますか？", "はい。お子さまと一緒に参加できる企画も準備予定です。"],
  ["飲食の出店はありますか？", "飲食企画を予定しています。出店内容は確定後に企画ページへ掲載します。"],
  ["困ったときは誰に聞けばよいですか？", "当日は本部テントへお越しください。事前のお問い合わせは contact us からお願いします。"],
];

const projectsEn = [
  {
    title: "Spring Food Street",
    description: "A food and drink area run by student groups.",
    time: "11:00 to 15:30",
    place: "Central Plaza",
    category: "Food",
    audience: "Friends and families",
    recommend: "A quick way to enjoy the festival atmosphere.",
  },
  {
    title: "Open Lab Program",
    description: "Students introduce research topics in an easy-to-understand format.",
    time: "12:30 to 14:30",
    place: "Lecture Building 1F",
    category: "Campus",
    audience: "First-time JAIST visitors",
    recommend: "A good way to experience the campus character.",
  },
  {
    title: "SAKURA Stage",
    description: "Music, performances, and club showcases on the main stage.",
    time: "13:00 to 16:00",
    place: "Special Stage",
    category: "Stage",
    audience: "Visitors who enjoy live performances",
    recommend: "A central program with a lively festival feel.",
  },
  {
    title: "Kids Workshop",
    description: "Hands-on craft activities that parents and children can join.",
    time: "10:30 to 12:00",
    place: "Student Hall",
    category: "Workshop",
    audience: "Families with young children",
    recommend: "An indoor program with a calmer pace.",
  },
  {
    title: "Cherry Blossom Photo Spot",
    description: "A spring-themed area for commemorative photos.",
    time: "All day",
    place: "Near the Main Gate",
    category: "Photo",
    audience: "All visitors",
    recommend: "A simple place to keep a memory of your visit.",
  },
];

const faqsEn = [
  ["When will the festival be held?", "The festival is planned for April 2026. The official date will be posted once confirmed."],
  ["Will it be held if it rains?", "The festival is planned to continue in light rain with some changes. Updates for severe weather will be posted by the previous day."],
  ["Do I need a reservation?", "General admission does not require a reservation. Some workshops may require advance registration."],
  ["Can people outside JAIST attend?", "Yes. Students, faculty, local residents, and visitors from outside JAIST are welcome."],
  ["Is parking available?", "Parking is limited. Public transportation or shuttle buses are recommended."],
  ["Can I come with children?", "Yes. Programs suitable for children are planned."],
  ["Will there be food stalls?", "Food programs are planned. Details will be added to the program page after confirmation."],
  ["Who should I ask if I need help?", "Please visit the headquarters tent on the day. For questions in advance, use contact us."],
];

const photos = [
  ["屋台エリア", "82% 68%"],
  ["ステージ発表", "58% 62%"],
  ["キャンパス散策", "45% 58%"],
  ["学生スタッフ", "34% 72%"],
  ["交流スペース", "18% 55%"],
  ["春の記念写真", "62% 24%"],
];

const heroPhotos = [
  ["春のキャンパスで開かれるSAKURA祭りのイメージ", "center"],
  ["学生と地域が集まるキャンパスイベントのイメージ", "78% 62%"],
  ["屋外企画と桜の雰囲気を伝えるイメージ", "28% 54%"],
];

const photosEn = [
  ["Food Area", "82% 68%"],
  ["Stage Program", "58% 62%"],
  ["Campus Walk", "45% 58%"],
  ["Student Staff", "34% 72%"],
  ["Exchange Space", "18% 55%"],
  ["Spring Photo", "62% 24%"],
];

const heroPhotosEn = [
  ["Image of the SAKURA Festival on a spring campus", "center"],
  ["Image of students and local visitors gathering on campus", "78% 62%"],
  ["Image showing outdoor programs and cherry blossom atmosphere", "28% 54%"],
];

const routeShells = [
  "/about-sakura/",
  "/projects/",
  "/projects/recommend/",
  "/projects/search/",
  "/history/",
  "/guide/",
  "/guide/access/",
  "/guide/rules/",
  "/qa/",
  "/about-us/",
  "/about-us/gajumaru/",
  "/about-us/contact/",
];

const nav = [
  [{ ja: "TOP", en: "TOP" }, "/"],
  [{ ja: "桜祭りとは", en: "About" }, "/about-sakura/"],
  [{ ja: "企画", en: "Programs" }, "/projects/search/"],
  [{ ja: "これまでの桜祭り", en: "History" }, "/history/"],
  [{ ja: "ご案内", en: "Guide" }, "/guide/access/"],
  [{ ja: "Q/A", en: "Q/A" }, "/qa/"],
  [{ ja: "about us", en: "about us" }, "/about-us/gajumaru/"],
];

let heroCarouselTimer;
const languageKey = "sakura-site-language";
let currentLang = getStoredLanguage();

const text = {
  ja: {
    brandAria: "SAKURA祭り TOP",
    brand: "SAKURA祭り",
    pageTitle: "SAKURA祭り 公式サイト",
    metaDescription: "SAKURA祭りの企画、アクセス、ご案内をまとめた公式サイトです。",
    navAria: "メインナビゲーション",
    mobileNavAria: "モバイルナビゲーション",
    menuOpen: "メニューを開く",
    langToggle: "English",
    langAria: "英語に切り替える",
    footerLead: "学生と地域が春のキャンパスで出会う一日。内容は確認中のため、一部は仮情報です。",
    copyright: "© 2026 SAKURA祭り実行委員会",
    gajumaruLink: "ガジュマル会 HP",
    jaistLink: "JAIST HP",
    momijiLink: "紅葉祭り",
    snsLink: "SNS",
    external: "外部",
    siteEyebrow: "SAKURA祭り 公式サイト",
    eventDate: "2026年4月予定",
    place: "JAIST キャンパス内 特設エリア",
    address: "石川県能美市旭台1-1",
    timeLabel: "時間",
    placeLabel: "場所",
    recommendLabel: "おすすめ",
    audienceLabel: "こんな人に",
    detail: "詳細を見る",
    open: "開く",
    close: "閉じる",
    mapAlt: "学校内MAPの仮表示",
    mainGateRoute: "<strong>正門</strong> から中央広場へ進み、案内看板に沿って特設エリアへお越しください。",
    headquartersRoute: "<strong>本部テント</strong> ではパンフレット、落とし物、緊急時の相談を受け付けます。",
    venue: "会場",
    googleMap: "Google Mapを開く",
    viewAccess: "アクセスを見る",
    route1Title: "大学入口へ",
    route1Text: "公共交通機関、シャトルバス、または指定駐車場から案内表示に従ってください。",
    route2Title: "受付を確認",
    route2Text: "パンフレットと当日の変更情報は本部テントで確認できます。",
    route3Title: "企画エリアへ",
    route3Text: "中央広場、講義棟、学生会館を中心に企画を実施予定です。",
    heroCarouselAria: "SAKURA祭りの写真スライド",
    prevPhoto: "前の写真を見る",
    nextPhoto: "次の写真を見る",
    slideDots: "写真スライドの位置",
    slideAria: "枚目の写真を見る",
    aboutPhotoAria: "桜祭りの雰囲気を伝える写真",
    carouselCaption: "写真、MAP、企画情報は順次更新予定です。",
    search: "検索",
    searchPlaceholder: "企画名、説明、場所で検索",
    category: "分類",
    time: "時間",
    all: "すべて",
    morning: "午前",
    afternoon: "午後",
    allDay: "終日",
    noProjects: "条件に合う企画がありません。",
    name: "名前",
    email: "メールアドレス",
    subject: "件名",
    message: "お問い合わせ内容",
    send: "送信する",
    formDemo: "送信デモです。実際の送信処理はPhase 3で接続します。",
    heroEyebrow: "春のキャンパスイベント",
    heroLead: "学生、地域、研究の空気がまざる春の一日。企画、屋台、ステージ、キャンパス散策を楽しめるイベントです。",
    findPrograms: "企画を探す",
    aboutTitle: "桜祭りとは",
    aboutLead: "SAKURA祭りは、JAISTの学生と地域の方が気軽につながる春のキャンパスイベントです。",
    learnMore: "詳しく見る",
    recommendTitle: "おすすめ企画",
    recommendLead: "参加しやすく、SAKURA祭りらしさを感じやすい企画を先に紹介します。",
    historyTitle: "これまでの桜祭り",
    historyLead: "過去の写真は準備中です。まずは写真を差し替えやすいギャラリー枠を用意しています。",
    accessTitle: "アクセス",
    accessLead: "会場までの行き方と当日の受付場所を確認できます。",
    aboutSakuraLead: "SAKURA祭りの概要、テーマ、運営メッセージを紹介します。",
    overview: "概要",
    overviewText: "SAKURA祭りは、春のキャンパスで学生、教職員、地域の方が交流するイベントです。企画情報は確定後に更新します。",
    theme: "テーマ",
    themeText: "今年のテーマは確認中です。仮テーマとして「春、つながるキャンパス」を設定しています。",
    presidentGreeting: "学長挨拶",
    presidentGreetingText: "正式メッセージ準備中。ここには来場者への歓迎文と大学としての想いを掲載します。",
    chairGreeting: "委員長挨拶",
    chairGreetingText: "実行委員長から、学生主体でつくる祭りへの想いを短く掲載する予定です。",
    philosophy: "活動理念",
    philosophyText: "学生らしい挑戦と、地域に開かれたキャンパスづくりを大切にしています。",
    features: "活動特色",
    featuresText: "屋台、ステージ、研究紹介、交流企画を通して、幅広い来場者が楽しめる構成を目指します。",
    programsTitle: "企画",
    programsLead: "おすすめ企画と検索ページから、気になる企画を見つけられます。",
    recommended: "おすすめ",
    recommendedText: "初めての方でも参加しやすい企画を紹介します。",
    viewRecommended: "おすすめを見る",
    programSearch: "企画を探す",
    programSearchText: "カテゴリ、時間、場所から企画を絞り込めます。",
    searchButton: "検索する",
    recommendPageLead: "参加しやすさとSAKURA祭りらしさを基準に選んだ企画です。",
    projectSearchLead: "検索とフィルターで、当日まわりたい企画をすばやく確認できます。",
    historyPageLead: "過去の活動記録、歴年テーマ、参加者の声を掲載するページです。",
    pastThemes: "歴年テーマ",
    pastThemesText: "過去テーマは確認中です。確定後、年ごとの一覧に差し替えます。",
    activityRecord: "活動記録",
    activityRecordText: "実施企画、来場者数、当日の雰囲気を短くまとめます。",
    voices: "参加者の声",
    voicesText: "来場者や学生スタッフのコメントを掲載予定です。",
    guideTitle: "ご案内",
    guideLead: "アクセスと来場者へのルールをまとめています。",
    guideAccessText: "会場までの行き方、シャトルバス、外部地図リンクを確認できます。",
    rulesTitle: "来場者へのルール",
    rulesText: "飲食、撮影、ゴミ、緊急時の連絡などを短くまとめています。",
    viewRules: "ルールを見る",
    accessPageLead: "初めて来る方にもわかりやすいよう、ルートと当日情報を整理しています。",
    accessNotice: "シャトルバス時刻表と校内MAPは確認中です。確定後、この枠に正式情報を掲載します。",
    rulesLead: "当日スマートフォンで確認しやすいよう、短い項目でまとめています。",
    qaLead: "来場前によくある質問をまとめました。",
    aboutUsLead: "SAKURA祭りを運営する組織と連絡先を紹介します。",
    gajumaruTitle: "ガジュマル会の会とは",
    gajumaruShortText: "学生生活やキャンパスイベントを支える組織です。",
    contactText: "お問い合わせフォーム、メール、SNSリンクを掲載しています。",
    contactButton: "問い合わせる",
    gajumaruLead: "SAKURA祭りと関わる学生組織の活動を紹介します。",
    gajumaruWhat: "ガジュマル会とは",
    gajumaruWhatText: "学生が主体となり、交流やイベントづくりを進める団体です。正式説明は確認中です。",
    activityContent: "活動内容",
    activityContentText: "イベント運営、学生交流、地域との連携などを行っています。",
    relationTitle: "SAKURA祭りとの関係",
    relationText: "企画調整、当日運営、広報などでSAKURA祭りを支えます。",
    orgPhilosophy: "組織理念",
    orgPhilosophyText: "学生らしいアイデアを形にし、誰もが参加しやすい場をつくります。",
    contactLead: "SAKURA祭りへのお問い合わせはこちらからお願いします。",
  },
  en: {
    brandAria: "SAKURA Festival TOP",
    brand: "SAKURA Festival",
    pageTitle: "SAKURA Festival Official Site",
    metaDescription: "Official site for SAKURA Festival programs, access, and visitor guidance.",
    navAria: "Main navigation",
    mobileNavAria: "Mobile navigation",
    menuOpen: "Open menu",
    langToggle: "日本語",
    langAria: "Switch to Japanese",
    footerLead: "A spring campus day where students and the local community meet. Some details are provisional while information is being confirmed.",
    copyright: "© 2026 SAKURA Festival Committee",
    gajumaruLink: "Gajumaru Association",
    jaistLink: "JAIST",
    momijiLink: "Momiji Festival",
    snsLink: "SNS",
    external: "External",
    siteEyebrow: "SAKURA Festival Official Site",
    eventDate: "Planned for April 2026",
    place: "Special Area on the JAIST Campus",
    address: "1-1 Asahidai, Nomi, Ishikawa",
    timeLabel: "Time",
    placeLabel: "Place",
    recommendLabel: "Recommended",
    audienceLabel: "Best for",
    detail: "View Details",
    open: "Open",
    close: "Close",
    mapAlt: "Temporary campus map display",
    mainGateRoute: "From the <strong>Main Gate</strong>, walk toward the Central Plaza and follow the signs to the special area.",
    headquartersRoute: "At the <strong>Headquarters Tent</strong>, you can get pamphlets, report lost items, and ask for help.",
    venue: "Venue",
    googleMap: "Open Google Map",
    viewAccess: "View Access",
    route1Title: "Enter the university",
    route1Text: "Follow the signs from public transportation, shuttle buses, or designated parking areas.",
    route2Title: "Check reception",
    route2Text: "Pamphlets and same-day updates are available at the headquarters tent.",
    route3Title: "Go to program areas",
    route3Text: "Programs are planned around the Central Plaza, Lecture Building, and Student Hall.",
    heroCarouselAria: "SAKURA Festival photo slideshow",
    prevPhoto: "View previous photo",
    nextPhoto: "View next photo",
    slideDots: "Photo slide position",
    slideAria: " photo",
    aboutPhotoAria: "Photo showing the atmosphere of the SAKURA Festival",
    carouselCaption: "Photos, maps, and program information will be updated in stages.",
    search: "Search",
    searchPlaceholder: "Search by program name, description, or place",
    category: "Category",
    time: "Time",
    all: "All",
    morning: "Morning",
    afternoon: "Afternoon",
    allDay: "All day",
    noProjects: "No programs match your filters.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    formDemo: "This is a demo. The actual submission process will be connected in Phase 3.",
    heroEyebrow: "Spring Campus Event",
    heroLead: "A spring day where students, the local community, and campus research meet. Enjoy programs, food stalls, stage events, and campus walks.",
    findPrograms: "Find Programs",
    aboutTitle: "About the Festival",
    aboutLead: "The SAKURA Festival is a spring campus event where JAIST students and local visitors can connect casually.",
    learnMore: "Learn More",
    recommendTitle: "Recommended Programs",
    recommendLead: "Start with programs that are easy to join and show the character of the SAKURA Festival.",
    historyTitle: "Past SAKURA Festivals",
    historyLead: "Past photos are being prepared. This gallery area is ready for easy photo replacement.",
    accessTitle: "Access",
    accessLead: "Check how to reach the venue and where to go for reception on the day.",
    aboutSakuraLead: "Learn about the festival outline, theme, and messages from the organizers.",
    overview: "Overview",
    overviewText: "The SAKURA Festival is a spring campus event where students, faculty, staff, and local visitors gather. Program information will be updated after confirmation.",
    theme: "Theme",
    themeText: "This year's theme is being confirmed. The provisional theme is Spring, Connected Campus.",
    presidentGreeting: "President's Message",
    presidentGreetingText: "The official message is being prepared. This area will include a welcome note for visitors and the university's thoughts.",
    chairGreeting: "Committee Chair's Message",
    chairGreetingText: "A short message from the committee chair about building a student-led festival will be posted here.",
    philosophy: "Activity Philosophy",
    philosophyText: "We value student-led challenges and a campus that is open to the community.",
    features: "Activity Features",
    featuresText: "Food stalls, stage programs, research introductions, and exchange activities are planned for a wide range of visitors.",
    programsTitle: "Programs",
    programsLead: "Use recommendations and search to find programs you want to visit.",
    recommended: "Recommended",
    recommendedText: "Programs that are easy to join, even for first-time visitors.",
    viewRecommended: "View Recommendations",
    programSearch: "Find Programs",
    programSearchText: "Filter programs by category, time, and place.",
    searchButton: "Search",
    recommendPageLead: "Programs selected for accessibility and SAKURA Festival character.",
    projectSearchLead: "Use search and filters to quickly check the programs you want to visit.",
    historyPageLead: "This page will share past activity records, annual themes, and visitor voices.",
    pastThemes: "Annual Themes",
    pastThemesText: "Past themes are being confirmed and will be replaced with a year-by-year list.",
    activityRecord: "Activity Records",
    activityRecordText: "Program results, visitor numbers, and the day's atmosphere will be summarized here.",
    voices: "Visitor Voices",
    voicesText: "Comments from visitors and student staff will be added here.",
    guideTitle: "Guide",
    guideLead: "Access information and visitor rules are collected here.",
    guideAccessText: "Check routes to the venue, shuttle bus information, and external map links.",
    rulesTitle: "Visitor Rules",
    rulesText: "Short notes on food, photography, trash, and emergency contact.",
    viewRules: "View Rules",
    accessPageLead: "Routes and day-of information are organized for first-time visitors.",
    accessNotice: "Shuttle bus timetables and the campus map are being confirmed. Official information will be posted here once ready.",
    rulesLead: "Short items are listed for easy checking on a smartphone on the day.",
    qaLead: "Common questions before visiting are summarized here.",
    aboutUsLead: "Learn about the organization and contact points behind the SAKURA Festival.",
    gajumaruTitle: "About the Gajumaru Association",
    gajumaruShortText: "An organization that supports student life and campus events.",
    contactText: "Contact form, email, and SNS links are listed here.",
    contactButton: "Contact Us",
    gajumaruLead: "Learn about the student organization connected to the SAKURA Festival.",
    gajumaruWhat: "What is the Gajumaru Association?",
    gajumaruWhatText: "A student-led group that promotes exchange and event creation. The official explanation is being confirmed.",
    activityContent: "Activities",
    activityContentText: "The group works on event operations, student exchange, and community collaboration.",
    relationTitle: "Relationship with the SAKURA Festival",
    relationText: "The group supports the SAKURA Festival through program coordination, day-of operations, and publicity.",
    orgPhilosophy: "Organization Philosophy",
    orgPhilosophyText: "We turn student ideas into practice and create spaces that are easy for everyone to join.",
    contactLead: "Please contact the SAKURA Festival team here.",
  },
};

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(languageKey);
    return stored === "en" ? "en" : "ja";
  } catch {
    return "ja";
  }
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ja";
  try {
    window.localStorage.setItem(languageKey, currentLang);
  } catch {
    // Ignore storage errors so the language switch still works for the current page.
  }
  render();
}

function t(key) {
  return text[currentLang][key] ?? text.ja[key] ?? key;
}

function localized(value) {
  if (value && typeof value === "object" && ("ja" in value || "en" in value)) return value[currentLang] ?? value.ja ?? value.en;
  return value;
}

function slideLabel(index) {
  return currentLang === "en" ? `View photo ${index + 1}` : `${index + 1}${t("slideAria")}`;
}

function currentProjects() {
  return currentLang === "en" ? projectsEn : projects;
}

function currentFaqs() {
  return currentLang === "en" ? faqsEn : faqs;
}

function currentPhotos() {
  return currentLang === "en" ? photosEn : photos;
}

function currentHeroPhotos() {
  return currentLang === "en" ? heroPhotosEn : heroPhotos;
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/index.html") return "/";
  let path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (path.endsWith("/index.html/")) path = path.replace("/index.html/", "/");
  return path;
}

function isActive(current, href) {
  if (href === "/") return current === "/";
  return current.startsWith(href.replace(/\/$/, ""));
}

function header(current) {
  const navLinks = nav
    .map(([label, href]) => `<a class="nav-link ${isActive(current, href) ? "active" : ""}" href="${href}">${localized(label)}</a>`)
    .join("");
  const languageToggle = `<button class="language-toggle" type="button" data-language-toggle aria-label="${t("langAria")}">${t("langToggle")}</button>`;

  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="${t("brandAria")}">
          <span class="brand-mark">桜</span>
          <span>${t("brand")}</span>
        </a>
        <div class="header-actions">
          <nav class="desktop-nav" aria-label="${t("navAria")}">${navLinks}</nav>
          ${languageToggle}
          <button class="menu-toggle" type="button" aria-label="${t("menuOpen")}" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav class="mobile-menu" aria-label="${t("mobileNavAria")}">${navLinks}</nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand" href="/">
            <span class="brand-mark">桜</span>
            <span>${t("brand")}</span>
          </a>
          <p class="copyright">${t("footerLead")}</p>
          <p class="copyright">${t("copyright")}</p>
        </div>
        <div class="footer-links">
          <a href="${site.links.gajumaru}" target="_blank" rel="noreferrer">${t("gajumaruLink")}</a>
          <a href="${site.links.jaist}" target="_blank" rel="noreferrer">${t("jaistLink")}</a>
          <a href="${site.links.momiji}" target="_blank" rel="noreferrer">${t("momijiLink")}</a>
          <a href="/about-us/contact/">contact us</a>
          <a href="${site.links.instagram}" target="_blank" rel="noreferrer">${t("snsLink")}</a>
        </div>
      </div>
    </footer>
  `;
}

function sectionTitle(title, lead) {
  return `
    <div class="section-title">
      <h2>${title}</h2>
      ${lead ? `<p>${lead}</p>` : ""}
    </div>
  `;
}

function button(label, href, variant = "primary", extra = "") {
  return `<a class="btn ${variant} ${extra}" href="${href}">${label}</a>`;
}

function projectCard(project, showReason = false) {
  return `
    <article class="project-card" data-title="${project.title}" data-category="${project.category}" data-place="${project.place}" data-time="${project.time}">
      <header>
        <h3>${project.title}</h3>
        <span class="tag">${project.category}</span>
      </header>
      <p>${project.description}</p>
      <div class="project-meta">
        <span><strong>${t("timeLabel")}:</strong> ${project.time}</span>
        <span><strong>${t("placeLabel")}:</strong> ${project.place}</span>
        ${showReason ? `<span><strong>${t("recommendLabel")}:</strong> ${project.recommend}</span>` : ""}
        ${showReason ? `<span><strong>${t("audienceLabel")}:</strong> ${project.audience}</span>` : ""}
      </div>
      ${button(t("detail"), "/projects/search/", "secondary")}
    </article>
  `;
}

function gallery(limit = photos.length) {
  const list = currentPhotos();
  return `
    <div class="gallery-scroll">
      ${list
        .slice(0, limit)
        .map(([label, position]) => `<figure class="photo-tile" style="--photo-position:${position};"><span>${label}</span></figure>`)
        .join("")}
    </div>
  `;
}

function heroCarousel() {
  const list = currentHeroPhotos();
  return `
    <div class="hero-carousel" data-hero-carousel aria-label="${t("heroCarouselAria")}">
      <div class="hero-track" data-hero-track>
        ${list
          .map(
            ([label, position], index) => `
              <div class="hero-slide" style="--photo-position:${position};" role="img" aria-label="${label}" data-slide-index="${index}"></div>
            `
          )
          .join("")}
      </div>
      <button class="carousel-arrow prev" type="button" data-carousel-prev aria-label="${t("prevPhoto")}">‹</button>
      <button class="carousel-arrow next" type="button" data-carousel-next aria-label="${t("nextPhoto")}">›</button>
      <div class="carousel-dots" aria-label="${t("slideDots")}">
        ${list
          .map(
            ([label], index) => `
              <button class="carousel-dot ${index === 0 ? "active" : ""}" type="button" data-carousel-dot="${index}" aria-label="${slideLabel(index)}" aria-current="${index === 0 ? "true" : "false"}"></button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function aboutPhoto() {
  return `
    <figure class="about-photo" aria-label="${t("aboutPhotoAria")}">
      <div style="--photo-position:58% 62%;"></div>
    </figure>
  `;
}

function accessCard(full = false) {
  return `
    <article class="access-card">
      <div class="map-placeholder" aria-label="${t("mapAlt")}">
        <div class="route-line">${t("mainGateRoute")}</div>
        <div class="route-line">${t("headquartersRoute")}</div>
      </div>
      <div class="access-body">
        <h3>${t("venue")}: ${t("place")}</h3>
        <p>${t("address")}</p>
        ${full ? routeSteps() : ""}
        <div class="button-row">
          ${button(t("googleMap"), "https://www.google.com/maps/search/?api=1&query=JAIST", "secondary")}
          ${button(t("viewAccess"), "/guide/access/", "primary")}
        </div>
      </div>
    </article>
  `;
}

function routeSteps() {
  return `
    <ol class="step-list">
      <li><span class="step-num">1</span><span><strong>${t("route1Title")}</strong><br>${t("route1Text")}</span></li>
      <li><span class="step-num">2</span><span><strong>${t("route2Title")}</strong><br>${t("route2Text")}</span></li>
      <li><span class="step-num">3</span><span><strong>${t("route3Title")}</strong><br>${t("route3Text")}</span></li>
    </ol>
  `;
}

function qaAccordion(list = currentFaqs().slice(0, 4)) {
  return `
    <div class="qa-list">
      ${list
        .map(
          ([q, a], index) => `
            <article class="qa-item ${index === 0 ? "open" : ""}">
              <button class="qa-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                <span>${q}</span><span class="qa-symbol">${index === 0 ? t("close") : t("open")}</span>
              </button>
              <div class="qa-answer">${a}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function externalLinks() {
  const links = [
    [t("gajumaruLink"), currentLang === "en" ? "See the organizing group" : "運営組織の活動を見る", site.links.gajumaru],
    [t("jaistLink"), currentLang === "en" ? "See official university information" : "大学の公式情報を見る", site.links.jaist],
    [t("momijiLink"), currentLang === "en" ? "See related events" : "関連イベントを見る", site.links.momiji],
  ];
  return `<div class="external-grid">${links.map(([title, text, href]) => `<a class="external-card" href="${href}" target="_blank" rel="noreferrer"><span><strong>${title}</strong><span>${text}</span></span><span>${t("external")}</span></a>`).join("")}</div>`;
}

function pageHero(title, lead) {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">${t("siteEyebrow")}</p>
        <h1>${title}</h1>
        <p class="page-lead">${lead}</p>
      </div>
    </section>
  `;
}

function topPage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">${t("heroEyebrow")}</p>
          <h1><span>SAKURA</span><span>${currentLang === "en" ? "Festival" : "祭り"}</span></h1>
          <p class="hero-lead">${t("heroLead")}</p>
          <div class="event-meta">
            <div class="meta-chip"><span class="chip-dot"></span>${t("eventDate")}</div>
            <div class="meta-chip"><span class="chip-dot"></span>${t("place")}</div>
          </div>
          <div class="button-row">
            ${button(t("findPrograms"), "/projects/search/", "primary")}
            ${button(t("viewAccess"), "/guide/access/", "secondary")}
          </div>
        </div>
        <figure class="hero-media">
          ${heroCarousel()}
          <figcaption>${t("carouselCaption")}</figcaption>
        </figure>
      </div>
    </section>
    <section class="section soft">
      <div class="container about-overview">
        <div>
          ${sectionTitle(t("aboutTitle"), t("aboutLead"))}
          ${button(t("learnMore"), "/about-sakura/", "primary")}
        </div>
        ${aboutPhoto()}
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionTitle(t("recommendTitle"), t("recommendLead"))}
        <div class="grid three featured-projects">${currentProjects().slice(0, 3).map((item) => projectCard(item, true)).join("")}</div>
        <div class="button-row">${button(t("findPrograms"), "/projects/search/", "primary")}</div>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        ${sectionTitle(t("historyTitle"), t("historyLead"))}
        ${gallery(6)}
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionTitle(t("accessTitle"), t("accessLead"))}
        ${accessCard(false)}
      </div>
    </section>
  `;
}

function aboutSakuraPage() {
  return `
    ${pageHero(t("aboutTitle"), t("aboutSakuraLead"))}
    <section class="section">
      <div class="container grid two">
        <article class="card"><h3>${t("overview")}</h3><p>${t("overviewText")}</p></article>
        <article class="card"><h3>${t("theme")}</h3><p>${t("themeText")}</p></article>
        <article class="card"><h3>${t("presidentGreeting")}</h3><p>${t("presidentGreetingText")}</p></article>
        <article class="card"><h3>${t("chairGreeting")}</h3><p>${t("chairGreetingText")}</p></article>
        <article class="card"><h3>${t("philosophy")}</h3><p>${t("philosophyText")}</p></article>
        <article class="card"><h3>${t("features")}</h3><p>${t("featuresText")}</p></article>
      </div>
    </section>
  `;
}

function projectsOverviewPage() {
  return `
    ${pageHero(t("programsTitle"), t("programsLead"))}
    <section class="section">
      <div class="container grid two">
        <article class="card"><h3>${t("recommended")}</h3><p>${t("recommendedText")}</p><div class="button-row">${button(t("viewRecommended"), "/projects/recommend/", "primary")}</div></article>
        <article class="card"><h3>${t("programSearch")}</h3><p>${t("programSearchText")}</p><div class="button-row">${button(t("searchButton"), "/projects/search/", "primary")}</div></article>
      </div>
    </section>
  `;
}

function recommendPage() {
  return `
    ${pageHero(t("recommendTitle"), t("recommendPageLead"))}
    <section class="section">
      <div class="container grid three">${currentProjects().slice(0, 4).map((item) => projectCard(item, true)).join("")}</div>
    </section>
  `;
}

function projectSearchPage() {
  const projectsList = currentProjects();
  const categories = [t("all"), ...new Set(projectsList.map((item) => item.category))];
  const places = [t("all"), ...new Set(projectsList.map((item) => item.place))];
  return `
    ${pageHero(t("programSearch"), t("projectSearchLead"))}
    <section class="section">
      <div class="container">
        <div class="filter-panel" data-filter-panel>
          <div class="field"><label for="project-search">${t("search")}</label><input id="project-search" type="search" placeholder="${t("searchPlaceholder")}"></div>
          <div class="field"><label for="category-filter">${t("category")}</label><select id="category-filter">${categories.map((item) => `<option>${item}</option>`).join("")}</select></div>
          <div class="field"><label for="time-filter">${t("time")}</label><select id="time-filter"><option>${t("all")}</option><option>${t("morning")}</option><option>${t("afternoon")}</option><option>${t("allDay")}</option></select></div>
          <div class="field"><label for="place-filter">${t("placeLabel")}</label><select id="place-filter">${places.map((item) => `<option>${item}</option>`).join("")}</select></div>
        </div>
        <div class="grid three" data-project-list>${projectsList.map((item) => projectCard(item, false)).join("")}</div>
        <p class="form-status" data-empty hidden>${t("noProjects")}</p>
      </div>
    </section>
  `;
}

function historyPage() {
  return `
    ${pageHero(t("historyTitle"), t("historyPageLead"))}
    <section class="section">
      <div class="container">
        ${gallery(6)}
        <div class="grid three" style="margin-top:24px">
          <article class="card"><h3>${t("pastThemes")}</h3><p>${t("pastThemesText")}</p></article>
          <article class="card"><h3>${t("activityRecord")}</h3><p>${t("activityRecordText")}</p></article>
          <article class="card"><h3>${t("voices")}</h3><p>${t("voicesText")}</p></article>
        </div>
      </div>
    </section>
  `;
}

function guidePage() {
  return `
    ${pageHero(t("guideTitle"), t("guideLead"))}
    <section class="section">
      <div class="container grid two">
        <article class="card"><h3>${t("accessTitle")}</h3><p>${t("guideAccessText")}</p><div class="button-row">${button(t("viewAccess"), "/guide/access/", "primary")}</div></article>
        <article class="card"><h3>${t("rulesTitle")}</h3><p>${t("rulesText")}</p><div class="button-row">${button(t("viewRules"), "/guide/rules/", "primary")}</div></article>
      </div>
    </section>
  `;
}

function accessPage() {
  return `
    ${pageHero(t("accessTitle"), t("accessPageLead"))}
    <section class="section">
      <div class="container">
        <p class="notice">${t("accessNotice")}</p>
        ${accessCard(true)}
      </div>
    </section>
  `;
}

function rulesPage() {
  const rules =
    currentLang === "en"
      ? [
          ["Entry", "Please follow reception instructions and signs. Some areas may have restricted access."],
          ["Food", "Please enjoy food in designated areas. Check allergy information at each stall."],
          ["Trash", "Please help with sorting. Take home any trash from items you bring in."],
          ["Photography", "Get permission before publishing photos that identify another person."],
          ["Prohibited Items", "Dangerous items, unauthorized sales, and behavior that disturbs others are prohibited."],
          ["Emergency", "If you feel unwell or need help, contact the headquarters tent or nearby staff."],
        ]
      : [
          ["入場", "受付や案内表示に従ってご来場ください。一部エリアは立入制限があります。"],
          ["飲食", "指定エリアでお楽しみください。アレルギー表示は各出店で確認してください。"],
          ["ゴミ", "分別回収にご協力ください。持ち込み品のゴミはお持ち帰りをお願いします。"],
          ["撮影", "個人が特定される写真を公開する際は、相手の了承を得てください。"],
          ["禁止事項", "危険物の持ち込み、無許可販売、周囲に迷惑となる行為は禁止です。"],
          ["緊急時", "体調不良や困りごとは本部テントまたは近くのスタッフへお知らせください。"],
        ];
  return `
    ${pageHero(t("rulesTitle"), t("rulesLead"))}
    <section class="section">
      <div class="container rule-grid">${rules.map(([title, text]) => `<article class="rule-card"><strong>${title}</strong><p>${text}</p></article>`).join("")}</div>
    </section>
  `;
}

function qaPage() {
  return `
    ${pageHero("Q/A", t("qaLead"))}
    <section class="section">
      <div class="container">${qaAccordion(currentFaqs())}</div>
    </section>
  `;
}

function aboutUsPage() {
  return `
    ${pageHero("about us", t("aboutUsLead"))}
    <section class="section">
      <div class="container grid two">
        <article class="card"><h3>${t("gajumaruTitle")}</h3><p>${t("gajumaruShortText")}</p><div class="button-row">${button(t("learnMore"), "/about-us/gajumaru/", "primary")}</div></article>
        <article class="card"><h3>contact us</h3><p>${t("contactText")}</p><div class="button-row">${button(t("contactButton"), "/about-us/contact/", "primary")}</div></article>
      </div>
    </section>
  `;
}

function gajumaruPage() {
  return `
    ${pageHero(t("gajumaruTitle"), t("gajumaruLead"))}
    <section class="section">
      <div class="container grid two">
        <article class="card"><h3>${t("gajumaruWhat")}</h3><p>${t("gajumaruWhatText")}</p></article>
        <article class="card"><h3>${t("activityContent")}</h3><p>${t("activityContentText")}</p></article>
        <article class="card"><h3>${t("relationTitle")}</h3><p>${t("relationText")}</p></article>
        <article class="card"><h3>${t("orgPhilosophy")}</h3><p>${t("orgPhilosophyText")}</p></article>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    ${pageHero("contact us", t("contactLead"))}
    <section class="section">
      <div class="container split">
        <div>
          <p class="notice">${currentLang === "en" ? "Email" : "メール"}: ${site.contactEmail}</p>
          ${externalLinks()}
        </div>
        <form class="form-card form-grid" data-form="contact">
          <div class="field"><label for="name">${t("name")}</label><input id="name" name="name" autocomplete="name" required></div>
          <div class="field"><label for="email">${t("email")}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="subject">${t("subject")}</label><input id="subject" name="subject" required></div>
          <div class="field"><label for="message">${t("message")}</label><textarea id="message" name="message" required></textarea></div>
          <button class="btn primary full" type="submit">${t("send")}</button>
          <p class="form-status" hidden>${t("formDemo")}</p>
        </form>
      </div>
    </section>
  `;
}

const pages = {
  "/": topPage,
  "/about-sakura/": aboutSakuraPage,
  "/projects/": projectsOverviewPage,
  "/projects/recommend/": recommendPage,
  "/projects/search/": projectSearchPage,
  "/history/": historyPage,
  "/guide/": guidePage,
  "/guide/access/": accessPage,
  "/guide/rules/": rulesPage,
  "/qa/": qaPage,
  "/about-us/": aboutUsPage,
  "/about-us/gajumaru/": gajumaruPage,
  "/about-us/contact/": contactPage,
};

function render() {
  const current = normalizePath(window.location.pathname);
  const page = pages[current] || topPage;
  document.documentElement.lang = currentLang === "en" ? "en" : "ja";
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));
  document.querySelector("#app").innerHTML = `
    <div class="site-shell">
      ${header(current)}
      <main>${page()}</main>
      ${footer()}
    </div>
  `;
  bindInteractions();
}

function bindInteractions() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "ja" : "en");
  });

  document.querySelectorAll(".qa-question").forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => {
      const item = buttonElement.closest(".qa-item");
      const open = item.classList.toggle("open");
      buttonElement.setAttribute("aria-expanded", String(open));
      buttonElement.querySelector(".qa-symbol").textContent = open ? "閉じる" : "開く";
    });
  });

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) status.hidden = false;
      form.reset();
    });
  });

  bindProjectFilters();
  bindHeroCarousel();
}

function bindHeroCarousel() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector("[data-hero-track]");
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  if (!track || slides.length === 0) return;

  let current = 0;
  let startX = 0;
  let pointerDown = false;
  let autoTimer;

  const update = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", String(active));
    });
  };

  const restart = () => {
    window.clearInterval(autoTimer);
    window.clearInterval(heroCarouselTimer);
    autoTimer = window.setInterval(() => update(current + 1), 5200);
    heroCarouselTimer = autoTimer;
  };

  prev?.addEventListener("click", () => {
    update(current - 1);
    restart();
  });

  next?.addEventListener("click", () => {
    update(current + 1);
    restart();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      update(Number(dot.dataset.carouselDot));
      restart();
    });
  });

  carousel.addEventListener("pointerdown", (event) => {
    pointerDown = true;
    startX = event.clientX;
    carousel.setPointerCapture?.(event.pointerId);
  });

  carousel.addEventListener("pointerup", (event) => {
    if (!pointerDown) return;
    pointerDown = false;
    const diff = event.clientX - startX;
    if (Math.abs(diff) > 44) {
      update(diff < 0 ? current + 1 : current - 1);
      restart();
    }
  });

  carousel.addEventListener("pointercancel", () => {
    pointerDown = false;
  });

  update(0);
  restart();
}

function bindProjectFilters() {
  const panel = document.querySelector("[data-filter-panel]");
  const list = document.querySelector("[data-project-list]");
  if (!panel || !list) return;

  const search = panel.querySelector("#project-search");
  const category = panel.querySelector("#category-filter");
  const time = panel.querySelector("#time-filter");
  const place = panel.querySelector("#place-filter");
  const empty = document.querySelector("[data-empty]");

  const apply = () => {
    const keyword = search.value.trim().toLowerCase();
    let visibleCount = 0;
    list.querySelectorAll(".project-card").forEach((card) => {
      const text = card.textContent.toLowerCase();
      const categoryMatch = category.value === t("all") || card.dataset.category === category.value;
      const placeMatch = place.value === t("all") || card.dataset.place === place.value;
      const timeValue = card.dataset.time;
      const timeMatch =
        time.value === t("all") ||
        (time.value === t("morning") && timeValue.includes("10")) ||
        (time.value === t("afternoon") && !timeValue.includes("10") && !timeValue.includes("All day") && !timeValue.includes("終日")) ||
        (time.value === t("allDay") && (timeValue.includes("All day") || timeValue.includes("終日")));
      const keywordMatch = !keyword || text.includes(keyword);
      const show = categoryMatch && placeMatch && timeMatch && keywordMatch;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    if (empty) empty.hidden = visibleCount !== 0;
  };

  [search, category, time, place].forEach((control) => control.addEventListener("input", apply));
}

render();

export { routeShells };
