/**
 * Skills コンポーネント
 * 
 * スキル・技術スタックを表示するセクションです。
 * 現在は簡単な構成ですが、将来的に拡張可能です。
 */
export default function Skills() {
  // スキルリスト（ここに追加・編集してください）
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    // 今後追加するスキルをここに記入
  ]

  return (
    <section id="skills" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          勉強中のスキルです。（今後編集予定）
        </p>
        
        {/* スキルをグリッド表示 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-accent bg-bg-secondary text-center font-medium rounded-sm hover:border-accent-hover hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
