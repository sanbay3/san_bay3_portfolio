/**
 * Projects コンポーネント
 * 
 * プロジェクト・作品を表示するセクションです。
 * 各プロジェクトのタイトル、説明、リンクなどを表示できます。
 */

// プロジェクトの型定義（TypeScript）
interface Project {
  title: string
  description: string
  link?: string // オプション（リンクがない場合もある）
  github?: string // GitHubリンク（オプション）
  date?: string // 公開日や作成日（オプション）
}

export default function Projects() {
  // プロジェクトリスト（ここに追加・編集してください）
  const projects: Project[] = [
    {
      title: 'ポートフォリオサイト',
      description: 'このホームページです。',
      link: 'https://san-bay3-portfolio.pages.dev',
      date: '2026年1月', // 公開日を記入してください
    },
    // 今後追加するプロジェクトをここに記入
  ]

  return (
    <section id="projects" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          作成したプロジェクト類です。（随時追加予定）
        </p>
        
        {/* プロジェクトカードのグリッド */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            project.link ? (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 border-2 border-accent bg-bg-primary rounded-sm hover:border-text-primary hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-text-secondary transition-colors">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-text-muted text-sm whitespace-nowrap ml-4">
                      {project.date}
                    </span>
                  )}
                </div>
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </a>
            ) : (
              <div
                key={index}
                className="p-8 border-2 border-accent bg-bg-primary rounded-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-text-muted text-sm whitespace-nowrap ml-4">
                      {project.date}
                    </span>
                  )}
                </div>
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
