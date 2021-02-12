import Head from 'next/head'

import {
  Nav,
  HomeIntro,
  HomePicture,
  HomeAbout,
  HomeSkills,
  Footer,
  HomeContact,
  BackToTop,
  HomeWorks
} from '../components'
import { HomeNavData } from '../components/navbar/nav.data'

const Home = () => {
  return (
    <>
      <Head>
        <title>Francisco Mendes | Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <BackToTop />
        <Nav NavData={HomeNavData} />
        <HomeIntro />
        <HomePicture />
        <HomeAbout />
        <HomeSkills />
        <HomeWorks />
        <HomeContact />
        <Footer />
      </main>
    </>
  )
}

export default Home
