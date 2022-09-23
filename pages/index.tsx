import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = (props) => (
    <div>
        <Head>
            <title>JS-Dailies</title>
            <meta
                name="description"
                content="Practice your javascript skills daily"
            />
        </Head>

        <main>
            <h1>Hello World</h1>
        </main>
    </div>
);

export default Home;
