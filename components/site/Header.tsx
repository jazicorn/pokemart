import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();

    return (
        <div className="grow w-1/2 flex flex-row bg-yellow-100">
            <nav className="grow flex flex-row bg-pink-100">
                <div className="w-1/12 bg-orange-300 flex justify-start">
                    <Link href="/">
                        <a className="bg-pink-400"> Home </a>
                    </Link>
                </div>
                <div className="w-10/12 bg-stone-300 flex justify-center">
                    <Link href="/home/about">
                        <a className="bg-red-100"> About </a>
                    </Link>
                    <Link href="/home/pageone">
                        <a className="bg-red-300"> Page One</a>
                    </Link>
                    <Link href="/home/pagetwo">
                        <a className="bg-red-500"> Page Two </a>
                    </Link>
                </div>
                <div className="w-1/12 bg-lime-300">
                    {!session && (
                        <Link href="/auth/signin">
                            <a> SignIn </a>
                        </Link>
                    )}
                    {session && (
                        <Link href="/auth/signout">
                            <a> SignOut </a>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
}
