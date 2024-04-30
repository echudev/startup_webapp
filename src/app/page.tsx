import ScrollUp from "@/components/Common/ScrollUp";
import Link from "next/link";
import CirclesBkg from "./circlesBkg";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import homeImage from "../../public/images/homeImage.svg";
import { Metadata } from "next";
import { Banner } from "./banner";

export const metadata: Metadata = {
  title: "DefINIT - Inicio",
  description: "Homepage de nuestra startup",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="my-3 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-400 bg-clip-text text-6xl font-black leading-tight text-transparent sm:leading-tight md:leading-tight">
                  Bienvenido a DefINIT
                </h1>
                <h2 className="mb-5 text-2xl leading-tight text-black opacity-80 dark:text-white sm:leading-tight md:leading-tight">
                  Constructores de soluciones educativas a medida
                </h2>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="mt-16 rounded bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Trabajemos Juntos!
                  </Link>
                  {/* <Link
                    href="/"
                    className="inline-block rounded bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    quiero ver más
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={homeImage}
          alt={"imagen"}
          className="z-1 mx-auto my-20 w-[500px] opacity-90"
        />
        <Brands />
        <CirclesBkg />
        <Testimonials />
      </section>
    </>
  );
}
