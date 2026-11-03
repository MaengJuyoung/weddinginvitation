import classNames from 'classnames/bind'
import styles from './PhotoBooth.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

const photoBoothImage = `https://res.cloudinary.com/y0qp0xrk/image/upload/v1793672256/photobooth.png`

function PhotoBooth() {
  return (
    <Section
      className={cx('container')}
      title={
        <div className={cx('wrap-header')}>
          <h2 className={cx('txt-title')}>포토부스 안내</h2>
        </div>
      }
    >
      <div className={cx('wrap-content')}>
        <div className={cx('visual')}>
          <img src={photoBoothImage} alt="웨딩홀 포토부스" loading="lazy" />
        </div>

        <div className={cx('description')}>
          <p>
            소중한 날을 기록할 수 있도록
            <br />
            포토부스를 준비했습니다.
          </p>

          <p>
            <span className={cx('highlight')}>한 장은 방명록에,</span>
            <br />
            <span className={cx('highlight')}>한 장은 추억으로</span> 간직해
            주세요.
          </p>

          <p className={cx('notice')}>
            포토부스가 혼잡할 수 있으니
            <br />
            조금 여유 있게 도착해 주세요 :)
          </p>
        </div>
      </div>
    </Section>
  )
}

export default PhotoBooth
