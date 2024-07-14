import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

interface Props {
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ setMenuOpen }: Props) => {

    const { data: session } = useSession();

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div className="absolute top-0 right-[-600px] w-[50%] max-w-[400px] h-screen bg-black lg:hidden flex flex-col pl-7 pr-7 border-l-2 border-green-400 open-mobile pt-4">
            <Image
                src="/assets/close.svg"
                width={0}
                height={0}
                sizes="100vw"
                alt="close-menu"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="self-end w-[40px] h-[40px]"
            />
            <ul className="mt-8 flex flex-col items-end gap-[30px] text-base md:text-xl font-semibold">
                <li className="nav-link">About</li>
                <li className="nav-link">Solutions</li>
                <li className="nav-link">Resources</li>
                <li className="nav-link">Events</li>
                <li className="nav-link">Careers</li>
                <li className="nav-link">Contact</li>
                {session?.user ? (
                    <li className="nav-link" onClick={() => signOut()}>Sign out</li>
                ) : (
                    <li className="nav-link" onClick={() => closeMenu()}><Link href="/login">Login</Link></li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar