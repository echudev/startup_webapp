import { Metadata } from "next";
import Features from "@/components/Features";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "DefINIT - Servicios",
  description: "Página de Servicios",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nuestros Servicios"
        description="Soluciones tecnológicas para el área educativa."
      />
      <Features />
    </>
  );
};

export default Services;
