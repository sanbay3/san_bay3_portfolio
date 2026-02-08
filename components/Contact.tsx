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

// Qiitaのアイコン（公式ロゴを使用）
// 静的エクスポート時は通常のimgタグを使用
const QiitaIcon = () => (
  <img
    src="/qiita-icon.png"
    alt="Qiita"
    width={24}
    height={24}
    className="w-6 h-6"
  />
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
    {
      name: 'Qiita',
      url: 'https://qiita.com/san_bay3',
      icon: <QiitaIcon />,
    },
    // {
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
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          普段使っているSNSなどです。
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
