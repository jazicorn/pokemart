import Link from 'next/link'
import { useSession } from "next-auth/react"

const Header = () => {
    const { data: session } = useSession()

    return (
        <div className="navbar">
            <nav>
                <div className="logo-home">
                    <Link href="/"><a> Home </a></Link>
                </div>
                <div className="nav-links-page">
                    <Link href="/home/about"><a> About </a></Link>
                    <Link href="/home/pageone"><a> Page One </a></Link>
                    <Link href="/home/pagetwo"><a> Page Two </a></Link>

                </div> 
                <div className="portal">
                    {!session && (
                        <Link href="/auth/signin"><a> SignIn </a></Link>
                    )}
                    {session && (
                        <Link href="/auth/signout"><a> SignOut </a></Link>
                    )}
                </div>         
            </nav>
        </div>
    )
}

export default Header
