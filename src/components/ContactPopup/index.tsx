import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ContactPopup.module.scss'

const cx = classNames.bind(styles)

interface ContactPerson {
  name: string
  phoneNumber: string
  relation: string
}

interface ContactPopupProps {
  isOpen: boolean
  groomContacts: ContactPerson[]
  brideContacts: ContactPerson[]
  onClose: () => void
}

type ContactTab = 'groom' | 'bride'

function ContactPopup({
  isOpen,
  groomContacts,
  brideContacts,
  onClose,
}: ContactPopupProps) {
  const [activeTab, setActiveTab] = useState<ContactTab>('groom')
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    setActiveTab('groom')

    scrollYRef.current = window.scrollY

    document.documentElement.style.overflow = 'hidden'

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollYRef.current}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    return () => {
      document.documentElement.style.overflow = ''

      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''

      window.scrollTo(0, scrollYRef.current)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const contacts = activeTab === 'groom' ? groomContacts : brideContacts

  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/[^0-9]/g, '')
  }

  const handleDimmedClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={cx('dimmed')}
      role="presentation"
      onClick={handleDimmedClick}
    >
      <section
        className={cx('popup')}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
      >
        <button
          type="button"
          className={cx('closeButton')}
          aria-label="팝업 닫기"
          onClick={onClose}
        >
          <span />
          <span />
        </button>

        <header className={cx('header')}>
          <h2 id="contact-popup-title">축하 연락하기</h2>
          <p>직접 축하의 마음을 전해보세요</p>
        </header>

        <div className={cx('tabs')} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'groom'}
            className={cx('tab', {
              active: activeTab === 'groom',
            })}
            onClick={() => setActiveTab('groom')}
          >
            신랑에게
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'bride'}
            className={cx('tab', {
              active: activeTab === 'bride',
            })}
            onClick={() => setActiveTab('bride')}
          >
            신부에게
          </button>
        </div>

        <div className={cx('contactList')}>
          {contacts.map((contact) => {
            const phoneNumber = formatPhoneNumber(contact.phoneNumber)

            return (
              <article
                key={`${contact.relation}-${phoneNumber}`}
                className={cx('contactCard')}
              >
                <div className={cx('person')}>
                  <strong>{contact.name}</strong>
                  <span>{contact.relation}</span>
                </div>

                <div className={cx('buttons')}>
                  <a
                    className={cx('messageButton', {
                      bride: activeTab === 'bride',
                    })}
                    href={`sms:${phoneNumber}`}
                    aria-label={`${contact.name}에게 문자 보내기`}
                  >
                    문자 보내기
                  </a>

                  <a
                    className={cx('callButton')}
                    href={`tel:${phoneNumber}`}
                    aria-label={`${contact.name}에게 전화하기`}
                  >
                    전화하기
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default ContactPopup
