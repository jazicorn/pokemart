import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div /*className={styles.container}*/>
      <Head>
        <title>JS-Dailies</title>
        <meta name="description" content="Practice your javascript skills daily" />
      </Head>
      
      <main /*className={styles.main}*/>
        <h1>Hello World</h1>
        
      </main>

    </div>
  )
}

export default Home
