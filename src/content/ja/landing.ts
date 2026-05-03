// src/content/ja/landing.ts
// コンテンツ層 — 全UIテキストはここから取得する
// 使用方法: <HeroSection content={landing.hero} />

export const landing = {
  nav: {
    works: '作品一覧',
    materials: '素材へのこだわり',
    process: 'オーダーの流れ',
    about: '作家について',
    faq: 'よくある質問',
    cta: 'オーダー相談する',
  },

  hero: {
    eyebrow: "手作り工房『こみち』",
    title: '歩きたくなる、\n一生もの。',
    subtitle: '播州たつのの城下町から届ける、着物にも馴染むがま口スタイル。\n素材から作り込む一点ものは、驚くほど軽く、使うほどにあなたらしく。\n一針一針に想いを込めた、心ほどける手仕事の鞄をお届けします。',
    cta: '作品を見る',
    ctaSub: 'フルオーダーについて',
    scrollLabel: 'SCROLL',
  },

  craftProof: {
    sectionLabel: 'CRAFT',
    title: '一点ずつ丁寧に製作',
    subtitle: 'すべての作品は私が\nデザインから仕上げまで手がけます。',
    cards: [
      {
        title: '手縫い仕立て',
        body: '機械では再現できない、手縫いならではの\n丁寧な縫い目と強度を実現します。',
        icon: 'needle',
      },
      {
        title: '国産本革',
        body: '厳選した国産タンナーの本革のみを使用。\n経年変化でさらに美しく育ちます。',
        icon: 'leaf',
      },
      {
        title: '完全受注制作',
        body: '在庫は持たず、ご注文をいただいてから\n一から制作いたします。',
        icon: 'clock',
      },
    ],
  },

  philosophy: {
    sectionLabel: 'PHILOSOPHY',
    title: '作家の想い',
    body: '鞄は毎日手にするもの。だからこそ、素材の選定から縫い目の一本一本まで、妥協なく向き合い続けます。使うほどに愛着が深まる、そんな一点を届けたい。',
    subBody: '大量生産品では味わえない、手仕事ならではの温もりと存在感。あなたの日常に寄り添い、時を重ねるほど輝きを増す鞄を。',
    signature: '手作り工房『こみち』',
  },

  materials: {
    sectionLabel: 'MATERIAL',
    title: '素材へのこだわり',
    subtitle: '厳選した素材だけを使用します',
    items: [
      {
        id: 'leather',
        name: '栃木レザー',
        origin: '栃木県',
        description: '創業100年超の老舗タンナー・栃木レザーが誇る植物タンニン鞣し革。丈夫で経年変化が美しく、使うほどに深みが増します。',
        textureImage: '/images/materials/leather.jpg',
        durabilityScore: 5,
      },
      {
        id: 'brass',
        name: '真鍮金具',
        origin: '日本製',
        description: '職人が丁寧に磨き上げた真鍮製の金具。経年とともに独特の風合いを纏い、鞄に貫禄を加えます。',
        textureImage: '/images/materials/brass.jpg',
        durabilityScore: 4,
      },
      {
        id: 'linen',
        name: '国産リネン',
        origin: '岡山県',
        description: '岡山の老舗機屋が織り上げる高密度リネン。軽くて丈夫、通気性も抜群で内布として最適です。',
        textureImage: '/images/materials/linen.jpg',
        durabilityScore: 4,
      },
    ],
  },

  featuredWorks: {
    sectionLabel: 'WORKS',
    title: '作品',
    subtitle: '一点ものの作品たち',
    viewAll: 'すべての作品を見る',
    badge: '一点もの',
    from: '¥',
  },

  gallery: {
    sectionLabel: 'GALLERY',
    title: 'ギャラリー',
    subtitle: 'これまでの制作作品',
    viewAll: 'すべて見る',
    filterAll: 'すべて',
    filterBag: 'バッグ',
    filterWallet: '財布',
    filterPouch: 'ポーチ',
    filterKimono: '着物合わせ',
  },

  process: {
    sectionLabel: 'PROCESS',
    title: 'オーダーの流れ',
    subtitle: 'ご相談からお渡しまで',
    steps: [
      {
        step: 1,
        title: 'ご相談・ヒアリング',
        description: 'LINEまたはInstagramのDMにてお気軽にご相談ください。用途・好みのスタイル・ご予算をお聞かせください。',
      },
      {
        step: 2,
        title: 'デザイン提案',
        description: '素材サンプルや参考写真をもとに、あなただけのデザインをご提案します。',
      },
      {
        step: 3,
        title: '制作・進捗共有',
        description: '制作期間は約3〜6週間。制作途中の写真をLINEでご共有します。',
      },
      {
        step: 4,
        title: 'お渡し・アフターケア',
        description: '丁寧に梱包してお届けします。末永くご愛用いただけるようアフターケアも承ります。',
      },
    ],
  },

  profile: {
    sectionLabel: 'PROFILE',
    title: '作家プロフィール',
    name: "手作り工房『こみち』",
    brandName: "手作り工房『こみち』",
    startedYear: 2018,
    biography: "東京都出身。服飾専門学校卒業後、国内有名革メーカーに勤務。2018年に独立し、ハンドメイド鞄工房「こみち」を立ち上げる。着物にも合わせやすいがま口スタイルを中心に、日常使いできる上質な一点物を制作。",
    philosophy: '「毎日手にするものだからこそ、本物を」をコンセプトに、素材と製法にこだわった鞄作りを続けています。',
    profileImage: '/images/profile/artisan.jpg',
    instagram: 'https://instagram.com/atelier_bag',
  },

  faq: {
    sectionLabel: 'FAQ',
    title: 'よくある質問',
    items: [
      {
        question: 'フルオーダーとセミオーダーの違いは？',
        answer: 'フルオーダーはデザイン・サイズ・素材をゼロから決めていただきます。セミオーダーは既存デザインをベースに持ち手や装飾をカスタマイズします。',
      },
      {
        question: '制作期間はどれくらいかかりますか？',
        answer: 'セミオーダーは約2〜4週間、フルオーダーは約4〜8週間が目安です。時期によって変動しますので、まずはご相談ください。',
      },
      {
        question: '遠方でも注文できますか？',
        answer: 'はい、全国からご注文いただけます。やり取りはLINEやInstagram DM、メールで行い、商品は梱包してお届けします。',
      },
      {
        question: '予算はどれくらい必要ですか？',
        answer: 'セミオーダーは¥28,000〜、フルオーダーは¥45,000〜となっています。素材やデザインにより異なりますのでお気軽にご相談ください。',
      },
      {
        question: '修理・メンテナンスは対応していますか？',
        answer: 'はい、製作した作品の修理・クリーニング・再染色に対応しています。お気軽にお問い合わせください。',
      },
    ],
  },

  contact: {
    sectionLabel: 'CONTACT',
    title: 'オーダー相談',
    subtitle: 'まずはお気軽にご相談ください',
    lineCta: 'LINEで気軽に相談する',
    instagramCta: 'Instagramでみる',
    form: {
      name: 'お名前',
      namePlaceholder: 'お名前を入力してください',
      email: 'メールアドレス',
      emailPlaceholder: 'example@mail.com',
      instagram: 'Instagramアカウント（任意）',
      instagramPlaceholder: '@your_account',
      category: 'ご相談内容',
      categories: ['セミオーダー', 'フルオーダー', '修理・メンテナンス', 'その他'],
      message: 'メッセージ',
      messagePlaceholder: 'ご希望のデザイン、用途、ご予算などをお聞かせください。',
      submit: '送信する',
      submitting: '送信中...',
      success: 'お問い合わせを受け付けました。2〜3営業日以内にご連絡いたします。',
      error: '送信に失敗しました。しばらく経ってから再度お試しください。',
    },
  },

  footer: {
    brand: "手作り工房『こみち』",
    tagline: 'Handmade Bag & Atelier',
    copyright: "© 2024 手作り工房『こみち』. All rights reserved.",
    links: [
      { label: '作品一覧', href: '/works' },
      { label: 'オーダーの流れ', href: '/#process' },
      { label: 'よくある質問', href: '/#faq' },
      { label: 'お問い合わせ', href: '/#contact' },
    ],
    social: {
      instagram: 'https://instagram.com/atelier_bag',
      line: 'https://line.me/R/ti/p/@atelier',
    },
  },

  aiConcierge: {
    label: 'AIに相談する',
    drawerTitle: 'AIコンシェルジュ',
    drawerSubtitle: 'どんなことでもお気軽にどうぞ',
    placeholder: 'ご質問をどうぞ...',
    quickActions: [
      'どの持ち手がおすすめ？',
      '着物に合う装飾は？',
      '軽く仕上げたい場合は？',
      'ギフト向きの仕様は？',
    ],
    badge: '1',
  },

  sizeComparison: {
    title: 'サイズ比較',
    note: 'サイズ変更をご希望の場合はフルオーダーにて承っております。',
    labels: {
      a4: 'A4\n(21×29.7cm)',
      smartphone: 'スマートフォン\n(6.7インチ)',
      wallet: '長財布\n(19×10cm)',
      bottle500: '500mlボトル',
    },
  },
} as const;

export type LandingContent = typeof landing;
