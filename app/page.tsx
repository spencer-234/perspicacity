"use client";

import { Globe } from "@/components/aceternity/globe/globeImport";
import { Baskervville } from "next/font/google";
import { Meteors } from "@/components/aceternity/meteors/meteors";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Partners from "@/components/Partners";
import PartnerSelection from "@/components/PartnerSelection";

const bakersville = Baskervville({ weight: "400", subsets: ["latin"], preload: true });

export default function Home() {

  const [start, setStart] = useState<boolean>(false);
  const projectsRef = useRef<HTMLParagraphElement | null>(null);

  // Once full section is on page start the animations
  const startAnimation = (entries: IntersectionObserverEntry[]) => {
    const element: IntersectionObserverEntry = entries[0];

    if (element.isIntersecting) {
      setStart(true);
    } else {
      setStart(false);
    }
  }


  // use intersection observer to track bottom of the section
  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(startAnimation)
    if (observer && projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <main className="center-flex w-screen flex-col gap-14">
      {/* Intro section */}
      <section className="w-screen h-[calc(100vh-30px)] center-flex lg:justify-start overflow-hidden max-w-[2000px] relative px-4">
        <div className="z-10 text-center center-flex flex-col gap-5 lg:text-start lg:items-start lg:pl-36">
          <h1 className={`text-5xl font-extrabold main-shadow text-[#eeffe9] lg:text-7xl ${bakersville.className}`}>Perspicacity GovCon</h1>
          <p className="w-full max-w-[700px] text-xl font-semibold">
            Your Partner in Government Contract Success.
            Driving GovCon Success through People, Projects, and Technology.
          </p>
          <Link href="#" className="px-3 py-2 bg-black rounded border-white border transition-all text-lg hover:border-green-400 hover:text-green-400">Get Started Today</Link>
        </div>
        <div className="w-full h-[90%] absolute lg:left-[100px] lg:relative lg:w-[900px] lg:h-[900px]">
          <Globe />
        </div>
        <Meteors number={20} />
      </section>
      {/* Why us section */}
      <section className="w-screen center-flex py-8 px-4 flex-col max-w-[2000px] gap-9">
        <h2 className={`text-5xl font-extrabold main-shadow text-[#eeffe9] lg:text-6xl ${bakersville.className}`}>Why Us?</h2>
        <div className="text-center center-flex flex-wrap gap-8 w-full">
          <Link
            href="#"
            className="bg-[url('/assets/placeholder1.jpg')] w-full max-w-[400px] h-[500px] bg-cover rounded-lg hover:scale-105 duration-500 hover:border-green-400 hover:border-2"
          >
            <div className="w-full h-full center-flex bg-gray-800 bg-opacity-50 hover:bg-opacity-0 duration-500 first:hover:main-shadow">
              <h3 className="text-5xl font-semibold">Industry Exprience</h3>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-[url('/assets/placeholder2.jpg')] w-full max-w-[400px] h-[500px] bg-cover rounded-lg hover:scale-105 duration-500 hover:border-green-400 hover:border-2"
          >
            <div className="w-full h-full center-flex bg-gray-800 bg-opacity-50 hover:bg-opacity-0 duration-500 first:hover:main-shadow">
              <h3 className="text-5xl font-semibold">
                Solutions
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-[url('/assets/placeholder3.jpg')] w-full max-w-[400px] h-[500px] bg-cover rounded-lg hover:scale-105 duration-500 hover:border-green-400 hover:border-2"
          >
            <div className="w-full h-full center-flex bg-gray-800 bg-opacity-50 hover:bg-opacity-0 duration-500 first:hover:main-shadow">
              <h3 className="text-5xl font-semibold">
                Client-Centric Approach
              </h3>
            </div>
          </Link>
        </div>
      </section>
      {/* Partners section */}
      <section className="w-screen center-flex max-w-[2000px] mt-14 flex-col gap-11 px-4">
        <h2 className={`text-5xl font-extrabold main-shadow text-[#eeffe9] lg:text-6xl ${bakersville.className}`}>Our Partners</h2>
        <Partners />
      </section>
      {/* Become a partner section */}
      <section className="w-screen center-flex max-w-[2000px] mt-6 flex-col gap-11 px-4 pt-32 pb-4">
        <h2 className={`text-center text-4xl font-extrabold main-shadow text-[#eeffe9] lg:text-6xl ${bakersville.className}`}>Become a Perspicacity Partner</h2>
        <PartnerSelection />
      </section>
      {/* Quote */}
      <div className="w-screen center-flex max-w-[1500px] mt-14 flex-col gap-3 px-4 pb-28">
        <div className="font-bold text-3xl lg:hidden xl:text-4xl max-w-fit text-center">
          <q className={`main-shadow ${bakersville.className}`}>Building Strong, Long-Lasting Partnerships for Sustainable Success.</q>
        </div>
        {start && (
          <div className="font-bold text-3xl hidden lg:block lg:quote xl:text-4xl max-w-fit text-center">
            <q className={`main-shadow ${bakersville.className}`}>Building Strong, Long-Lasting Partnerships for Sustainable Success.</q>
          </div>
        )}
        <p
          className="self-end text-lg lg:text-3xl"
          ref={projectsRef}
        >
          &mdash; Donya Jenkins, <i className="text-gray-500">Founder, CEO</i>
        </p>
      </div>
    </main>
  );
}
