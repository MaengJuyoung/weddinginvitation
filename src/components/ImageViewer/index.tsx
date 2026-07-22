import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
import Dimmed from '../shared/Dimmed'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swiper.css'
import { useEffect, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import generateImageUrl from '@/utils/generateImageUrl'
import { IconCloseCircle } from '@/components/icons'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images?: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY

    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    return () => {
      document.documentElement.style.overflow = ''
      document.documentElement.style.overscrollBehavior = ''

      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''

      window.scrollTo(0, scrollY)
    }
  }, [open])

  const hasNavigation = (images?.length ?? 0) > 1

  if (!open) return null

  return (
    <Dimmed>
      <button
        type="button"
        className={cx('close-button')}
        aria-label="이미지 뷰어 닫기"
        onClick={onClose}
      >
        <IconCloseCircle className={cx('icon-close')} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onTouchStart={(swiper) => {
          swiper.autoplay.stop()
        }}
        onTouchEnd={(swiper) => {
          swiper.autoplay.start()
        }}
        autoplay={
          hasNavigation
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        spaceBetween={20}
        slidesPerView={1}
        loop={hasNavigation}
        initialSlide={selectedIdx}
        navigation={hasNavigation}
        pagination={
          hasNavigation
            ? {
                type: 'fraction',
              }
            : false
        }
        className={cx('image-swiper')}
      >
        {images?.map((src, idx) => (
          <SwiperSlide key={`${src}-${idx}`}>
            <picture
              onMouseEnter={() => {
                swiperRef.current?.autoplay.stop()
              }}
              onMouseLeave={() => {
                swiperRef.current?.autoplay.start()
              }}
            >
              <source
                srcSet={generateImageUrl({
                  filename: src,
                  format: 'webp',
                  cnm: '1116',
                })}
                type="image/webp"
              />

              <img
                src={generateImageUrl({
                  filename: src,
                  format: 'jpg',
                  cnm: '1455',
                })}
                alt={`갤러리 이미지 ${idx + 1}`}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

export default ImageViewer
