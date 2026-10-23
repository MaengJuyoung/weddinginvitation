import { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Video.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

interface VideoProps {
  introFinished: boolean
  onPlay?: () => void
}

function Video({ introFinished, onPlay }: VideoProps) {
  const ASSET_BASE_URL =
    'https://maengjuyoung.github.io/weddinginvitation/assets'

  const videoRef = useRef<HTMLVideoElement>(null)
  const hasPlayedRef = useRef(false)

  useEffect(() => {
    if (!introFinished) return

    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    video.play().catch(() => {
      // 자동 재생 실패 시 poster 유지
    })
  }, [introFinished])

  const handlePlaying = () => {
    if (hasPlayedRef.current) return

    hasPlayedRef.current = true
    onPlay?.()
  }

  return (
    <Section className={cx('container')} useReveal={false}>
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="auto"
        poster={`${ASSET_BASE_URL}/main.jpg`}
        onPlaying={handlePlaying}
      >
        <source src={`${ASSET_BASE_URL}/main.mp4`} type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
