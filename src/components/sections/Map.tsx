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
} from '@/components/icons'

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
          level: 4,
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
          카카오맵 열기
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
