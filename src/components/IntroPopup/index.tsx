import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './IntroPopup.module.scss'

const cx = classNames.bind(styles)

interface IntroPopupProps {
  onFinish?: () => void
}

function IntroPopup({ onFinish }: IntroPopupProps) {
  const [isClosing, setIsClosing] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const firstLineSrc = `https://res.cloudinary.com/y0qp0xrk/image/upload/v1793685706/wedding_brush_line1_vivid.png`
  const secondLineSrc = `https://res.cloudinary.com/y0qp0xrk/image/upload/v1793685706/wedding_brush_line2_vivid.png`

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setIsClosing(true)
    }, 4800)

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false)
      onFinish?.()
    }, 5800)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(removeTimer)
    }
  }, [onFinish])

  if (!isVisible) {
    return null
  }

  return (
    <div className={cx('introPopup', { closing: isClosing })}>
      <div
        className={cx('handwriting-wrap')}
        role="img"
        aria-label="We're getting Married!"
      >
        {/* 첫 번째 줄 */}
        <div className={cx('handwriting-line', 'first-line')}>
          <img src={firstLineSrc} alt="" />
        </div>

        {/* 두 번째 줄 */}
        <div className={cx('handwriting-line', 'second-line')}>
          <img src={secondLineSrc} alt="" />
        </div>
      </div>
    </div>
  )
}

export default IntroPopup
