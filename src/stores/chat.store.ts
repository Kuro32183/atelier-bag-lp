// src/stores/chat.store.ts
// こみちさんのInstagramトーンを参考に、温かく自然な口語で応答
import { create } from 'zustand';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
}

interface ChatActions {
  open: () => void;
  close: () => void;
  send: (content: string) => void;
  receive: (content: string) => void;
  reset: () => void;
}

// ── 意図分類ルール ──────────────────────────────────────────────
// キーワードリストとそれに対応する返答を定義。
// 上から順にマッチするものを採用する。
type Intent = {
  keywords: string[];
  response: string;
};

const INTENTS: Intent[] = [
  // 持ち手・ハンドル
  {
    keywords: ['持ち手', 'ハンドル', 'ショルダー', 'トート'],
    response:
      '持ち手は全部で4種類ご用意しています！\n' +
      '普段使いなら「本革（肩掛け）」が一番人気です。ちょうどよく肩に馴染んで、使っていくうちにくたっといい感じになるんですよ😊\n' +
      '着物に合わせたいなら「本革（短）」や「標準仕様」がすっきりして◎\n' +
      'どんなシーンで使いたいか教えてもらえたら、もっと具体的にご提案できます！',
  },
  // 素材・革・布・生地
  {
    keywords: ['素材', '革', '布', '生地', 'レザー', 'たつの', '播州'],
    response:
      'こみちでは兵庫県たつの市の播州革と、オリジナルの布地をメインに使っています。\n' +
      '播州の革はしなやかで手に馴染みやすく、経年変化がすごくきれいなんです✨\n' +
      '布地は着物地・帯地・和柄リネンなど、市販ではなかなか出回らないものを一枚ずつ選んで仕入れています。\n' +
      'ご希望の雰囲気（カジュアル・和風・シンプルなど）があれば、それに合わせた生地をご提案しますよ〜！',
  },
  // オーダー・セミオーダー・フルオーダー
  {
    keywords: ['オーダー', 'セミ', 'フル', '注文', 'カスタム', 'オリジナル'],
    response:
      'オーダーは大歓迎です😊\n' +
      'セミオーダーは既存のデザインをベースに、布・革・金具・持ち手などを組み合わせて選ぶスタイル。\n' +
      'フルオーダーはサイズもポケットの数も、全部イチから一緒に決められます。\n' +
      '「こんな鞄があったらいいな」という漠然としたイメージだけでも大丈夫！\n' +
      'まずはお気軽に相談してみてください。LINEでも気軽にやり取りできますよ〜🌿',
  },
  // 価格・値段・予算・費用
  {
    keywords: ['値段', '価格', '予算', '費用', 'いくら', '¥', '円'],
    response:
      'お値段の目安ですが\n' +
      '・セミオーダー：¥28,000〜\n' +
      '・フルオーダー：¥45,000〜\n' +
      'といった感じです。素材や装飾の組み合わせによって変わってくるので、まずはどんな鞄を作りたいか教えてもらえると、より正確にお伝えできます！\n' +
      '「だいたいこのくらいの予算で」でも全然OKですよ😊',
  },
  // 納期・期間・いつ
  {
    keywords: ['納期', '期間', 'いつ', 'どれくらい', '何週間', 'スケジュール'],
    response:
      '制作期間の目安はこちらです：\n' +
      '・セミオーダー：2〜4週間ほど\n' +
      '・フルオーダー：4〜8週間ほど\n' +
      '時期によって前後することもあるので、プレゼントや特定の日までに必要な場合は早めにご相談いただけると安心です🗓️',
  },
  // 着物・和装・浴衣
  {
    keywords: ['着物', '和装', '浴衣', '帯', '振袖', '留袖'],
    response:
      '着物に合わせる鞄、得意ですよ〜！\n' +
      'がま口のコロンとしたシルエットは和装にすごく馴染むんです😊\n' +
      '装飾は革タッセルや革花モチーフがよく選ばれます。さりげなくアクセントになっていい感じ✨\n' +
      'お召しになる着物の雰囲気（カジュアル・フォーマル・個性的など）を教えてもらえると、より合わせやすいご提案ができます！',
  },
  // 軽さ・重さ
  {
    keywords: ['軽', '重', 'グラム', 'g'],
    response:
      '鞄の重さって大事ですよね！\n' +
      'こみちのがま口は素材を吟味しているので、見た目のボリュームのわりに軽く仕上がります。\n' +
      '装飾を少なめにしたり、内布をリネンにすることで、さらに軽量化できますよ。\n' +
      '「できるだけ軽くしたい！」と言っていただければ、それを前提にご提案します😊',
  },
  // ギフト・プレゼント・贈り物
  {
    keywords: ['ギフト', 'プレゼント', '贈り物', '贈る', '誕生日', '結婚'],
    response:
      'ギフトにもよく選んでいただいています🎁\n' +
      '名入れ刻印（+¥2,000）を入れると、ぐっと特別感が出ておすすめです。\n' +
      '革花モチーフや上品な真鍮金具との組み合わせも喜ばれます✨\n' +
      '渡す相手や用途を教えていただければ、きっと喜ばれる仕様をご提案できますよ！',
  },
  // お手入れ・メンテナンス・修理
  {
    keywords: ['手入れ', 'メンテ', 'お手入れ', '修理', 'ケア', 'クリーニング'],
    response:
      'お手入れについてもお気軽に相談してください😊\n' +
      '革部分は市販のレザークリームで定期的に保湿するだけでOKです。\n' +
      '修理・クリーニング・再染色も承っています（こみちで作った鞄に限ります）。\n' +
      '長く大切に使ってもらえるのが一番うれしいので、何かあれば気軽に声をかけてください🌿',
  },
  // 遠方・通販・配送
  {
    keywords: ['遠方', '通販', '配送', '発送', '地方', '県外', '全国'],
    response:
      '全国どこからでもご注文いただけます！\n' +
      'やり取りはLINEやInstagram DM、メールで。\n' +
      '素材のサンプル画像もお送りできるので、遠方でも安心して相談していただけますよ😊\n' +
      '完成した鞄は丁寧に梱包してお届けします🌿',
  },
];

