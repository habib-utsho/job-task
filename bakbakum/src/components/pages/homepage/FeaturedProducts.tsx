import Container from "@/components/ui/Container";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const FeaturedProducts = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center gap-6">
          <div>
            <p className="text-primary font-normal text-[17px] md:text-[19px]">
              FEATURED PRODUCT
            </p>
            <h2 className="font-semibold text-[24px] md:text-[28px]">
              New Arrivals
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 border text-primary hover:text-white border-primary rounded-full bg-white hover:bg-primary flex items-center justify-center cursor-pointer transition-all duration-500">
              <ArrowLeftOutlined />
            </span>
            <span className="h-7 w-7 border text-primary hover:text-white border-primary rounded-full bg-white hover:bg-primary flex items-center justify-center cursor-pointer transition-all duration-500">
              <ArrowRightOutlined />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
