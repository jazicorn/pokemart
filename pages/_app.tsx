import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ 
  Component, 
  pageProps }: AppProps) {
  return (
    < SessionProvider session = {pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}


