import FeaturedProducts from "@/components/pages/homepage/FeaturedProducts";
import Hero from "@/components/pages/homepage/Hero";
import MensCollection from "@/components/pages/homepage/MensCollection";
import Offer from "@/components/pages/homepage/Offer";
import SummerProducts from "@/components/pages/homepage/SummerProducts";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[55px] md:space-y-[75px] bg-[#f4f8ff]">
      <Hero />
      <FeaturedProducts />
      <Offer />
      <MensCollection />
      <SummerProducts />
    </div>
  );
};

export default page;
