import { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Features />
    </>
  );
};

export default Services;
