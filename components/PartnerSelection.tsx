import Link from "next/link"

const PartnerSelection = () => {
    return (
        <div className="w-full center-flex flex-wrap gap-8 lg:flex-nowrap lg:gap-0 transition-all">
            <div className="bg-[url('/assets/bpartner.jpg')] bg-cover h-[400px] w-auto  max-w-[400px] rounded-lg bg-center lg:flex-1
            lg:rounded-r-none lg:rounded-l-lg overflow-hidden lg:max-w-[700px] lg:hover:max-w-[1000px] lg:hover:w-[1000px] lg:duration-500
            lg:border-r lg:border-green-400">
                <div className="w-full h-full flex items-center text-center pt-16 flex-col bg-gray-800 bg-opacity-60 px-4 gap-4">
                    <h3 className="font-bold text-3xl main-shadow">Business Owner</h3>
                    <p className="font-semibold text-2xl max-w-[668px]">
                        We provide customized solutions tailored to your unique business needs.{" "}
                        Click below to get a one hour FREE consultation.
                    </p>
                    <Link href="#" className="font-semibold border-2 border-black rounded-lg bg-[var(--main-green)] hover:bg-green-400 px-4 py-1 text-black">Schedule Call</Link>
                </div>
            </div>
            <div className="bg-[url('/assets/gconprof.jpg')] bg-cover h-[400px] w-auto  max-w-[400px] rounded-lg lg:flex-1
            lg:rounded-l-none lg:rounded-r-lg overflow-hidden lg:max-w-[700px] lg:hover:max-w-[1000px] lg:hover:w-[1000px] lg:duration-500
            lg:border-l lg:border-green-400">
                <div className="w-full h-full flex items-center pt-16 text-center flex-col bg-gray-800 bg-opacity-60 px-4 gap-4">
                    <h3 className="font-bold text-3xl main-shadow">GovCon Professional</h3>
                    <p className="font-semibold text-2xl max-w-[668px]">
                        Become apart of our GovCon Professionals Networking Program:{" "}
                        where collaboration meets success. Click below to get a one hour FREE consultation.
                    </p>
                    <Link href="#" className="font-semibold border-2 border-black rounded-lg bg-[var(--main-green)] hover:bg-green-400 px-4 py-1 text-black">Schedule Call</Link>
                </div>
            </div>
        </div>
    )
}

export default PartnerSelection