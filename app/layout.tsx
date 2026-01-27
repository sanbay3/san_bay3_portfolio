import type { Metadata } from 'next'
import './globals.css'

// メタデータ（SEO用の情報）
export const metadata: Metadata = {
  title: 'さんべい | Portfolio',
  description: 'さんべいのポートフォリオサイト。Web開発を学んでいます。',
  // OGP（Open Graph）設定 - SNSシェア時の表示を改善
  openGraph: {
    title: 'さんべい | Portfolio',
    description: 'さんべいのポートフォリオサイト。Web開発を学んでいます。',
    url: 'https://fabulous-tulumba-816ab8.netlify.app',
    siteName: 'さんべいのポートフォリオ',
    locale: 'ja_JP',
    type: 'website',
    // 画像を追加する場合は、以下をコメントアウトして画像URLを指定
    // images: [
    //   {
    //     url: 'https://fabulous-tulumba-816ab8.netlify.app/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'さんべいのポートフォリオ',
    //   },
    // ],
  },
  // Twitterカード設定
  twitter: {
    card: 'summary_large_image',
    title: 'さんべい | Portfolio',
    description: 'さんべいのポートフォリオサイト。Web開発を学んでいます。',
    // Twitterのユーザー名を追加する場合（例：@san_bay3）
    // creator: '@san_bay3',
    // 画像を追加する場合は、以下をコメントアウトして画像URLを指定
    // images: ['https://fabulous-tulumba-816ab8.netlify.app/og-image.png'],
  },
}

/**
 * RootLayout コンポーネント
 * 
 * このコンポーネントは全ページで共通のレイアウトを提供します。
 * Next.jsのApp Routerでは、layout.tsxが各ページをラップします。
 * 
 * @param children - 子コンポーネント（各ページのコンテンツ）
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  )
}
