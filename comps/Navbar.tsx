import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar" /* {styles.navbar} */>
            <nav>
                <div className="logo">
                    <h1> JS-School: Dailies </h1>
                </div>
                <Link href="/"><a> Home </a></Link>
                <Link href="/linkone"><a> Link One </a></Link>
                <Link href="/linktwo"><a> Link Two </a></Link>
                <Link href="/linkthree"><a> Link Three </a></Link>
                <Link href="/login"><a> Login </a></Link>
                <Link href="/logout"><a> Logout </a></Link>
                <Link href="/signup"><a> Signup </a></Link>
            </nav> 
        </div>
    )
}

export default Navbar