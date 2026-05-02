// src/app/api/contact/route.tsx
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// NOTE: Resend is initialized inside the handler so that
// process.env.RESEND_API_KEY is not evaluated at module load time
// (which would crash during `next build` static analysis).

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  instagram: z.string().optional(),
  category: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Send notification email to the shop owner
    const { error } = await resend.emails.send({
      from: 'ATELIER お問い合わせ <noreply@atelier-bag.jp>',
      to: [process.env.CONTACT_EMAIL ?? 'your@email.com'],
      replyTo: data.email,
      subject: `[お問い合わせ] ${data.category} — ${data.name} 様`,
      react: ContactEmailTemplate({ ...data }),
    });

    if (error) {
      console.error('[Resend error]', error);
      return NextResponse.json({ error: 'Mail delivery failed' }, { status: 500 });
    }

    // Auto-reply to the user
    await resend.emails.send({
      from: 'ATELIER <noreply@atelier-bag.jp>',
      to: [data.email],
      subject: '[自動返信] お問い合わせを受け付けました — ATELIER',
      react: AutoReplyEmailTemplate({ name: data.name }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: err.errors },
        { status: 400 }
      );
    }
    console.error('[Contact API error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// ---- Inline email templates (React Email) ----

function ContactEmailTemplate({
  name,
  email,
  instagram,
  category,
  message,
}: {
  name: string;
  email: string;
  instagram?: string;
  category: string;
  message: string;
}) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', maxWidth: '600px', margin: '0 auto', color: '#111111' }}>
      <div style={{ background: '#102A43', padding: '32px', textAlign: 'center' as const }}>
        <h1 style={{ color: '#FAF8F4', fontSize: '24px', margin: 0, letterSpacing: '4px' }}>ATELIER</h1>
        <p style={{ color: '#FAF8F4', opacity: 0.5, fontSize: '12px', marginTop: '4px' }}>Handmade Bag & Atelier</p>
      </div>
      <div style={{ padding: '40px 32px', background: '#FAF8F4' }}>
        <h2 style={{ color: '#102A43', fontSize: '18px', marginTop: 0 }}>新しいお問い合わせが届いています</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginTop: '24px' }}>
          <tbody>
            {[
              ['お名前', name],
              ['メール', email],
              ['Instagram', instagram ?? '未記入'],
              ['相談内容', category],
            ].map(([label, value]) => (
              <tr key={label}>
                <td style={{ padding: '10px 12px', background: '#F3EFE8', width: '30%', fontSize: '13px', color: '#7F5539', fontWeight: 'bold' }}>{label}</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid #D6D0C7', fontSize: '14px' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '24px', padding: '20px', background: '#F3EFE8', borderRadius: '8px' }}>
          <p style={{ fontSize: '13px', color: '#7F5539', fontWeight: 'bold', margin: '0 0 8px' }}>メッセージ</p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-wrap' as const }}>{message}</p>
        </div>
      </div>
      <div style={{ padding: '20px 32px', background: '#F3EFE8', textAlign: 'center' as const }}>
        <p style={{ fontSize: '11px', color: '#9a9490', margin: 0 }}>このメールは ATELIER お問い合わせフォームから自動送信されました</p>
      </div>
    </div>
  );
}

function AutoReplyEmailTemplate({ name }: { name: string }) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', maxWidth: '600px', margin: '0 auto', color: '#111111' }}>
      <div style={{ background: '#102A43', padding: '32px', textAlign: 'center' as const }}>
        <h1 style={{ color: '#FAF8F4', fontSize: '24px', margin: 0, letterSpacing: '4px' }}>ATELIER</h1>
        <p style={{ color: '#FAF8F4', opacity: 0.5, fontSize: '12px', marginTop: '4px' }}>Handmade Bag & Atelier</p>
      </div>
      <div style={{ padding: '40px 32px', background: '#FAF8F4' }}>
        <p style={{ fontSize: '16px', color: '#102A43', marginTop: 0 }}>{name} 様</p>
        <p style={{ fontSize: '15px', lineHeight: '1.9', color: '#333' }}>
          このたびは ATELIER へお問い合わせくださり、誠にありがとうございます。
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.9', color: '#333' }}>
          内容を確認のうえ、作家よりご連絡いたします。<br />
          通常、2ー3営業日以内にお返事いたしますので、しばらくお待ちください。
        </p>
        <div style={{ margin: '32px 0', padding: '20px', background: '#F3EFE8', borderLeft: '3px solid #B08968', borderRadius: '0 8px 8px 0' }}>
          <p style={{ fontSize: '13px', color: '#7F5539', margin: '0 0 6px', fontWeight: 'bold' }}>LINEでもお気軽にご相談いただけます</p>
          <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>LINE ID: @atelier ・ Instagram: @atelier_bag</p>
        </div>
        <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.8' }}>
          今後とも ATELIER をどうぞよろしくお願いいたします。
        </p>
        <p style={{ fontSize: '14px', color: '#102A43', marginTop: '24px' }}>田中 美和 / ATELIER</p>
      </div>
      <div style={{ padding: '20px 32px', background: '#F3EFE8', textAlign: 'center' as const }}>
        <p style={{ fontSize: '11px', color: '#9a9490', margin: 0 }}>このメールは自動返信です。このアドレスへの返信はできません。</p>
      </div>
    </div>
  );
}
