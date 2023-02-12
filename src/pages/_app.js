import '@/styles/globals.css'
import ResponsiveAppBar from '@/components/header'

export default function App({ Component, pageProps }) {

  return <>
      <ResponsiveAppBar/>
      <Component {...pageProps} />
    </>
}
