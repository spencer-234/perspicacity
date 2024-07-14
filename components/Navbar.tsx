import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
    return (
        <header className="w-screen h-[50px] sticky top-0 bg-black center-flex px-4 border-b-2 border-green-400 z-[999]">
            <nav className="w-full max-w-[1200px] h-full flex justify-between lg:justify-start lg:gap-14 items-center ">
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
                <Link href="/login" className="nav-link ml-auto hidden lg:block">Login</Link>
                <Image
                    src="/assets/menu.svg"
                    width={40}
                    height={40}
                    alt="menu"
                    className="lg:hidden"
                />
            </nav>
        </header>
    )
}

export default Navbar