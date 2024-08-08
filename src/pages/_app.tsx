import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const lato = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '300', '400','500', '600', '700', '800', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lato.className}>
      <Component {...pageProps} />
    </div>
  )
}
