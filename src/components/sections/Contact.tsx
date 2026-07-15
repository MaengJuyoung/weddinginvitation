import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Contact.module.scss'
import Accordion from '../shared/Accordion'
// import Accordion from '@shared/Accordion'
import { Person, Wedding } from '@/models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

function Contact({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) {
  return (
    <Section
      className={cx('container')}
      title={
        <div className={cx('wrap-header')}>
          <h2 className={cx('txt-title')}>마음 전하실 곳</h2>
          <p className={cx('txt-subtitle')}>
            참석이 어려우신 분들을 위해 기재했습니다.
            <br />
            너그러운 마음으로 양해 부탁드립니다.
          </p>
        </div>
      }
    >
      <Accordion label="신랑측">
        <ContactInfo
          type="groom"
          name={groom.name}
          account={groom.account}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          type="groom"
          name={groom.parents[0].name}
          account={groom.parents[0].account}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        {/* <ContactInfo
          name={groom.parents[1].name}
          account={groom.parents[1].account}
          phoneNumber={groom.parents[1].phoneNumber}
        /> */}
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          type="bride"
          name={bride.name}
          account={bride.account}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          type="bride"
          name={bride.parents[0].name}
          account={bride.parents[0].account}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          type="bride"
          name={bride.parents[1].name}
          account={bride.parents[1].account}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  )
}

function ContactInfo({
  type,
  name,
  account,
  phoneNumber,
}: Person & { type: 'groom' | 'bride' }) {
  return (
    <div className={cx('wrap-contact')}>
      {/* 정보표현 */}
      <div className={cx('wrap-contact-info')}>
        <span>
          <a href={`tel: ${phoneNumber}`} className={cx('button')}>
            <b>{name}</b>
            <IconPhone className={cx('ico-phone', type)} />
          </a>
        </span>
        <span
          className={cx('bankName')}
        >{`${account.bankName} | ${account.accountNumber}`}</span>
      </div>
      {/* 버튼들 */}
      <ul className={cx('wrap-buttons')}>
        <li></li>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button className={cx('button')}>
              복사하기 <IconCopy className={cx('ico-copy')} />
            </button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink != null ? (
          <li className={cx('kakao_button')}>
            <a
              href={account.kakaopayLink}
              className={cx('button')}
              target="_blank"
              rel="noreferrer"
            >
              송금하기 <IconCoin className={cx('ico-coin')} />
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

function IconPhone({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M9.15 5.5H12.3L14.1 10.15L11.95 12.3C13.15 14.8 15.2 16.85 17.7 18.05L19.85 15.9L24.5 17.7V20.85C24.5 22.05 23.55 23 22.35 23C13.85 23 7 16.15 7 7.65C7 6.45 7.95 5.5 9.15 5.5Z"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function IconCopy({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x="7.5"
        y="5.5"
        width="14"
        height="18"
        rx="1.8"
        stroke="#fff"
        stroke-width="1.6"
      />
      <path
        d="M13 26.5H22.5C24.1569 26.5 25.5 25.1569 25.5 23.5V11"
        stroke="#fff"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function IconCoin({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <defs>
        <linearGradient
          id="coinOuter"
          x1="7"
          y1="5"
          x2="25"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#FFD83D" />
          <stop offset="1" stop-color="#FFB800" />
        </linearGradient>
        <linearGradient
          id="coinInner"
          x1="10"
          y1="9"
          x2="23"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#FFF45C" />
          <stop offset="1" stop-color="#FFD400" />
        </linearGradient>
      </defs>

      <circle cx="16" cy="16" r="12" fill="url(#coinOuter)" />
      <circle cx="16" cy="16" r="9.2" fill="url(#coinInner)" />

      <path
        d="M10.4 12.2L13.2 20.2L16 13.4L18.8 20.2L21.6 12.2"
        stroke="#FF9300"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.8 14.6H13.5"
        stroke="#FF9300"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M18.5 14.6H22.2"
        stroke="#FF9300"
        stroke-width="2.5"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default Contact
