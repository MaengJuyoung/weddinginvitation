import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Map.module.scss'
import React, { useEffect, useRef } from 'react'
import { Location } from '@/models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  IconBus,
  IconCar,
  IconCopy,
  IconParking,
  IconPin,
  IconSubway,
  IconNaverMap,
} from '@/components/icons'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

function Map({ location }: { location: Location }) {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  // 카카오 지도 생성
  useEffect(() => {
    const script = document.createElement('script')

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapContainer.current) return

        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 4,
        }

        const marker = new window.kakao.maps.Marker({
          position,
        })

        const map = new window.kakao.maps.Map(mapContainer.current, options)

        marker.setMap(map)
      })
    }

    return () => {
      script.onload = null
      script.remove()
    }
  }, [location.lat, location.lng])

  // 카카오맵: 기존 링크 사용
  const kakaoMapUrl = location.link

  // 네이버지도: 웨딩홀 상세 페이지
  const naverMapUrl = 'https://map.naver.com/p/entry/place/1769349736'

  return (
    <Section
      className={cx('container')}
      title={
        <div className={cx('wrap-header')}>
          <h2 className={cx('txt-title')}>LOCATION</h2>

          <p className={cx('txt-subtitle')}>{location.name}</p>

          <p className={cx('txt-subtitle')}>{location.address}</p>
        </div>
      }
    >
      {/* 지도 영역 */}
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer} />

        {/* 지도 및 주소 복사 버튼 */}
        <div className={cx('wrap-map-buttons')}>
          {/* 카카오맵 */}
          <a
            className={cx('btn-find-way')}
            href={kakaoMapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPin className={cx('ico-pin')} />
            카카오맵
          </a>

          {/* 네이버지도 */}
          <a
            className={cx('btn-find-way')}
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconNaverMap className={cx('ico-naver')} />
            네이버지도
          </a>

          {/* 주소 복사하기 */}
          <CopyToClipboard
            text={location.address}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button type="button" className={cx('btn-find-way')}>
              <IconCopy className={cx('ico-copy')} />
              주소복사하기
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* 교통 안내 영역 */}
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

        <WayToCome
          icon={<IconCar className={cx('ico-car')} />}
          label="자차"
          list={location.waytocome.car}
        />

        <WayToCome
          icon={<IconParking className={cx('ico-parking')} />}
          label="주차"
          list={location.waytocome.parking}
        />
      </div>
    </Section>
  )
}

// 교통 안내 공통 컴포넌트
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

export default Map
