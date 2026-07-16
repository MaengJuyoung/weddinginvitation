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

  .rdp-month{
    padding: 10px 0 40px;
    border-top: 1px solid #b5c7ed;
    border-bottom: 1px solid #b5c7ed;
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

type WeddingStatus = 'before' | 'ongoing' | 'ended'

const INITIAL_REMAINING_TIME: RemainingTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

const ONE_DAY = 1000 * 60 * 60 * 24

function Calendar({
  date,
  groomName = '준혁',
  brideName = '주영',
}: CalendarProps) {
  const weddingDate = useMemo(() => parseISO(date), [date])

  // 결혼식 종료 시간: 당일 오후 2시
  const weddingEndDate = useMemo(() => {
    const endDate = new Date(weddingDate)
    endDate.setHours(14, 0, 0, 0)

    return endDate
  }, [weddingDate])

  const [remainingTime, setRemainingTime] = useState<RemainingTime>(
    INITIAL_REMAINING_TIME,
  )

  const [weddingStatus, setWeddingStatus] = useState<WeddingStatus>('before')

  const [passedDays, setPassedDays] = useState(0)

  useEffect(() => {
    const updateWeddingTime = () => {
      const now = new Date()

      // 오후 2시 이후
      if (now >= weddingEndDate) {
        const passedMilliseconds = differenceInMilliseconds(now, weddingEndDate)

        setWeddingStatus('ended')
        setPassedDays(Math.floor(passedMilliseconds / ONE_DAY))
        setRemainingTime(INITIAL_REMAINING_TIME)

        return
      }

      // 오후 12시부터 오후 2시 전까지
      if (now >= weddingDate) {
        setWeddingStatus('ongoing')
        setPassedDays(0)
        setRemainingTime(INITIAL_REMAINING_TIME)

        return
      }

      // 결혼식 시작 전
      const remainingMilliseconds = differenceInMilliseconds(weddingDate, now)

      const totalSeconds = Math.floor(remainingMilliseconds / 1000)

      setWeddingStatus('before')
      setPassedDays(0)

      setRemainingTime({
        days: Math.floor(totalSeconds / (60 * 60 * 24)),
        hours: Math.floor((totalSeconds / (60 * 60)) % 24),
        minutes: Math.floor((totalSeconds / 60) % 60),
        seconds: totalSeconds % 60,
      })
    }

    updateWeddingTime()

    const timer = window.setInterval(updateWeddingTime, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [weddingDate, weddingEndDate])

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
              {format(weddingDate, 'yyyy.MM.dd eeee', {
                locale: ko,
              })}{' '}
              |{' '}
              {format(weddingDate, 'aaa h시', {
                locale: ko,
              })}
            </span>

            {/* <span className={cx('txt-time')}>
              {format(weddingDate, 'eeee aaa h시', {
                locale: ko,
              })}
            </span> */}
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
          <span
            className={cx('couple-name', {
              ongoing: weddingStatus === 'ongoing',
            })}
          >
            <strong>{groomName}</strong>
            <span className={cx('heart')}>♥</span>
            <strong>{brideName} </strong>
          </span>
          {weddingStatus === 'ended' ? (
            <>
              <span>결혼식이 </span>
              <em>{passedDays}일</em>
              <span> 지났습니다</span>
            </>
          ) : weddingStatus === 'ongoing' ? (
            <span className={cx('now-wedding')}>결혼식이 진행 중입니다 💍</span>
          ) : (
            <>
              <span>결혼식이 </span>
              <em>{remainingTime.days}일</em>
              <span> 남았습니다</span>
            </>
          )}
        </p>
      </div>
    </Section>
  )
}

export default memo(Calendar)
