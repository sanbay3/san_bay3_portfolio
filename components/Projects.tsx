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
}

export default function Projects() {
  // プロジェクトリスト（ここに追加・編集してください）
  const projects: Project[] = [
    {
      title: 'ポートフォリオサイト',
      description: 'このサイトです。',
      link: 'https://fabulous-tulumba-816ab8.netlify.app',
    },
    // 今後追加するプロジェクトをここに記入
  ]

  return (
    <section id="projects" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          作成したプロジェクトです。（今後編集予定）
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </a>
            ) : (
              <div
                key={index}
                className="p-8 border-2 border-accent bg-bg-primary rounded-sm"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
