import type { NextPage, GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import { Profile } from '../../lib/interfaces/schema';

// Get staticsideprops for profile data
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.API_ROUTES_URL}/api/profiles/`);
    const profiles = await res.json();
    return {
        props: {
            profiles,
        },
    };
};

const Profiles: NextPage = ({
    profiles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            {Object.values(profiles).map((profile: Profile) => {
                return (
                    <div key={profile.id}>
                        <>{profile.userName}</>
                    </div>
                );
            })}
        </div>
    );
};

export default Profiles;
