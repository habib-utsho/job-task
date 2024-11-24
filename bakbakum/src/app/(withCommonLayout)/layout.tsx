import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
