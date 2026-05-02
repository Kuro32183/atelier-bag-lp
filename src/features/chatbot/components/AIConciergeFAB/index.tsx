'use client';
// src/features/chatbot/components/AIConciergeFAB/index.tsx
// Figma: Features/Chatbot/AIConciergeFAB

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useChatStore } from '@/stores/chat.store';
import { landing } from '@/content/ja/landing';
import { cn } from '@/lib/utils';

interface AIConciergeFABProps {
  defaultOpen?: boolean;
}

export function AIConciergeFAB({ defaultOpen = false }: AIConciergeFABProps) {
  const { isOpen, messages, isTyping, open, close, toggle, send, receive } = useChatStore();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const content = landing.aiConcierge;

  // Initialize
  useEffect(() => {
    if (defaultOpen) open();
  }, [defaultOpen, open]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const message = text ?? input.trim();
    if (!message) return;
    setInput('');
    send(message);

    // Simulate AI response (replace with real API call)
    setTimeout(() => {
      const responses: Record<string, string> = {
        'どの持ち手がおすすめ？': '用途によりますが、普段使いには本革（短め）が上品でおすすめです。着物の場合は標準仕様の持ち手が調和しやすいですよ。',
        '着物に合う装飾は？': '着物には「革花モチーフ」がとても人気です。和の雰囲気と上品さが調和します。革タッセルも清楚でおすすめです。',
        '軽く仕上げたい場合は？': '持ち手を標準仕様にして、革細工を「なし」にすると最も軽量に仕上がります。内布も薄手のリネンを選ぶと◎',
        'ギフト向きの仕様は？': '贈り物には名入れ刻印が特に喜ばれます。革タッセルと組み合わせると一段と特別感が出ますよ。',
      };
      receive(responses[message] ?? 'ありがとうございます。詳しくはLINEまたはInstagramでもお気軽にご相談ください。');
    }, 1200);
  };

  return (
    <>
      {/* FAB button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-paper shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        aria-label={content.label}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification badge */}
        {!isOpen && messages.length === 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brass text-paper text-[10px] flex items-center justify-center font-bold">
            {content.badge}
          </span>
        )}
      </motion.button>

      {/* Chat drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] md:w-[360px] bg-paper rounded-xl shadow-lg border border-borderSubtle flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxHeight: '70vh' }}
            role="dialog"
            aria-label={content.drawerTitle}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary text-paper">
              <Bot className="w-5 h-5 text-brass" />
              <div>
                <p className="font-body text-sm font-medium">{content.drawerTitle}</p>
                <p className="font-body text-xs text-paper/60">{content.drawerSubtitle}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="font-body text-sm text-textPrimary/50 text-center py-2">
                    よくあるご質問
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {content.quickActions.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleSend(action)}
                        className="px-3 py-2 text-xs font-body text-primary bg-linen border border-borderSubtle rounded-md hover:bg-primary hover:text-paper transition-colors text-left"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex',
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] px-3 py-2 rounded-lg font-body text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-primary text-paper rounded-br-none'
                        : 'bg-linen text-textPrimary rounded-bl-none border border-borderSubtle'
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-linen border border-borderSubtle px-4 py-2 rounded-lg rounded-bl-none flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-primary/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-borderSubtle flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={content.placeholder}
                className="flex-1 px-3 py-2 text-sm font-body bg-linen border border-borderSubtle rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-textPrimary"
                aria-label="メッセージを入力"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 rounded-md bg-primary text-paper flex items-center justify-center hover:bg-primaryLight transition-colors disabled:opacity-40"
                aria-label="送信"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
