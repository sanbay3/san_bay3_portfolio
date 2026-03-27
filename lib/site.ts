/** 本番サイトの絶対URL（メタデータ・sitemap・JSON-LDで共通利用） */
export const SITE_URL = 'https://san-bay3-portfolio.pages.dev' as const

export const SITE_TITLE = 'さんべいのホームページ' as const

export const SITE_DESCRIPTION =
  'さんべいのホームページ。ITについて色々学んでいます。' as const

/**
 * OGP/Twitter 用の共有画像（推奨 1200×630）。
 * `public/og-image.png` を配置したら、`app/layout.tsx` の `openGraph.images` / `twitter.images` に
 * `{ url: '/og-image.png', width: 1200, height: 630, alt: SITE_TITLE }` を追加する。
 */
