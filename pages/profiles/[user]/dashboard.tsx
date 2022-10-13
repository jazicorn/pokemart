// home for todo list
import type { NextApiRequest, NextApiResponse } from 'next';
import { InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';

// TODO: make sure correct data response received in session
export async function getServerSideProps(context: {
    req: NextApiRequest;
    res: NextApiResponse;
}) {
    const { req } = context;
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: { destination: '/' },
        };
    }

    const res = await fetch(`${process.env.API_ROUTES_URL}/api/user/`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}

// This page returns user profile
const Dashboard = ({
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    if (user == null || undefined) {
        return 'No User';
    }
    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    );
};

export default Dashboard;
