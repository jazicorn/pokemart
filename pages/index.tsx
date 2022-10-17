import type { NextPage } from 'next';
import Head from 'next/head';
import Welcome from '../components/site/Welcome';

const Home: NextPage = () => (
    <div className="grow flex flex-col bg-teal-200">
        <Head>
            <title>Project</title>
            <meta name="description" content="...about" />
        </Head>

        <Welcome />
    </div>
);

export default Home;
