/**
 * Contact コンポーネント
 * 
 * 連絡先・SNSリンクを表示するセクションです。
 * SNSリンクを簡単に追加できます。
 */

// SNSリンクの型定義（TypeScript）
interface SocialLink {
  name: string
  url: string
  icon?: string // 将来的にアイコンを追加する場合
}

export default function Contact() {
  // SNSリンクリスト（ここに追加・編集してください）
  const socialLinks: SocialLink[] = [
    // 例：
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/your_username',
    // },
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/your_username',
    // },
  ]

  return (
    <section id="contact" className="section-padding bg-bg-secondary">
      <div className="container-custom text-center">
        <h2 className="section-title">Contact</h2>
        
        <p className="text-text-secondary mb-12 text-lg max-w-2xl mx-auto">
          お気軽にご連絡ください。
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
                className="px-8 py-4 bg-text-primary text-bg-primary font-medium rounded-sm hover:bg-text-secondary hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-text-muted italic">
            {/* SNSリンクを追加する場合は、components/Contact.tsxを編集してください */}
          </p>
        )}
      </div>
    </section>
  )
}
