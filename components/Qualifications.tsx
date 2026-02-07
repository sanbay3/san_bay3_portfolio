/**
 * Qualifications コンポーネント
 * 
 * 資格・検定を表示するセクションです。
 */

// 資格の型定義（TypeScript）
interface Qualification {
  name: string
  level?: string // レベルやスコア（オプション）
  date?: string // 取得年月（オプション）
}

export default function Qualifications() {
  // 資格リスト（ここに追加・編集してください）
  const qualifications: Qualification[] = [
    {
      name: 'TOEIC',
      level: '765点',
      date: '2025年12月', // 取得年月を記入してください
    },
    {
      name: 'AtCoder',
      level: '茶色',
      date: '2023年7月', // 取得年月を記入してください
    },
    {
      name: '情報処理安全確保支援士試験',
      date: '2021年12月', // 取得年月を記入してください
    },
    {
        name: '応用情報技術者試験',
        date: '2017年12月', // 取得年月を記入してください
      },
    {
      name: '日商簿記3級',
      date: '2017年11月', // 取得年月を記入してください
    },
    {
        name: 'ITIL Foundation',
        date: '2017年9月', // 取得年月を記入してください
    },
    ]

  return (
    <section id="qualifications" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Qualifications</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          取得済みの資格などです。（がんばるぞ・・）
        </p>
        
        {/* 資格をグリッド表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {qualifications.map((qual, index) => (
            <div
              key={index}
              className="p-6 border border-accent bg-bg-primary rounded-sm hover:border-accent-hover hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-text-primary">{qual.name}</span>
                {qual.level && (
                  <span className="text-text-muted text-sm">{qual.level}</span>
                )}
              </div>
              {qual.date && (
                <p className="text-text-muted text-xs mt-2">{qual.date}取得</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
