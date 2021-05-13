import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import FacebookPixel from '../components/FacebookPixel'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
    <title>My new cool app</title>
  </Head>
  return (
    <FacebookPixel>
      <Component {...pageProps} />
    </FacebookPixel>
  )
}

export default MyApp
