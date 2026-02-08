/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reactの厳密モードを有効化（開発時の警告を増やす）
  reactStrictMode: true,
  
  // 静的エクスポート（SSG）の設定
  output: 'export',
  
  // 画像最適化（静的エクスポート時は無効化が必要）
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig
