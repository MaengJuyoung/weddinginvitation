import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'

import Heading from './components/sections/Heading'
import Video from './components/sections/Video'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
// import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import Notice from './components/sections/Notice'
import Footer from './components/sections/Footer'

import useWedding from './hooks/useWedding'

import IntroPopup from '@/components/IntroPopup'

const cx = classNames.bind(styles)

function App() {
  const [introFinished, setIntroFinished] = useState(false)
  const [scrollEnabled, setScrollEnabled] = useState(false)

  const { wedding } = useWedding()

  const handleIntroFinish = () => {
    // 팝업이 완전히 사라진 순간 GIF 시작
    setIntroFinished(true)

    // GIF를 1.8초 보여준 뒤 스크롤 허용
    window.setTimeout(() => {
      setScrollEnabled(true)
    }, 1800)
  }

  useEffect(() => {
    if (scrollEnabled) {
      return
    }

    const scrollY = window.scrollY

    document.documentElement.style.overflow = 'hidden'

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
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

      window.scrollTo(0, scrollY)
    }
  }, [scrollEnabled])

  if (wedding == null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { invitation, intro },
  } = wedding

  return (
    <>
      <IntroPopup onFinish={handleIntroFinish} />
      <Heading date={date} />
      <Video introFinished={introFinished} />
      <div className={cx('container')}>
        <Intro
          groomName={wedding.groom.name}
          groomPhoneNumber={wedding.groom.phoneNumber}
          groomParents={wedding.groom.parents}
          brideName={wedding.bride.name}
          bridePhoneNumber={wedding.bride.phoneNumber}
          brideParents={wedding.bride.parents}
          date={wedding.date}
          locationName={wedding.location.name}
          invitation={wedding.message.invitation}
          intro={wedding.message.intro}
        />
        {/* <Invitation message={intro} /> */}
        <Calendar date={date} />
        <ImageGallery images={galleryImages} />
        <Map location={location} />
        <Contact groom={groom} bride={bride} />
        <Notice />
        <Share groomName={groom.name} brideName={bride.name} date={date} />
        <Footer />
      </div>
    </>
  )
}

export default App
