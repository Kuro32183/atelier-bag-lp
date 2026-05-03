// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  instagram: z.string().optional(),
  category: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: 'ATELIER <noreply@atelier-bag.jp>',
        to: [process.env.CONTACT_EMAIL ?? 'your@email.com'],
        replyTo: data.email,
        subject: `[お問い合わせ] ${data.category} — ${data.name} 様`,
        text: `お名前: ${data.name}\nメール: ${data.email}\nInstagram: ${data.instagram ?? '未記入'}\nカテゴリ: ${data.category}\n\nメッセージ:\n${data.message}`,
      });
      if (error) {
        console.error('[Resend error]', error);
        return NextResponse.json({ error: 'Mail delivery failed' }, { status: 500 });
      }
    } else {
      console.info('[Contact Form] RESEND_API_KEY not set, skipping email', { name: data.name, category: data.category });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.errors }, { status: 400 });
    }
    console.error('[Contact API error]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
