import type { Metadata } from 'next'
import './globals.css'

// メタデータ（SEO用の情報）
export const metadata: Metadata = {
  title: 'さんべいのホームページ',
  description: 'さんべいのホームページ。ITについて色々学んでいます。',
  // OGP（Open Graph）設定 - SNSシェア時の表示を改善
  openGraph: {
    title: 'さんべいのホームページ',
    description: 'さんべいのホームページ。ITについて色々学んでいます。',
    url: 'https://your-site.pages.dev', // TODO: Cloudflare PagesのURLに更新してください
    siteName: 'さんべいのホームページ',
    locale: 'ja_JP',
    type: 'website',
    // 画像を追加する場合は、以下をコメントアウトして画像URLを指定
    // images: [
    //   {
    //     url: 'https://your-site.pages.dev/og-image.png', // TODO: Cloudflare PagesのURLに更新してください
    //     width: 1200,
    //     height: 630,
    //     alt: 'さんべいのホームページ',
    //   },
    // ],
  },
  // Twitterカード設定
  twitter: {
    card: 'summary_large_image',
    title: 'さんべいのホームページ',
    description: 'さんべいのホームページ。Web開発を学んでいます。',
    // Twitterのユーザー名を追加する場合（例：@san_bay3）
    // creator: '@san_bay3',
    // 画像を追加する場合は、以下をコメントアウトして画像URLを指定
    // images: ['https://your-site.pages.dev/og-image.png'], // TODO: Cloudflare PagesのURLに更新してください
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
