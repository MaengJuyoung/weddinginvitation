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
import Footer from './components/sections/Footer'

import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding } = useWedding()

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
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        groomParents={groom.parents}
        brideName={bride.name}
        brideParents={bride.parents}
        locationName={location.name}
        date={date}
        invitation={invitation}
        intro={intro}
      />
      {/* <Invitation message={intro} /> */}
      <Calendar date={date} />
      <ImageGallery images={galleryImages} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <Footer />
    </div>
  )
}

export default App
