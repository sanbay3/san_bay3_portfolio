/**
 * About コンポーネント
 * 
 * 自己紹介セクションです。
 * プロフィール画像や詳細な自己紹介を表示します。
 */
export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">About</h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
          {/* 自己紹介文をここに記入してください */}
          <p>
            こんにちは、さんべいです。
          </p>
          <p>
            現在、Web開発の学習を進めています。
            シンプルで使いやすいWebサイトを作ることを目指しています。
          </p>
        </div>
      </div>
    </section>
  )
}
