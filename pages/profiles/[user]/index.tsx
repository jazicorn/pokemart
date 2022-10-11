import type { GetServerSideProps, NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;
    const { user } = params;
    const res = await fetch(
        `${process.env.API_ROUTES_URL}/api/profile/${user}`
    );
    // example: http://localhost:3000/api/profiles/swagify89
    const profile = await res.json();

    return {
        props: {
            profile,
        },
    };
};

// This page returns user profile
const Profile: NextPage = ({
    profile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(profile);
    if (profile == null || undefined) {
        return 'No User';
    }
    return (
        <div>
            <h1>Profile</h1>
            <h1>{profile.getName}</h1>
        </div>
    );
};

export default Profile;
