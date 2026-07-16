import { parseISO, format, differenceInMilliseconds } from 'date-fns'

import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { memo, useEffect, useMemo, useState } from 'react'

import 'react-day-picker/dist/style.css'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

const css = `
  .rdp-nav {
    display: none;
  }

  .rdp-day {
    cursor: default;
    pointer-events: none;
  }

  .rdp-day:nth-of-type(1) button {
    color: #d88589;
  }

  .rdp-day:nth-of-type(7) button {
    color: #7c8bd2;
  }

  .rdp-weekday {
    font-weight: bold;
    font-size: 14px;
  }

  .rdp-week:nth-of-type(4) .rdp-day:nth-of-type(1) button {
    color: #fff;
  }

  .rdp-selected .rdp-day_button {
    background-color: #7c8bd2;
    color: #fff;
    font-weight: bold;
    border: none;
  }

  .rdp-selected .rdp-day_button:hover {
    background-color: #3a7ee0;
  }
`

interface CalendarProps {
  date: string
  groomName?: string
  brideName?: string
}

interface RemainingTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const INITIAL_REMAINING_TIME: RemainingTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

function Calendar({
  date,
  groomName = '준혁',
  brideName = '주영',
}: CalendarProps) {
  const weddingDate = useMemo(() => parseISO(date), [date])

  const [remainingTime, setRemainingTime] = useState<RemainingTime>(
    INITIAL_REMAINING_TIME,
  )

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date()

      const remainingMilliseconds = differenceInMilliseconds(weddingDate, now)

      if (remainingMilliseconds <= 0) {
        setRemainingTime(INITIAL_REMAINING_TIME)
        return
      }

      const totalSeconds = Math.floor(remainingMilliseconds / 1000)

      const days = Math.floor(totalSeconds / (60 * 60 * 24))
      const hours = Math.floor((totalSeconds / (60 * 60)) % 24)
      const minutes = Math.floor((totalSeconds / 60) % 60)
      const seconds = totalSeconds % 60

      setRemainingTime({
        days,
        hours,
        minutes,
        seconds,
      })
    }

    updateRemainingTime()

    const timer = window.setInterval(updateRemainingTime, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [weddingDate])

  const countdownItems = [
    {
      label: 'DAYS',
      value: remainingTime.days,
    },
    {
      label: 'HOURS',
      value: remainingTime.hours,
    },
    {
      label: 'MINUTES',
      value: remainingTime.minutes,
    },
    {
      label: 'SECONDS',
      value: remainingTime.seconds,
    },
  ]

  return (
    <Section
      className={cx('container')}
      title={
        <div>
          <h2>WEDDING DAY</h2>

          <div className={cx('wrap-header')}>
            <span className={cx('txt-date')}>
              {format(weddingDate, 'yyyy.MM.dd')}
            </span>

            <span className={cx('txt-time')}>
              {format(weddingDate, 'eeee aaa h시', { locale: ko })}
            </span>
          </div>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>

        <DayPicker
          mode="single"
          month={weddingDate}
          selected={weddingDate}
          formatters={{
            formatCaption: () => '',
            formatWeekdayName: (weekdayDate) =>
              format(weekdayDate, 'eee', {
                locale: ko,
              }),
          }}
        />
      </div>

      {/* 카운트다운 */}
      <div className={cx('wrap-countdown')}>
        <ul className={cx('countdown-list')}>
          {countdownItems.map(({ label, value }) => (
            <li className={cx('countdown-item')} key={label}>
              <strong className={cx('countdown-number')}>{value}</strong>

              <span className={cx('countdown-label')}>{label}</span>
            </li>
          ))}
        </ul>

        <p className={cx('countdown-message')}>
          <strong>{groomName}</strong>
          <span className={cx('heart')}>♥</span>
          <strong>{brideName}</strong>
          <span> 결혼식이 </span>
          <em>{remainingTime.days}일</em>
          <span> 남았습니다</span>
        </p>
      </div>
    </Section>
  )
}

export default memo(Calendar)
