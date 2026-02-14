'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

/**
 * ScrollToTop コンポーネント
 * 
 * ページトップに戻るボタンです。
 * スクロール位置を監視し、一定量スクロールしたら表示されます。
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // スクロール位置を監視
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px以上スクロールしたら表示
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // スクロールイベントを監視
    window.addEventListener('scroll', toggleVisibility)

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // ページトップにスクロール
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-text-primary text-bg-primary rounded-full shadow-medium hover:bg-text-secondary hover:shadow-large hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2"
          aria-label="ページトップに戻る"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}
