import Image from "next/image";

const Partners = () => {
    return (
        <div className="center-flex flex-wrap gap-6 w-full max-w-[1000px]">
            <Image
                src="/assets/partners/adp.png"
                alt="ADP"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/bbg.png"
                alt="business-benefits-group"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/diener.png"
                alt="diener-and-associates"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/employeeN.png"
                alt="employee-navigator"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/paylocity.png"
                alt="paylocity"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/smile.png"
                alt="smile-therapy-services"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/TPCA.webp"
                alt="twin-pearls-consulting-agency"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
            <Image
                src="/assets/partners/unanet.webp"
                alt="unanet"
                width={0}
                height={0}
                sizes="100vw"
                className="partner-item"
            />
        </div>
    )
}

export default Partners