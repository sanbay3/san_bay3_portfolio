import type { Config } from 'tailwindcss'

const config: Config = {
  // コンテンツのパスを指定（Tailwindがどのファイルをスキャンするか）
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // カスタムカラーパレット（白・黒基調、モダンなグレースケール）
      colors: {
        // 背景色
        'bg-primary': '#ffffff', // 白
        'bg-secondary': '#fafafa', // より洗練された薄いグレー
        'bg-tertiary': '#f0f0f0', // 中間グレー
        // テキスト色
        'text-primary': '#0a0a0a', // ほぼ黒（より柔らかい）
        'text-secondary': '#1a1a1a', // 濃いグレー
        'text-muted': '#6b7280', // モダンな中間グレー
        // アクセント
        'accent': '#e5e7eb', // 薄いグレー（ボーダー用）
        'accent-hover': '#d1d5db', // ホバー時のグレー
      },
      // フォント設定
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      // シャドウ設定
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
