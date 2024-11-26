import React from "react";
import banner from "@/assets/images/homepage/hero.png";
import bannerGradient from "@/assets/images/homepage/hero_gradient.png";
import { Button } from "antd";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  ReconciliationOutlined,
  ReloadOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import Container from "@/components/ui/Container";

const Hero = () => {
  const heroBottomItems = [
    {
      title: "FREE SHIPPING",
      description: "BUY BDT 3000+ & GET FREE DELIVERY",
      icon: <TruckOutlined />,
    },
    {
      title: "7 DAYS EXCHANGE",
      description: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS",
      icon: <ReloadOutlined />,
    },
    {
      title: "100% PAYMENT SECURE",
      description: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
      icon: <ReconciliationOutlined />,
    },
  ];

  return (
    <div>
      <div
        className="h-[500px] bg-no-repeat bg-cover bg-center-center flex items-center justify-center text-white text-center bg-black/60 bg-blend-overlay"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="space-y-[6px] md:space-y-[8px]">
          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold">
            Elevate Your Everyday Style
          </h2>
          <p className="text-[19px] font-normal">
            Discover the Latest Trends in Sustainable Fashion
          </p>
          <div className="flex items-center justify-center !mt-[12px] md:!mt-[16px]">
            <Button size="large" className="!rounded-[28px]" type="primary">
              Shop Now
            </Button>
            <Button
              size="large"
              className="!rounded-full"
              type="primary"
              icon={<ArrowRightIcon />}
            />
          </div>
        </div>
      </div>

      {/* Hero bottom */}
      <div
        className="bg-primary bg-blend-overlay  py-4"
        style={{ backgroundImage: `url(${bannerGradient.src})` }}
      >
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroBottomItems.map((item, index) => (
            <div key={index} className="flex justify-center text-white gap-4">
              <span className="!text-[24px]">{item.icon}</span>
              <div className="space-y-1">
                <h4 className="text-[18px] md:text-[19px] font-semibold">
                  {item.title}
                </h4>
                <p className="text-[12px] md:text-[13px] font-thin">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