// どの意図にも引っかからなかったときの汎用返答（複数からランダム選択）
const FALLBACK_RESPONSES = [
  'うーん、もう少し詳しく教えてもらえますか？どんな鞄を探しているか、使うシーンなど聞かせてもらえると嬉しいです😊',
  'ありがとうございます！もう少し教えてもらえたら、より的確にお答えできます。お気軽にどうぞ🌿',
  'すみません、ちょっと確認させてください。詳しくはLINEやInstagram DMでも気軽にご相談いただけますよ！',
  'なるほど…！その点はお問い合わせフォームかLINEで直接お話しするのが一番スムーズかもしれません。お気軽にどうぞ😊',
];

function getResponse(input: string): string {
  const normalized = input
    .replace(/[\u3000]/g, ' ')
    .toLowerCase();

  for (const intent of INTENTS) {
    if (intent.keywords.some((kw) => normalized.includes(kw))) {
      return intent.response;
    }
  }

  // fallback — ランダムで温かみを出す
  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

// ── Zustand Store ────────────────────────────────────────────────
export const useChatStore = create<ChatState & ChatActions>((set, get) => ({
  isOpen: false,
  messages: [],
  isTyping: false,

  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  reset: () => set({ messages: [], isTyping: false }),

  send: (content: string) => {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    set((state) => ({ messages: [...state.messages, userMsg], isTyping: true }));

    // 応答ディレイ（自然な会話感）
    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      get().receive(getResponse(content));
    }, delay);
  },

  receive: (content: string) => {
    const assistantMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content,
      timestamp: new Date(),
    };
    set((state) => ({
      messages: [...state.messages, assistantMsg],
      isTyping: false,
    }));
  },
}));
