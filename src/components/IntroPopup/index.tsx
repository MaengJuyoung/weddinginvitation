import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './IntroPopup.module.scss'

const cx = classNames.bind(styles)

interface IntroPopupProps {
  onFinish?: () => void
}

function IntroPopup({ onFinish }: IntroPopupProps) {
  const text = "We're Getting Married"

  const [displayText, setDisplayText] = useState('')
  const [isClosing, setIsClosing] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    let closeTimer: number | undefined
    let removeTimer: number | undefined

    const typingTimer = window.setInterval(() => {
      currentIndex += 1
      setDisplayText(text.slice(0, currentIndex))

      if (currentIndex >= text.length) {
        window.clearInterval(typingTimer)

        // 문장이 완성된 뒤 1.2초 후 팝업 페이드아웃 시작
        closeTimer = window.setTimeout(() => {
          setIsClosing(true)
        }, 1200)

        // 페이드아웃이 끝난 뒤 팝업 제거 + App에 종료 알림
        removeTimer = window.setTimeout(() => {
          setIsVisible(false)
          onFinish?.()
        }, 2200)
      }
    }, 110)

    return () => {
      window.clearInterval(typingTimer)

      if (closeTimer !== undefined) {
        window.clearTimeout(closeTimer)
      }

      if (removeTimer !== undefined) {
        window.clearTimeout(removeTimer)
      }
    }
  }, [onFinish])

  if (!isVisible) {
    return null
  }

  return (
    <div className={cx('introPopup', { closing: isClosing })}>
      <p className={cx('text')}>
        {displayText}
        {!isClosing && <span className={cx('cursor')} />}
      </p>
    </div>
  )
}

export default IntroPopup
