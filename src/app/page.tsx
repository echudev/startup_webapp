import ScrollUp from "@/components/Common/ScrollUp";
import Link from "next/link";
import CirclesBkg from "./circlesBkg";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import homeImage from "../../public/images/homeImage.svg";
import { Metadata } from "next";

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
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Desarrollamos software para la pequeña y mediana empresa?
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Un texto que nos vende y nos deja bien parados para que el que
                  lo lea confie en nosotros y lo inspire a contratarnos (?)
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
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
          className="z-1 m-8 mx-auto w-[500px] opacity-90"
        />
        <Brands />
        <CirclesBkg />
        <Testimonials />
      </section>
    </>
  );
}
