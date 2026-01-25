import type { Metadata } from 'next'
import './globals.css'

// メタデータ（SEO用の情報）
export const metadata: Metadata = {
  title: 'さんべい | Portfolio',
  description: 'さんべいのポートフォリオサイト',
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
