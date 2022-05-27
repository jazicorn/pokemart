import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
//import { Flex, HStack, Text} from '@chakra-ui/layout'
//import { Button } from '@chakra-ui/react'

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <div className="navbar" /* {styles.navbar} */>
            <nav>
                <div className="logo-home">
                    <Link href="/"><a> Home Button </a></Link>
                </div>
                <div className="nav-links-page">
                    <Link href="/about"><a> About </a></Link>
                    <Link href="/pageone"><a> Page One </a></Link>
                    <Link href="/pagetwo"><a> Page Two </a></Link>
                </div>          
            </nav> 
        </div>
    )
}

export default Navbar
