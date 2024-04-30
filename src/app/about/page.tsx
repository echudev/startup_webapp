import SinglePerson from "@/components/About/SinglePerson";
import personData from "@/components/About/personData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DefINIT - Quienes Somos",
  description: "Descripción del equipo",
  // other metadata
};

const About = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nosotros"
        description="Somos un equipo que blablabla"
      />
      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            Conoce nuestro equipo
          </h2>

          <div className="-mx-4 flex flex-wrap ">
            {personData.map((person) => (
              <div
                key={person.id}
                className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SinglePerson person={person} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
