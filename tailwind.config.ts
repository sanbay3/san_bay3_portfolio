import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 白・黒基調のグレースケール
      colors: {
        // 背景色
        'bg-primary': '#ffffff',
        'bg-secondary': '#f5f5f5',
        'bg-tertiary': '#f0f0f0',
        // テキスト色
        'text-primary': '#0a0a0a',
        'text-secondary': '#1a1a1a',
        'text-muted': '#6b7280',
        // アクセント（ボーダー用）
        'accent': '#e5e7eb',
        'accent-hover': '#d1d5db',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
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
