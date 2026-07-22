import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Contact.module.scss'
import Accordion from '../shared/Accordion'
// import Accordion from '@shared/Accordion'
import { Person, Wedding } from '@/models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { IconCopy, IconKakaoPay, IconPhone } from '@/components/icons'

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
        <li
          className={cx({
            has_kakao: account.kakaopayLink != null,
          })}
        >
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button className={cx('button')}>
              계좌번호 복사하기 <IconCopy className={cx('ico-copy')} />
            </button>
          </CopyToClipboard>
          {account.kakaopayLink != null ? (
            <a
              href={account.kakaopayLink}
              className={cx('button', 'kakao_button')}
              target="_blank"
              rel="noreferrer"
            >
              <IconKakaoPay className={cx('ico-kakao')} /> Pay
            </a>
          ) : null}
        </li>
      </ul>
    </div>
  )
}

export default Contact
