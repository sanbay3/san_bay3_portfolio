/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reactの厳密モードを有効化（開発時の警告を増やす）
  reactStrictMode: true,
  
  // 静的エクスポート（SSG）の設定 - Cloudflare Pages用
  output: 'export',
}

module.exports = nextConfig
