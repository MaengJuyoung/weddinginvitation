import { parseISO, format } from 'date-fns'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { memo } from 'react'

import 'react-day-picker/dist/style.css'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

const css = `
  .rdp-nav {
    display: none;
  }
  .rdp-day {
    cursor: default;
    pointer-events:none;
  }
  .rdp-weekday {
    font-weight: bold;
    font-size: 14px;
  }
  .rdp-selected .rdp-day_button{
    background-color: #7c8bd2;
    color: #fff;
    font-weight: bold;
    border: none;
  }
  .rdp-selected .rdp-day_button:hover {
    background-color: #3a7ee0;
  }

`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

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
              {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
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
            formatWeekdayName: (date) => format(date, 'eee', { locale: ko }),
          }}
        />
      </div>
    </Section>
  )
}

export default memo(Calendar)
