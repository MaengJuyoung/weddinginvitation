import classNames from 'classnames/bind'
import styles from './Section.module.scss'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)

function Section({
  children,
  className,
  title,
  useReveal = true,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
  useReveal?: boolean
}) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(!useReveal)

  useEffect(() => {
    if (!useReveal) return

    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        observer.unobserve(entry.target)
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -30% 0px',
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [useReveal])

  return (
    <section
      ref={sectionRef}
      className={cx('container', className, {
        visible: isVisible,
      })}
    >
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}

      {children}
    </section>
  )
}

export default Section
