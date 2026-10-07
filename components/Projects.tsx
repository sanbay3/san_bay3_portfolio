/**
 * Projects コンポーネント
 * 
 * プロジェクト・作品のセクション
 * タイトル・説明・リンク・日付を表示
 */

interface Project {
  title: string
  description: string
  link?: string
  github?: string // 未表示
  date?: string
}

export default function Projects() {
  // プロジェクトリスト（ここに追加・編集）
  const projects: Project[] = [
    {
      title: 'ポートフォリオサイト',
      description: 'このホームページです。',
      link: 'https://san-bay3-portfolio.pages.dev',
      date: '2026年1月',
    },
    {
      title: 'パスワードジェネレーター',
      description: '文字数や使う文字の種類を指定して、パスワードを生成するWebアプリです。',
      link: 'https://password-generator-eto.pages.dev/',
      date: '2026年2月',
    },
    {
      title: 'ストップウォッチ・タイマー',
      description: ' ストップウォッチとタイマーを切り替えて使えるWebアプリです。',
      link: 'https://stopwatch-95c.pages.dev/',
      date: '2026年3月',
    },
    {
      title: '時給計算機',
      description: '時給から給与を計算するWebアプリです。',
      link: 'https://wage-calculator.pages.dev/',
      date: '2026年4月',
    },
    {
      title: 'タスク管理（ToDo）アプリ',
      description: 'タスクの追加・完了・削除ができるToDoアプリです。',
      link: 'https://task-manager-eoj.pages.dev/',
      date: '2026年5月',
    },
    {
      title: '習慣トラッカー',
      description: '日々の習慣を記録するアプリです。',
      link: 'https://habit-tracker-e0e.pages.dev/',
      date: '2026年6月',
    },
    {
      title: 'ToDoアプリ（Next.js）',
      description: 'Next.jsで作ったタスク管理アプリです。',
      link: 'https://todo-nextjs-5m8.pages.dev/',
      date: '2026年7月',
    },
    {
      title: 'できたこと日記',
      description: '日々できたことを積み上げていくアプリです。',
      link: 'https://dekita-diary.pages.dev/',
      date: '2026年8月',
    },
    {
      title: '3文字あてゲーム',
      description: 'Wordleにインスパイアされた3文字の単語あてアプリです。',
      link: 'https://three-letter-guess.pages.dev/',
      date: '2026年9月',
    },
    {
      title: 'ポモドーロタイマー',
      description: '25分の作業と5分の休憩をくり返す、集中のためのタイマーアプリです。',
      link: 'https://pomodoro-timer-edg.pages.dev/',
      date: '2026年10月',
    },
    // {
    //   title: 'xxxアプリ',
    //   description: 'xxxのアプリです',
    //   link: 'https://xxx.pages.dev/',
    //   date: '2026年11月',
    // },
    // {
    //   title: 'xxxアプリ',
    //   description: 'xxxのアプリです',
    //   link: 'https://xxx.pages.dev/',
    //   date: '2026年12月',
    // },
    ]

  return (
    <section id="projects" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        
        <p className="text-text-muted mb-12 text-lg max-w-2xl mx-auto text-center">
          作成したプロジェクト（アプリなど）です。（まずは勉強がてら始めてみます…）
          <br />
          クリックでひらけます。
        </p>
        
        {/* プロジェクトカードのグリッド */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 新しい順に表示（リストは古い順で下に追加） */}
          {[...projects].reverse().map((project, index) => (
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
