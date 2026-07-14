import classNames from 'classnames/bind'
import styles from './Video.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Video() {
  const ASSET_BASE_URL = 'https://dbfla6302.github.io/Wedding-Invitation/assets'
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster={`${ASSET_BASE_URL}/poster.jpg`}
        controls={false}
      >
        <source src={`${ASSET_BASE_URL}/main.webm`} type="video/webm" />
        <source src={`${ASSET_BASE_URL}/main.mp4`} type="video/mp4" />{' '}
      </video>
    </Section>
  )
}

export default Video
