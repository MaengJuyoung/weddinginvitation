import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '@shared/Section'
import ImageViewer from '../ImageViewer'
import { useState } from 'react'
import generateImageUrl from '@/utils/generateImageUrl'

const cx = classNames.bind(styles)

function ImageGallery({ images = [] }: { images?: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const [showAll, setShowAll] = useState(false)

  const open = selectedIdx > -1

  // 처음에는 9개, 더보기 클릭 후에는 전체 이미지
  const visibleImages = showAll ? images : images.slice(0, 9)

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  const handleToggleImages = () => {
    setShowAll((prev) => !prev)
  }

  return (
    <>
      <Section
        className={cx('container')}
        title={
          <div className={cx('title')}>
            <h2>GALLERY</h2>
          </div>
        }
      >
        <ul className={cx('wrap-images')}>
          {visibleImages.map((src, idx) => (
            <li
              key={`${src}-${idx}`}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(idx)}
            >
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_240,h_240,q_auto,c_fill',
                    cnm: '1116',
                  })}
                  type="image/webp"
                />

                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                    option: 'w_240,h_240,c_fill,q_auto',
                    cnm: '1455',
                  })}
                  alt={`갤러리 이미지 ${idx + 1}`}
                />
              </picture>
            </li>
          ))}
        </ul>

        {images.length > 9 && (
          <button
            type="button"
            className={cx('btn-more')}
            onClick={handleToggleImages}
          >
            {showAll ? '접기' : '더보기'}
            <IconArrowDown
              className={cx('ico-arrow-down', {
                open: showAll,
              })}
            />
          </button>
        )}
      </Section>

      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg className={className} version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}

export default ImageGallery
