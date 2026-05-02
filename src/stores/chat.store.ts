// src/stores/chat.store.ts
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

// Canned responses for demo
const RESPONSES: Record<string, string> = {
  'どの持ち手がおすすめ？':
    '日常使いには本革（肂掛け）が人気です。着物に合わせたい場合は標準仕様や本革（短）がおすすめ。用途やスタイルをもう少し教えていただけるとより詳しくご提案できます！',
  '着物に合う装飾は？':
    '着物には革タッセルや革花モチーフが展示会や露などにぜひおすすめです。第一印象が半衕気な革タッセルは気上上のアクセントになります！',
  '軽く仕上げたい場合は？':
    '装飾を「追加しない」にして、内布をリネンに変更することで軽量化できます。がま口ポーチなら約180gまで軽くずせることも可能です！',
  'ギフト向きの仕様は？':
    'ギフトには名入れ刷印（+¥2,000）や革花モチーフが大変喂まれます。ラッピングやメッセージカードも「+¥500～」で応じています。お気軽にゴ相談下さい！',
};

const DEFAULT_RESPONSE =
  'ご質問ありがとうございます。具体的な内容はお問い合わせフォームまたはLINEにてお気軽にお尋ねください。作家が丁寧にお答えします！';

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

    // Simulate AI response
    setTimeout(() => {
      const response = RESPONSES[content] ?? DEFAULT_RESPONSE;
      get().receive(response);
    }, 800 + Math.random() * 400);
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
