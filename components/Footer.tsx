/**
 * Footer コンポーネント
 * 
 * ページ最下部に表示されるフッターです。
 * コピーライトや追加情報を表示します。
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-primary border-t border-accent">
      <div className="container-custom px-4 md:px-8 py-8 md:py-12">
        <div className="text-center">
          {/* コピーライト */}
          <p className="text-text-muted text-sm">
            © {currentYear} さんべい. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
