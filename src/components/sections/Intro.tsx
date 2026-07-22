import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Intro.module.scss'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState } from 'react'

import Text from '@shared/Text'
import HeartLine from '@/components/HeartLine'
import ContactPopup from '@/components/ContactPopup'
import { IconFlower } from '@/components/icons'

const cx = classNames.bind(styles)

interface Parent {
  name: string
  phoneNumber: string
  account: {
    bankName: string
    accountNumber: string
  }
}

interface IntroProps {
  groomName: string
  groomPhoneNumber: string
  groomParents: Parent[]

  brideName: string
  bridePhoneNumber: string
  brideParents: Parent[]

  date: string
  locationName: string
  invitation: string
  intro: string
}

function Intro({
  groomName,
  groomPhoneNumber,
  groomParents,
  brideName,
  bridePhoneNumber,
  brideParents,
  date,
  locationName,
  invitation,
  intro,
}: IntroProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  const groomContacts = [
    {
      name: groomName,
      phoneNumber: groomPhoneNumber,
      relation: '신랑',
    },
    ...groomParents.map((parent) => ({
      name: parent.name,
      phoneNumber: parent.phoneNumber,
      relation: '신랑 어머니',
    })),
  ]

  const brideContacts = [
    {
      name: brideName,
      phoneNumber: bridePhoneNumber,
      relation: '신부',
    },
    ...brideParents.map((parent, index) => ({
      name: parent.name,
      phoneNumber: parent.phoneNumber,
      relation: index === 0 ? '신부 아버지' : '신부 어머니',
    })),
  ]
  return (
    <>
      <Section
        className={cx('container')}
        onReveal={() => {
          setIsRevealed(true)
        }}
      >
        <div className={cx('wrap-heart-line')}>
          {isRevealed && <HeartLine />}
        </div>

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

        <div className={cx('wrap-persons')}>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/y0qp0xrk/image/upload/v1784078190/intro_groom.png"
                alt="신랑"
              />
            </li>

            <li>
              <span>
                <s>신랑</s> {groomName}
              </span>
            </li>

            <li className={cx('parents')}>
              <span>
                <IconFlower className={cx('ico-flower')} />
                허정완
              </span>
              ·{groomParents[0]?.name}의 아들
            </li>
          </ul>

          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/y0qp0xrk/image/upload/v1784078209/intro_bride.png"
                alt="신부"
              />
            </li>

            <li>
              <span>
                <s>신부</s> {brideName}
              </span>
            </li>

            <li className={cx('parents')}>
              {brideParents[0]?.name}·{brideParents[1]?.name}의 딸
            </li>
          </ul>
        </div>

        <div className={cx('button-wrap')}>
          <button
            type="button"
            className={cx('contact-button')}
            onClick={() => {
              setIsContactPopupOpen(true)
            }}
          >
            <span>축하 연락하기</span>
            <span className={cx('arrow')} aria-hidden="true" />
          </button>
        </div>
      </Section>

      <ContactPopup
        isOpen={isContactPopupOpen}
        groomContacts={groomContacts}
        brideContacts={brideContacts}
        onClose={() => {
          setIsContactPopupOpen(false)
        }}
      />
    </>
  )
}

export default Intro
