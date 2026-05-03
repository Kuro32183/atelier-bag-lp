import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "手作り工房『こみち』| ハンドメイド鞄工房",
  description: '一点ものの鞄を、あなたのために。素材を選び、形を決め、あなただけの鞄を仕立てる職人のアトリエ。',
  keywords: 'ハンドメイド,鞄,バッグ,がま口,本革,オーダーメイド,セミオーダー,こみち',
  openGraph: {
    title: "手作り工房『こみち』| ハンドメイド鞄工房",
    description: '一点ものの鞄を、あなたのために。',
    type: 'website',
    locale: 'ja_JP',
    siteName: "手作り工房『こみち』",
  },
  twitter: {
    card: 'summary_large_image',
    title: "手作り工房『こみち』| ハンドメイド鞄工房",
    description: '一点ものの鞄を、あなたのために。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
