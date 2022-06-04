import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function MyApp({ 
  Component, 
  pageProps }: AppProps) {
  return (
    // Provider options are not required but can be useful in situations where
    // you have a short session maxAge time. Shown here with default values.
    < SessionProvider session = {pageProps.session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}


