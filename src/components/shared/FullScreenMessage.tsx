import Styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'
import { IconError, IconHeart } from '@/components/icons'

const cx = classNames.bind(Styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <IconHeart className={cx('ico-heart')} />
      ) : (
        <>
          <IconError className={cx('ico-error')} />
          에러가 발생했어요 잠시 후 다시 시도해주세요
        </>
      )}
    </div>
  )
}

export default FullScreenMessage
