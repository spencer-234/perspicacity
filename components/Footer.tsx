import { Baskervville } from "next/font/google";

const bakersville = Baskervville({ weight: "400", subsets: ["latin"], preload: true });

const Footer = () => {
    return (
        <footer className="w-full center-flex flex-col py-6 px-4 gap-6 text-center">
            <h3
                className={`${bakersville.className} font-bold text-lg md:text-xl`}
            >
                Perspicacity GovCon
            </h3>
            <span className="text-sm">Copyright &copy; 2024 Perspicacity GovCon &mdash; All Rights Reserved.</span>
        </footer>
    )
}

export default Footer