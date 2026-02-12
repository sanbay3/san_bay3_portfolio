/**
 * About コンポーネント
 * 
 * 自己紹介セクションです。
 * プロフィール画像や詳細な自己紹介を表示します。
 */
export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <h2 className="section-title">About</h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
          {/* 自己紹介文をここに記入 */}
          <p>
            こんにちは、さんべいです。
          </p>
          <p>
            情報系専攻だったにも関わらず何も身につけられていないことに焦りを感じているアラサー会社員です。
            <br />モチベ維持のため学習を進めています。
            <br />ぼちぼちがんばります。
          </p>
        </div>
      </div>
    </section>
  )
}
