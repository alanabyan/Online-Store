import Navbar from '@/components/layouts/fragments/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

const lato = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '300', '400','500', '600', '700', '800', '900'],
})

const disableNavbar = ['auth', 'admin'];

export default function App({ Component, pageProps: {session, ...pageProps}, }: AppProps) {
  const { pathname } = useRouter();
  return (
   <SessionProvider session={session}>
      <div className={lato.className}>
        {!disableNavbar.includes(pathname.split('/') [1]) && <Navbar />}
        <Component {...pageProps} />
      </div>
   </SessionProvider>
  )
}
