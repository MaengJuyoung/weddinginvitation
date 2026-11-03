import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import { useState } from 'react'

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

interface ProfileProps {
  groomName: string
  groomPhoneNumber: string
  groomParents: Parent[]

  brideName: string
  bridePhoneNumber: string
  brideParents: Parent[]
}

function Profile({
  groomName,
  groomPhoneNumber,
  groomParents,
  brideName,
  bridePhoneNumber,
  brideParents,
}: ProfileProps) {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  // 신랑 연락처
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

  // 신부 연락처
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
      <Section className={cx('container')}>
        {/* 신랑 · 신부 프로필 */}
        <div className={cx('wrap-persons')}>
          {/* 신랑 */}
          <ul>
            <li className={cx('visual')}>
              <img
                src="https://res.cloudinary.com/y0qp0xrk/image/upload/v1784078190/intro_groom.png"
                alt="신랑"
              />
            </li>

            <li className={cx('person-name')}>
              <span>
                <s>신랑</s> {groomName}
              </span>
            </li>

            {/* 신랑 소개 */}
            <li className={cx('profile')}>
              <div className={cx('profile-info')}>
                <span className={cx('birth')}>93.07.17</span>
                {/* <span className={cx('mbti')}>ISFP</span> */}
              </div>
              <div className={cx('profile-mbti')}>
                <p>ISFP</p>
              </div>

              <div className={cx('profile-description')}>
                <p>장꾸 브레이크</p>
                <p>쉬는 게 좋아</p>
              </div>

              <span className={cx('hashtag')}>#크림빵 러버</span>
            </li>

            {/* 신랑 부모님 */}
            <li className={cx('parents')}>
              <span>
                <IconFlower className={cx('ico-flower')} />
                허정완
              </span>
              ·{groomParents[0]?.name}의 아들
            </li>
          </ul>

          {/* 신부 */}
          <ul>
            <li className={cx('visual')}>
              <img
                src="https://res.cloudinary.com/y0qp0xrk/image/upload/v1784078209/intro_bride.png"
                alt="신부"
              />
            </li>

            <li className={cx('person-name')}>
              <span>
                <s>신부</s> {brideName}
              </span>
            </li>

            {/* 신부 소개 */}
            <li className={cx('profile')}>
              <div className={cx('profile-info')}>
                <span className={cx('birth')}>00.01.18</span>
                {/* <span className={cx('mbti')}>ESTJ</span> */}
              </div>
              <div className={cx('profile-mbti')}>
                <p>ESTJ</p>
              </div>
              <div className={cx('profile-description')}>
                <p>장난꾸러기</p>
                <p>노는 게 좋아</p>
              </div>

              <span className={cx('hashtag')}>#파란색 러버</span>
            </li>

            {/* 신부 부모님 */}
            <li className={cx('parents')}>
              {brideParents[0]?.name}·{brideParents[1]?.name}의 딸
            </li>
          </ul>
        </div>

        {/* 축하 연락하기 버튼 */}
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

export default Profile
