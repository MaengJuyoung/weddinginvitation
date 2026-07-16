import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('logo')}>{/* <span>Our Wedding Day</span> */}</div>

      <p className={cx('credit')}>Designed &amp; Developed by Yurim</p>

      <p className={cx('copyright')}>© 2026 Yurim. All rights reserved.</p>
    </footer>
  )
}

export default Footer
