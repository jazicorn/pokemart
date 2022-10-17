import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();

    return (
        <div className="grow w-1/2 flex flex-row bg-yellow-100">
            <nav className="grow flex flex-row bg-pink-100">
                <div className="w-1/12 bg-orange-300 flex justify-center content-center items-center">
                    <Link href="/">
                        <a className="bg-pink-400 basis-24 flex justify-center content-center items-center">
                            {' '}
                            Home{' '}
                        </a>
                    </Link>
                </div>
                <div className="w-10/12 bg-stone-300 flex flex-row justify-center content-center items-center space-x-4">
                    <Link href="/home/about">
                        <a className="bg-red-100 basis-28 flex justify-center content-center items-center">
                            About
                        </a>
                    </Link>
                    <Link href="/home/pageone">
                        <a className="bg-red-300 basis-28 flex justify-center content-center items-center">
                            Page One
                        </a>
                    </Link>
                    <Link href="/home/pagetwo">
                        <a className="bg-red-500 basis-28 flex justify-center content-center items-center">
                            Page Two
                        </a>
                    </Link>
                </div>
                <div className="w-1/12 bg-lime-300 flex justify-center content-center items-center">
                    {!session && (
                        <Link href="/auth/signin">
                            <a className="bg-slate-500 basis-24 flex justify-center content-center items-cente">
                                {' '}
                                SignIn{' '}
                            </a>
                        </Link>
                    )}
                    {session && (
                        <Link href="/auth/signout">
                            <a className="bg-slate-500 basis-24 flex justify-center content-center items-cente">
                                {' '}
                                SignOut{' '}
                            </a>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
}
