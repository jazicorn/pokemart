import type { NextPage } from 'next';
import InferNextPropsType from '../../lib/types/props';

export const getServerSideProps = async (context) => {
    const { user } = context;
    const url = process.env.NEXTAUTH_URL;
    const res = await fetch(`${url}/api/profile/${user}`);

    if (!res.ok) {
        return {
            props: {},
        };
    }
    return { props: res };
};

// This page returns user profile
const Profile: NextPage = ({
    data,
}: InferNextPropsType<typeof getServerSideProps>) => {
    function useData() {
        if (data == null || undefined) {
            return 'No User';
        }
        return data.name;
    }
    const getName = useData();
    return (
        <div>
            <h1>Profile</h1>
            <h1>{getName}</h1>
        </div>
    );
};

export default Profile;
