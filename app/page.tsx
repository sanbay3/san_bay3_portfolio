import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

/**
 * Home ページコンポーネント
 * 
 * ポートフォリオサイトのメインページです。
 * 各セクションコンポーネントを順番に配置しています。
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ナビゲーションバー */}
      <Navigation />
      
      {/* Heroセクション：最初の大きな見出しエリア */}
      <Hero />
      
      {/* Aboutセクション：自己紹介 */}
      <About />
      
      {/* Skillsセクション：スキル・技術スタック */}
      <Skills />
      
      {/* Certificationsセクション：資格・検定 */}
      <Certifications />
      
      {/* Projectsセクション：プロジェクト・作品 */}
      <Projects />
      
      {/* Experienceセクション：経歴 */}
      <Experience />
      
      {/* Contactセクション：連絡先 */}
      <Contact />
    </main>
  )
}
