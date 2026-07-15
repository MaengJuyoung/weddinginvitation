import classNames from 'classnames/bind'
import styles from './Share.module.scss'
import Section from '@shared/Section'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

const SHARE_URL = 'https://maengjuyoung.github.io/weddinginvitation/'
// const SHARE_URL = window.location.origin

function Share({ groomName, brideName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} 💙 ${brideName} 결혼합니다.`,
        description: `${format(parseISO(date), 'yyyy년 M월 d일 eeee aaa h시', {
          locale: ko,
        })}
        하우스 오브 더 라움 B1 아마리스홀`,
        imageUrl:
          'https://res.cloudinary.com/y0qp0xrk/image/upload/v1784098420/kakao_thumbnail.png',
        link: {
          mobileWebUrl: SHARE_URL,
          webUrl: SHARE_URL,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: SHARE_URL,
            webUrl: SHARE_URL,
          },
        },
      ],
    })
  }

  return (
    <Section title="" className={cx('container')}>
      <div className={cx('wrap-share')}>
        <button type="button" onClick={handleShareKakao}>
          <span>카카오톡으로 청첩장 전하기</span>
          <IconKakao className={cx('ico-kakao')} />
        </button>
        <CopyToClipboard
          text={SHARE_URL}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button type="button">
            <span>청첩장 주소 복사하기</span>
            <IconClipboard className={cx('ico-copy')} />
          </button>
        </CopyToClipboard>
      </div>

      <div className={cx('notice')}>
        <div className={cx('notice-title')}>🤍 참고해주세요 🤍</div>

        <div className={cx('notice-content')}>
          화환 반입이 불가하여 정중히 사양합니다.
          <br />
          보내주신 마음만 감사히 받겠습니다.{' '}
        </div>
      </div>
    </Section>
  )
}

function IconKakao({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M8 24L24 8M12 8H24V20"
        stroke="#777"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function IconClipboard({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x="7.5"
        y="5.5"
        width="14"
        height="18"
        rx="1.8"
        stroke="#fff"
        stroke-width="1.6"
      />
      <path
        d="M13 26.5H22.5C24.1569 26.5 25.5 25.1569 25.5 23.5V11"
        stroke="#fff"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Share
