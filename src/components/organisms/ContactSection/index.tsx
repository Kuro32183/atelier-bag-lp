// src/components/organisms/ContactSection/index.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Instagram, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/atoms/Button';
import SectionTitle from '@/components/molecules/SectionTitle';
import type { LandingContent } from '@/content/ja/landing';

interface ContactSectionProps {
  content: LandingContent['contact'];
}

const schema = z.object({
  name: z.string().min(2, 'お名前は2文字以上入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  instagram: z.string().optional(),
  category: z.string().min(1, 'カテゴリを選択してください'),
  message: z.string().min(10, 'メッセージは10文字以上入力してください'),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection({ content }: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const f = content.form;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-paper border border-border-subtle rounded-md text-text-primary text-sm font-body placeholder:text-text-primary/30 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-fast';
  const labelClass = 'block text-sm font-medium font-body text-primary mb-1.5';
  const errorClass = 'text-xs text-red-500 mt-1';

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-primary"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="font-latin text-xs tracking-[0.2em] uppercase text-paper/40 mb-4">
              {content.sectionLabel}
            </p>
            <h2
              id="contact-title"
              className="font-heading font-bold text-paper text-3xl md:text-4xl leading-tight mb-4"
            >
              {content.title}
            </h2>
            <p className="text-paper/60 text-base mb-10">{content.subtitle}</p>

            <div className="space-y-4">
              <a
                href="https://line.me/R/ti/p/@atelier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#06C755] text-white rounded-md hover:opacity-90 transition-opacity font-body text-sm font-medium"
                aria-label="LINEで相談する"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                {content.lineCta}
              </a>
              <a
                href="https://instagram.com/atelier_bag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-paper/10 text-paper rounded-md hover:bg-paper/20 transition-colors border border-paper/20 font-body text-sm font-medium"
                aria-label="Instagramで見る"
              >
                <Instagram className="w-5 h-5" aria-hidden />
                {content.instagramCta}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-paper rounded-lg p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-leather" aria-hidden />
                <p className="font-body text-primary text-base">{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-md" role="alert">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" aria-hidden />
                    <p className="text-xs text-red-600">{f.error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className={labelClass}>{f.name}</label>
                  <input
                    id="name"
                    type="text"
                    placeholder={f.namePlaceholder}
                    className={inputClass}
                    autoComplete="name"
                    {...register('name')}
                  />
                  {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>{f.email}</label>
                  <input
                    id="email"
                    type="email"
                    placeholder={f.emailPlaceholder}
                    className={inputClass}
                    autoComplete="email"
                    {...register('email')}
                  />
                  {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="instagram" className={labelClass}>
                    {f.instagram}
                    <span className="text-text-primary/40 ml-1 text-xs">(任意)</span>
                  </label>
                  <input
                    id="instagram"
                    type="text"
                    placeholder={f.instagramPlaceholder}
                    className={inputClass}
                    {...register('instagram')}
                  />
                </div>

                <div>
                  <label htmlFor="category" className={labelClass}>{f.category}</label>
                  <select
                    id="category"
                    className={inputClass}
                    defaultValue=""
                    {...register('category')}
                  >
                    <option value="" disabled>選択してください</option>
                    {f.categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.category && <p className={errorClass} role="alert">{errors.category.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>{f.message}</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={f.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                    {...register('message')}
                  />
                  {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? f.submitting : f.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
