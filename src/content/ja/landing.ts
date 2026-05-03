// src/content/ja/landing.ts
// コンテンツ層 — 全UIテキストはここから取得する

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

  philosophy: {
    sectionLabel: 'PHILOSOPHY',
    title: '作家の想い',
    body: '鞄は毎日手にするもの。だからこそ、素材の選定から縫い目の一本一本まで、妥協なく向き合い続けます。使うほどに愛着が深まる、そんな一点を届けたい。',
    subBody: '大量生産品では味わえない、手仕事ならではの温もりと存在感。あなたの日常に寄り添い、時を重ねるほど輝きを増す鞄を。',
    signature: "手作り工房『こみち』",
  },

  materials: {
    sectionLabel: 'MATERIAL & CRAFT',
    title: '素材と仕立てへのこだわり',
    subtitle: '選び抜いた素材を、一点ずつ丁寧に仕立てます',
    cards: [
      {
        id: 'fabric',
        title: '布',
        origin: '前掛け風',
        body: 'オリジナルデザインの生地を使用。洗っても縮まない生地、色落ちしにくい素材でできております',
        icon: 'scissors',
        textureImage: '/images/materials/fabric.jpg',
      },
      {
        id: 'leather',
        title: '革',
        origin: '播州たつの',
        body: '国内有数の皮革産地・播州たつので育まれた本革を使用。なめらかな手触りと経年変化の美しさが、使うほどに鞄を育てていきます。',
        icon: 'leaf',
        textureImage: '/images/materials/leather.jpg',
      },
      {
        id: 'order',
        title: 'オーダー',
        origin: 'セミ／フルオーダー対応',
        body: '既製のデザインをベースにカスタマイズするセミオーダーから、布・革・金具・サイズをゼロから決めるフルオーダーまで承ります。世界でひとつの鞄を一緒に作りましょう。',
        icon: 'pencil',
        textureImage: '/images/materials/order.jpg',
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
        description: '制作期間は約〇〇週間。制作途中の写真をLINEでご共有します。',
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
    biography: "播州たつのを拠点に、着物にも合わせやすいがま口スタイルを中心とした手作り鞄を制作。オリジナル生地×播州革の組み合わせで、日常使いできる上質な一点ものをお届けしています。",
    philosophy: '「毎日手にするものだからこそ、本物を」をコンセプトに、素材と製法にこだわった鞄作りを続けています。',
    profileImage: '/images/profile/artisan.jpg',
    instagram: 'https://www.instagram.com/koubou_komichi/',
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
        answer: 'セミオーダーは約〇〇週間、フルオーダーは約〇〇週間が目安です。時期や受注によって変動しますので、まずはご相談ください。',
      },
      {
        question: '遠方でも注文できますか？',
        answer: 'はい、全国からご注文いただけます。やり取りはLINEやInstagram DM、メールで行い、商品は梱包してお届けします。',
      },
      {
        question: '予算はどれくらい必要ですか？',
        answer: 'セミオーダーは¥000〜、フルオーダーは¥000〜となっています。素材やデザインにより異なりますのでお気軽にご相談ください。',
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
    tagline: '',
    copyright: "© 2026 手作り工房『こみち』. All rights reserved.",
    links: [
      { label: '作品一覧', href: '/works' },
      { label: 'オーダーの流れ', href: '/#process' },
      { label: 'よくある質問', href: '/#faq' },
      { label: 'お問い合わせ', href: '/#contact' },
    ],
    social: {
      instagram: 'https://www.instagram.com/koubou_komichi/',
      line: 'https://qr-official.line.me/gs/M_778iaatf_GW.png?oat_content=qr',
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
