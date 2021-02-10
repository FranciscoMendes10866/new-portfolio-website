import Head from 'next/head'

import { Nav, HomeIntro } from '../components'
import { HomeNavData } from '../components/navbar/nav.data'

const Home = () => {
  return (
    <>
      <Head>
        <title>Francisco Mendes | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Nav NavData={HomeNavData} />
        <div className="container mx-auto px-10">
          <HomeIntro />
        </div>
      </main>
    </>
  )
}

export default Home
