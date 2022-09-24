import type { NextApiRequest, NextApiResponse } from 'next';
import {
    getProviders,
    signIn,
    getSession,
    getCsrfToken,
} from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import Link from 'next/link';

export async function getServerSideProps(context: {
    req: NextApiRequest;
    res: NextApiResponse;
}) {
    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { destination: '/' },
        };
    }
    return {
        props: {
            csrfToken: await getCsrfToken(context),
            providers: await getProviders(),
        },
    };
}

// TODO finish adding types to errors on this page
// react types for events | https://stackoverflow.com/questions/42081549/typescript-react-event-types
// Maybe add these types to my lib/types folder as exports?
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

interface Profile {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
}

// used flatmap to filter credentials from provider stack | https://www.samanthaming.com/tidbits/80-flatmap/
export default function SignIn({
    providers,
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const signInUser = async (e) => {
        e.preventDefault();
        const options = { redirect: false, email, password };
        const res = await signIn('credentials', options);
        setMessage(null);

        if (res?.error) {
            setMessage(res?.error);
        }
        // return router.push('/')
    };
    return (
        <div className="main">
            <h1>Welcome</h1>

            <div className="newuser">
                <h3>New User?</h3>

                <Link href="/auth/register">
                    <a>Register</a>
                </Link>
            </div>
            <div className="credentials">
                <form method="post" action="/api/auth/callback/credentials">
                    <input
                        name="csrfToken"
                        type="hidden"
                        defaultValue={csrfToken}
                    />
                    <h4>Email</h4>
                    <label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e: InputEvent) =>
                                setEmail(e.target.value)
                            }
                        />
                    </label>

                    <h4>Password</h4>
                    <label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e: InputEvent) =>
                                setPassword(e.target.value)
                            }
                        />
                    </label>
                    <p style={{ color: 'red' }}>{message}</p>
                    <button onClick={(e: ButtonEvent) => signInUser(e)}>
                        Sign In
                    </button>
                </form>
            </div>
            {Object.values(providers).map((provider: Profile) => {
                const ignore = 'Credentials' || 'Email';
                return provider.name === ignore ? (
                    []
                ) : (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
