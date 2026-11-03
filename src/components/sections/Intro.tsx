import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Intro.module.scss'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState } from 'react'

import Text from '@shared/Text'
import HeartLine from '@/components/HeartLine'

const cx = classNames.bind(styles)

interface IntroProps {
  date: string
  locationName: string
  invitation: string
  intro: string
}

function Intro({ date, locationName, invitation, intro }: IntroProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <Section
      className={cx('container')}
      onReveal={() => {
        setIsRevealed(true)
      }}
    >
      <div className={cx('wrap-heart-line')}>{isRevealed && <HeartLine />}</div>

      <Text className={cx('invitation')}>{invitation}</Text>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', {
            locale: ko,
          })}
        </span>

        <span>{locationName}</span>
      </div>

      <Text className={cx('intro')}>{intro}</Text>
    </Section>
  )
}

export default Intro
