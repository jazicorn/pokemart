import type { NextApiRequest, NextApiResponse } from 'next'
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react"
import { useState } from 'react';
import Link from 'next/link';

// used flatmap to filter credentials from provider stack
// https://www.samanthaming.com/tidbits/80-flatmap/

// @ts-ignore
export default function SignIn( {providers, csrfToken }) {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [message, setMessage]=useState(null);
    const signInUser = async (e:any) => {
        e.preventDefault();
        let options = {redirect:false, email, password}
        const res = await signIn('credentials', options)
        setMessage(null)

        // @ts-ignore
        if (res?.error) {
            // @ts-ignore
            setMessage(res?.error)
        }
        //return router.push('/')
    }
    return (
        <div className='main'>
            <h1>Welcome</h1>

            <div className='newuser'>
                <h3>New User?</h3>
                <></>
                <Link href='/auth/register'><a>Register</a></Link>
            </div>
            <div className='credentials'>
                <form method="post" action="/api/auth/callback/credentials">
                    <input name="csrfToken" type='hidden' defaultValue={csrfToken}/>
                    <h4>Email</h4>
                    <label>
                        <input  
                            type='email' 
                            id='email' 
                            name='email' 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>   
        
                    <h4>Password</h4>
                    <label> 
                        <input 
                            type='text' 
                            id='password' 
                            name='password' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <p style={{color:'red'}}>{message}</p>
                    <button onClick={(e) => signInUser(e)}>Sign In</button>                                                
                </form>
            </div>
            {Object.values(providers).map((provider:any) => {
                const ignore = 'Credentials' || 'Email';
                return (
                    provider.name === ignore ? [] :   
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button> 
                    </div>                                      
                )                    
            })}
        </div>             
    )
}


export async function getServerSideProps(context: {req: NextApiRequest, res: NextApiResponse}) {
    const {req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
          redirect: { destination: "/" },
        };
    }
    return {
        props: {
            csrfToken: await getCsrfToken(context),
            providers: await getProviders(), 
        }
        
    }
  }
  




