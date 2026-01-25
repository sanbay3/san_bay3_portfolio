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
      description: 'このサイトです。Next.jsとTypeScriptで作成しました。',
      // link: 'https://example.com', // デプロイ後のURL
      // github: 'https://github.com/username/repo', // GitHubリポジトリ
    },
    // 今後追加するプロジェクトをここに記入
  ]

  return (
    <section id="projects" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        
        {/* プロジェクトカードのグリッド */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 border border-accent bg-bg-primary rounded-sm hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">{project.description}</p>
              
              {/* リンクボタン（存在する場合のみ表示） */}
              {(project.link || project.github) && (
                <div className="flex gap-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary font-medium border-b-2 border-text-primary hover:border-text-secondary transition-colors inline-flex items-center gap-1"
                    >
                      サイトを見る
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary font-medium border-b-2 border-text-primary hover:border-text-secondary transition-colors inline-flex items-center gap-1"
                    >
                      GitHub
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
