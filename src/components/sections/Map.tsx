import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Map.module.scss'
import React, { useEffect, useRef } from 'react'
import { Location } from '@/models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

function Map({ location }: { location: Location }) {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const market = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        market.setMap(map)
      })
    }
  }, [location])

  return (
    <Section
      className={cx('container')}
      title={
        <div className={cx('wrap-header')}>
          <h2 className={cx('txt-title')}>LOCATION</h2>
          <p className={cx('txt-subtitle')}>{location.name}</p>
          <p className={cx('txt-subtitle')}>
            {location.address}
            <CopyToClipboard
              text={`${location.address}`}
              onCopy={() => {
                alert('복사가 완료되었습니다.')
              }}
            >
              <button className={cx('button')}>
                <IconCopy className={cx('ico-copy')} />
              </button>
            </CopyToClipboard>
          </p>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          <IconPin className={cx('ico-pin')} />
          길찾기
        </a>
      </div>

      <div className={cx('wrap-transport')}>
        <WayToCome
          icon={<IconBus className={cx('ico-bus')} />}
          label="버스"
          list={location.waytocome.bus}
        />

        <WayToCome
          icon={<IconSubway className={cx('ico-subway')} />}
          label="지하철"
          list={location.waytocome.metro}
        />
      </div>
    </Section>
  )
}

function WayToCome({
  icon,
  label,
  list,
}: {
  icon: React.ReactNode
  label: React.ReactNode
  list: string[]
}) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>
        {icon}
        <span>{label}</span>
      </div>

      <ul>
        {list.map((waytocome, idx) => (
          <li key={idx}>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}

function IconCopy({ className }: { className: string }) {
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
        stroke="#abc1ff"
        stroke-width="1.6"
      />
      <path
        d="M13 26.5H22.5C24.1569 26.5 25.5 25.1569 25.5 23.5V11"
        stroke="#abc1ff"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function IconPin({ className }: { className: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32">
      <path
        d="M16 3.5C10.477 3.5 6 7.876 6 13.274C6 20.311 14.495 28.116 15.461 28.979C15.769 29.254 16.231 29.254 16.539 28.979C17.505 28.116 26 20.311 26 13.274C26 7.876 21.523 3.5 16 3.5Z"
        fill="#E8C900"
      />
      <circle cx="16" cy="13" r="3.15" fill="#FFFFFF" />
    </svg>
  )
}

function IconBus({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x="7"
        y="5"
        width="18"
        height="20"
        rx="3"
        stroke="#ABC1FF"
        stroke-width="1.7"
      />
      <path
        d="M9.5 8.5H22.5V16.5H9.5V8.5Z"
        stroke="#ABC1FF"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M9 20H23"
        stroke="#ABC1FF"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <circle cx="11.5" cy="22" r="1.2" fill="#ABC1FF" />
      <circle cx="20.5" cy="22" r="1.2" fill="#ABC1FF" />
      <path
        d="M10 25V27"
        stroke="#ABC1FF"
        stroke-width="1.7"
        stroke-linecap="round"
      />
      <path
        d="M22 25V27"
        stroke="#ABC1FF"
        stroke-width="1.7"
        stroke-linecap="round"
      />
    </svg>
  )
}

function IconSubway({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x="6"
        y="4.5"
        width="20"
        height="18.5"
        rx="2.8"
        stroke="#ABC1FF"
        stroke-width="1.8"
      />
      <path
        d="M12 8.5H20"
        stroke="#ABC1FF"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <rect
        x="9"
        y="11.5"
        width="14"
        height="6"
        rx="0.8"
        stroke="#ABC1FF"
        stroke-width="1.8"
      />
      <circle cx="11.5" cy="20" r="1.4" fill="#ABC1FF" />
      <circle cx="20.5" cy="20" r="1.4" fill="#ABC1FF" />
      <path
        d="M11 23L7 28"
        stroke="#ABC1FF"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M21 23L25 28"
        stroke="#ABC1FF"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M9 25H23"
        stroke="#ABC1FF"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default Map
