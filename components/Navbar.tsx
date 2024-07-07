import Image from "next/image"


const Navbar = () => {
    return (
        <header className="w-screen h-[50px] sticky top-0 bg-black center-flex px-4">
            <nav className="w-full max-w-[1200px] h-full flex justify-between lg:justify-start lg:gap-14 items-center ">
                <Image
                    src="/assets/pgovcon.webp"
                    alt="perspicacity-logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-full"
                />
                <ul className="center-flex gap-10 hidden lg:flex">
                    <li>About</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Events</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
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