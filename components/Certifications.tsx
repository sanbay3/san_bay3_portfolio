/**
 * Certifications コンポーネント
 * 
 * 資格・検定を表示するセクションです。
 */

// 資格の型定義（TypeScript）
interface Certification {
  name: string
  level?: string // レベルやスコア（オプション）
}

export default function Certifications() {
  // 資格リスト（ここに追加・編集してください）
  const certifications: Certification[] = [
    {
      name: 'TOEIC',
      level: '765点',
    },
    {
      name: 'AtCoder',
      level: '茶色',
    },
    {
      name: '応用情報技術者試験',
    },
    {
      name: '情報処理安全確保支援士試験',
    },
    {
      name: 'ITIL Foundation',
    },
    {
      name: '簿記3級',
    },
    ]

  return (
    <section id="certifications" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Certifications</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          取得済みの資格などです。（がんばるぞ・・）
        </p>
        
        {/* 資格をグリッド表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 border border-accent bg-bg-primary rounded-sm hover:border-accent-hover hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-text-primary">{cert.name}</span>
                {cert.level && (
                  <span className="text-text-muted text-sm">{cert.level}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
