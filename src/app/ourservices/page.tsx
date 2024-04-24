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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Features />
    </>
  );
};

export default Services;
