import type { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;
    const { user } = params;
    console.log(user);
    const res = await fetch(
        `${process.env.API_ROUTES_URL}/api/profiles/${user}`
    );
    console.log(res);
    // example: http://localhost:3000/api/profiles/swagify89
    const profile = await res.json();

    return {
        props: {
            profile,
        },
    };
};

// This page returns user profile
const Profile = ({
    profile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(profile);
    if (profile == null || undefined) {
        return 'No User';
    }
    return (
        <div>
            <h1>Welcome! {profile.userName}</h1>
        </div>
    );
};

export default Profile;
