import '@/styles/globals.css'
import { HeaderTab } from '/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderTab/>
      <Component {...pageProps} />
    </>
  ) 
}
