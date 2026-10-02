import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Qualifications from '@/components/Qualifications'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

/**
 * トップページ（各セクションを上から順に配置）
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
