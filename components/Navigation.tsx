'use client'

import { useState } from 'react'

/**
 * Navigation コンポーネント
 * 
 * 固定ナビゲーションバーです。
 * モバイルではハンバーガーメニュー、デスクトップでは横並びメニューを表示します。
 */
export default function Navigation() {
  // ハンバーガーメニューの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false)

  // ナビゲーションリンクのリスト
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  // メニューを閉じる関数
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-accent">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ/名前 */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              closeMenu()
            }}
            className="text-xl md:text-2xl font-bold hover:text-text-secondary transition-colors"
          >
            さんべい
          </a>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-text-secondary hover:text-text-primary font-medium transition-colors relative group"
              >
                {link.name}
                {/* ホバー時の下線アニメーション */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-text-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* ハンバーガーメニューボタン（モバイルのみ） */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:text-text-secondary transition-colors"
            aria-label="メニューを開く"
          >
            {/* ハンバーガーアイコン */}
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-sm transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
