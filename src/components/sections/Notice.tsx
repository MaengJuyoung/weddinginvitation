import classNames from 'classnames/bind'
import styles from './Notice.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Notice() {
  return (
    <Section title="" className={cx('container')}>
      <div className={cx('visual')}>
        <img
          src="https://res.cloudinary.com/y0qp0xrk/image/upload/q_auto,c_fill/v1783661455/wedding_01.jpg"
          alt="wedding img"
        />
        <div className={cx('colorOverlay')} />
      </div>

      <div className={cx('text')}>
        <p>
          화환 반입이 <b>불가</b>하여 정중히 사양합니다.
        </p>
        <p>보내주신 마음만 감사히 받겠습니다.</p>
      </div>
    </Section>
  )
}

export default Notice
