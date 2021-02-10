import 'tailwindcss/tailwind.css'

import '../styles/globals.css'
import { Social, SocialMobile } from '../components'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Social />
      <SocialMobile />
      <Component {...pageProps} />
    </>
  )
}

export default App
