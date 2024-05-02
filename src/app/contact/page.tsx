import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DefINIT - Contacto",
  description: "Página de Contacto",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contactanos!" description="" />
      <Contact />
    </>
  );
};

export default ContactPage;
