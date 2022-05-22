import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar" /* {styles.navbar} */>
            <nav>
                <div className="logo-home">
                    <Link href="/"><a> Home Button </a></Link>
                </div>
                <div className="nav-pagelinks">
                    <Link href="/about"><a> About </a></Link>
                    <Link href="/pageone"><a> Page One </a></Link>
                    <Link href="/pagetwo"><a> Page Two </a></Link>
                </div>
                <div className="nav-accountlinks">
                    <Link href="/login"><a> Login </a></Link>
                    <Link href="/logout"><a> Logout </a></Link>
                    <Link href="/signup"><a> Signup </a></Link>
                </div>
            </nav> 
        </div>
    )
}

export default Navbar