/**
 * Hero コンポーネント
 * 
 * ページの最上部に表示される大きな見出しセクションです。
 * 名前と簡単な自己紹介を表示します。
 */
export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-bg-primary to-bg-secondary min-h-[80vh] flex items-center pt-32 md:pt-40">
      <div className="container-custom text-center">
        {/* メインの見出し */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          さんべい
        </h1>
        
        {/* サブタイトル（簡単な自己紹介） */}
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Web開発を学んでいます
        </p>
        
        {/* プロジェクトセクションへのスクロールボタン */}
        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-text-primary text-bg-primary font-medium rounded-sm hover:bg-text-secondary transition-all duration-300 hover:shadow-medium hover:-translate-y-0.5"
        >
          プロジェクトを見る
        </a>
      </div>
    </section>
  )
}
