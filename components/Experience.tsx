/**
 * Experience コンポーネント
 * 
 * 経歴・経験を表示するセクションです。
 * 現在は簡単な構成ですが、将来的に拡張可能です。
 */

// 経歴の型定義（TypeScript）
interface ExperienceItem {
  period: string
  title: string
  description: string
}

export default function Experience() {
  // 経歴リスト（ここに追加・編集してください）
  const experiences: ExperienceItem[] = [
    {
      period: '2020 - 現在',
      title: '学習開始',
      description: '焦りを感じはじめ、色々と学習を開始しました',
    },
    // 今後追加する経歴をここに記入
    ]

  return (
    <section id="experience" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <h2 className="section-title">Experience</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          ざっくりとした経験です。（今後編集予定）
        </p>
        
        {/* 経歴のタイムライン表示 */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-accent hover:border-accent-hover transition-colors group"
            >
              {/* タイムラインドット */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-text-primary rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform"></div>
              
              <p className="text-text-muted text-sm font-medium mb-2">{exp.period}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-text-secondary transition-colors">
                {exp.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
