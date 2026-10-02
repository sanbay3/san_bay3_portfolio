/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Cloudflare Pages用に静的エクスポート
  output: 'export',
}

module.exports = nextConfig
