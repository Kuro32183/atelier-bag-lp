'use client';
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
  toggle: () => void;
  send: (content: string) => void;
  receive: (content: string) => void;
  clear: () => void;
}

export const useChatStore = create<ChatState & ChatActions>((set, get) => ({
  isOpen: false,
  messages: [],
  isTyping: false,

  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),

  send: (content) => {
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    set((s) => ({ messages: [...s.messages, message], isTyping: true }));
  },

  receive: (content) => {
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content,
      timestamp: new Date(),
    };
    set((s) => ({ messages: [...s.messages, message], isTyping: false }));
  },

  clear: () => set({ messages: [] }),
}));
