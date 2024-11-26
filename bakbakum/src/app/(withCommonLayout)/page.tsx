import FeaturedProducts from "@/components/pages/homepage/FeaturedProducts";
import Hero from "@/components/pages/homepage/Hero";
import Collection from "@/components/pages/homepage/Collection";
import Offer from "@/components/pages/homepage/Offer";
import SummerProducts from "@/components/pages/homepage/SummerProducts";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[55px] md:space-y-[75px] bg-[#f4f8ff]">
      <Hero />
      <FeaturedProducts />
      <Offer />
      <Collection />
      <SummerProducts />
    </div>
  );
};

export default page;
