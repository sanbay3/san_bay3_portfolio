import type { Metadata } from 'next'
import './globals.css'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site'

// メタデータ（SEO用の情報）
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // キーワード（SEO用）
  keywords: [
    'ポートフォリオ',
    'Web開発',
    'Next.js',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'IT',
    'プログラミング',
    'さんべい',
  ],
  authors: [
    {
      name: 'さんべい',
    },
  ],
  alternates: {
    canonical: '/',
  },
  // 検索エンジンのクロール設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // OGP設定（共有画像は public/og-image.png 配置後に追加）
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_TITLE,
    locale: 'ja_JP',
    type: 'website',
  },
  // Twitterカード設定
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // Twitterのユーザー名を追加する場合（例：@san_bay3）
    // creator: '@san_bay3',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: SITE_TITLE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'ja',
    },
    {
      '@type': 'Person',
      name: 'さんべい',
      url: SITE_URL,
    },
  ],
}

/**
 * 全ページ共通のレイアウト
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-bg-primary text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
