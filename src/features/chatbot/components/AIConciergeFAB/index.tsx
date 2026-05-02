// src/features/chatbot/components/AIConciergeFAB/index.tsx
'use client';

import { useEffect, useRef } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { useChatStore } from '@/stores/chat.store';
import type { LandingContent } from '@/content/ja/landing';
import { cn } from '@/lib/utils';

interface AIConciergeFABProps {
  content: LandingContent['aiConcierge'];
  defaultOpen?: boolean;
}

export default function AIConciergeFAB({ content, defaultOpen = false }: AIConciergeFABProps) {
  const { isOpen, messages, isTyping, open, close, send } = useChatStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultOpen) open();
  }, [defaultOpen, open]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;
    send(value);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* FAB Button */}
      <button
        type="button"
        onClick={isOpen ? close : open}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'w-14 h-14 rounded-full bg-primary text-paper shadow-lg',
          'flex items-center justify-center',
          'hover:scale-110 active:scale-95 transition-transform duration-fast',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
        )}
        aria-label={isOpen ? 'チャットを閉じる' : content.label}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5" aria-hidden />
        ) : (
          <MessageCircle className="w-5 h-5" aria-hidden />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-brass text-paper text-xs rounded-full flex items-center justify-center font-bold">
            {content.badge}
          </span>
        )}
      </button>

      {/* Drawer */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] bg-paper border border-border-subtle rounded-lg shadow-xl flex flex-col overflow-hidden"
          role="dialog"
          aria-label={content.drawerTitle}
          aria-modal="true"
          style={{ maxHeight: 'min(600px, calc(100vh - 120px))' }}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-border-subtle bg-primary">
            <h2 className="font-heading font-bold text-paper text-base">{content.drawerTitle}</h2>
            <p className="text-paper/50 text-xs mt-0.5">{content.drawerSubtitle}</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-xs text-text-primary/50 text-center py-4">どんなことでもお気軽にどうぞ</p>
                <div className="flex flex-wrap gap-2">
                  {content.quickActions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      onClick={() => send(action)}
                      className="text-xs px-3 py-2 bg-linen text-primary rounded-md hover:bg-leather/10 transition-colors duration-fast border border-border-subtle"
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
                    'max-w-[80%] px-4 py-3 rounded-lg text-sm leading-relaxed',
                    msg.role === 'user'
                      ? 'bg-primary text-paper rounded-br-sm'
                      : 'bg-linen text-text-primary rounded-bl-sm'
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-linen px-4 py-3 rounded-lg rounded-bl-sm flex gap-1.5 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-text-primary/30 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border-subtle p-3 flex gap-2 items-center bg-paper">
            <input
              ref={inputRef}
              type="text"
              placeholder={content.placeholder}
              className="flex-1 text-sm px-4 py-2.5 bg-linen border-0 rounded-md text-text-primary placeholder:text-text-primary/30 focus:outline-none focus:ring-1 focus:ring-primary"
              onKeyDown={handleKeyDown}
              aria-label="メッセージを入力"
            />
            <button
              type="button"
              onClick={handleSend}
              className="w-9 h-9 flex items-center justify-center bg-primary text-paper rounded-md hover:bg-primary-light transition-colors duration-fast focus-visible:outline-none"
              aria-label="送信"
            >
              <Send className="w-4 h-4" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
