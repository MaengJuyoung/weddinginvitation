import classNames from 'classnames/bind'
import styles from './Share.module.scss'
import Section from '@shared/Section'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { IconCopy, IconExternalLink } from '@/components/icons'

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
        })}\n하우스 오브 더 라움 B1 아마리스홀`,
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
          <IconExternalLink className={cx('ico-kakao')} />
        </button>
        <CopyToClipboard
          text={SHARE_URL}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button type="button">
            {/* <span>청첩장 주소 복사하기</span> */}
            <IconCopy className={cx('ico-copy')} />
          </button>
        </CopyToClipboard>
      </div>

      {/* <div className={cx('notice')}>
        <div className={cx('notice-title')}>🤍 참고해주세요 🤍</div>

        <div className={cx('notice-content')}>
          화환 반입이 불가하여 정중히 사양합니다.
          <br />
          보내주신 마음만 감사히 받겠습니다.{' '}
        </div>
      </div> */}
    </Section>
  )
}

export default Share
