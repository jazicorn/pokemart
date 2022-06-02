import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react"

// used flatmap to filter credentials from provider stack
// https://www.samanthaming.com/tidbits/80-flatmap/

// TODO: create validation to make sure user name and password is entered

// @ts-ignore:next-line
export default function SignIn( {providers, csrfToken }) {
    return (
        <div className='main'>
            <h1>Welcome</h1>

            <form method='post' action='api/auth/callback/credentials'>
                <input name="csrfToken" type='hidden' defaultValue={csrfToken}/>
                <h4>Email</h4>
                <label>
                <input type='text' id='email' name='email'/>
                </label>   
    
                <h4>Password</h4>
                <label> 
                    <input type='text' id='password' name='password'/>
                </label>

                <button type='submit' >Sign In</button>                                                
            </form>
    
            {Object.values(providers).map((provider:any) => {
                const ignore = 'Credentials' || 'Email';
                return (
                    provider.name === ignore ? [] :                   
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>               
                )                    
            })}
        </div>
    )
}

SignIn.getInitialProps = async (context: {req: any, res: any}) => {
    const {req, res} = context;
    const session = await getSession({req});
    
    if(session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end()
        return;
    }
    return {
        session: undefined,
        csrfToken: await getCsrfToken(context),
        providers: await getProviders(),
    }    
}




