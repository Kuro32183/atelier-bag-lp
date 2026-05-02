# ATELIER ハンドメイド鞄ブランド LP

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React
- **Deploy**: Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create `.env.local`:

```env
# Resend (https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

# Contact form recipient email
CONTACT_EMAIL=your@email.com
```

## Vercel Deploy

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add env vars in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Atomic Design UI
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── content/ja/       # All UI copy (never hardcoded)
├── data/             # Static data layer
├── features/         # Domain features
│   ├── chatbot/
│   ├── product/
│   ├── search/         # Future
│   └── recommendation/ # Future
├── stores/           # Zustand
├── types/
└── lib/
```

## Images

Currently using SVG placeholders at `public/images/`.
Replace with real product photos in production.

```
public/images/
├── works/
├── materials/
├── options/
└── profile/
```

## Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/mo)
2. Add your domain for verified sending
3. Create API Key
4. Set `RESEND_API_KEY` env var
