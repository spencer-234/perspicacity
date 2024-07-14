"use client";

import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { signOut } from "next-auth/react";
import Sidebar from "./Sidebar";


const Navbar = () => {

    const { data: session } = useSession();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="w-screen h-[50px] sticky top-0 bg-black center-flex px-4 border-b-2 border-green-400 z-[999]">
            <nav className="w-full max-w-[1200px] h-full flex justify-between lg:justify-start lg:gap-14 items-center relative">
                <Link href="/" className="h-full">
                    <Image
                        src="/assets/pgovcon.webp"
                        alt="perspicacity-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-full"
                    />
                </Link>
                <ul className="center-flex gap-10 hidden lg:flex">
                    <li className="nav-link">About</li>
                    <li className="nav-link">Solutions</li>
                    <li className="nav-link">Resources</li>
                    <li className="nav-link">Events</li>
                    <li className="nav-link">Careers</li>
                    <li className="nav-link">Contact</li>
                </ul>
                {!session?.user && <Link href="/login" className="nav-link ml-auto hidden lg:block">Login</Link>}
                {session?.user ? (
                    <div className="relative ml-auto center-flex flex-col">
                        <Image
                            src={session.user.image ? session.user.image : "/assets/default-user.webp"}
                            width={35}
                            height={35}
                            alt="profile-picture"
                            className="rounded-full bg-white cursor-pointer"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        />
                        <button onClick={() => signOut()} className={`absolute top-11 whitespace-nowrap hidden lg:${menuOpen && 'block'} rounded-lg bg-black py-1 px-3 border-2 border-green-400 hover:text-green-400`}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Image
                        src="/assets/menu.svg"
                        width={35}
                        height={35}
                        alt="menu"
                        className="lg:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    />
                )}
                {menuOpen && <Sidebar setMenuOpen={setMenuOpen} />}
            </nav>
        </header>
    )
}

export default Navbar