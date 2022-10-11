import type { InferGetServerSidePropsType, NextPage } from 'next';

export const getServerSideProps = async (context) => {
    const { user } = context.params;
    const url = process.env.NEXTAUTH_URL;
    const res = await fetch(`${url}/api/profile/${user}`);

    return {
        props: {
            profile: await res.json(),
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
