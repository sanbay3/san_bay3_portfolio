/**
 * Contact コンポーネント
 * 
 * 連絡先・SNSリンクを表示するセクションです。
 * SNSアイコン付きで表示されます。
 */

import { ReactNode } from 'react'
// React IconsからSNSアイコンをインポート
import { 
  FaXTwitter, // X（旧Twitter）のアイコン
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaEnvelope,
  FaGlobe
} from 'react-icons/fa6'

// Qiitaのアイコン（カスタムSVG）
const QiitaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-2.5-5c-.83 0-1.5-.67-1.5-1.5S12.67 8.5 13.5 8.5 15 9.17 15 10s-.67 1.5-1.5 1.5z"/>
  </svg>
)

// SNSリンクの型定義（TypeScript）
interface SocialLink {
  name: string
  url: string
  icon: ReactNode // React Iconsのアイコンコンポーネント
  color?: string // カスタムカラー（オプション）
}

export default function Contact() {
  // SNSリンクリスト（ここに追加・編集してください）
  const socialLinks: SocialLink[] = [
    // 例：コメントアウトを外して、自分のURLに変更してください
    {
      name: 'X (Twitter)',
      url: 'https://x.com/san_bay3',
      icon: <FaXTwitter />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sanbay3',
      icon: <FaGithub />,
    },
    // {
      name: 'Qiita',
      url: 'https://qiita.com/san_bay3',
      icon: <QiitaIcon />,
    },
    {
    //   name: 'LinkedIn',
    //   url: 'https://linkedin.com/in/your_username',
    //   icon: <FaLinkedin />,
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://instagram.com/your_username',
    //   icon: <FaInstagram />,
    // },
    // {
    //   name: 'Email',
    //   url: 'mailto:your_email@example.com',
    //   icon: <FaEnvelope />,
    // },
    // {
    //   name: 'Website',
    //   url: 'https://your-website.com',
    //   icon: <FaGlobe />,
    // },
  ]

  return (
    <section id="contact" className="section-padding bg-bg-secondary">
      <div className="container-custom text-center">
        <h2 className="section-title">SNS / Accounts</h2>
        
        <p className="text-text-secondary mb-12 text-lg max-w-2xl mx-auto">
          普段使っているSNSやアカウントです。
        </p>
        
        {/* SNSリンクのリスト */}
        {socialLinks.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-bg-primary border-2 border-accent text-text-primary font-medium rounded-sm hover:border-text-primary hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                aria-label={link.name}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <span className="group-hover:text-text-secondary transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-text-muted">
            <p className="mb-4">SNSリンクを追加する場合は、<code className="bg-bg-primary px-2 py-1 rounded text-sm">components/Contact.tsx</code>を編集してください。</p>
            <p className="text-sm">対応しているアイコン: X (Twitter), GitHub, Qiita, LinkedIn, Instagram, Email, Website</p>
          </div>
        )}
      </div>
    </section>
  )
}
