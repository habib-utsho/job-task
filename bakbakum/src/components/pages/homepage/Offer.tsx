import Container from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Button } from "antd";
import React from "react";
import offerImg from "@/assets/images/homepage/offer.png";
import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const Offer = () => {
  return (
    <div>
      <Container className="bg-pinky">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="rounded-md bg-pinky space-y-[8px] flex-1 p-4">
            <h2 className={`text-primary text-[24px] text-center md:text-start ${pacifico.className}`}>
              Big Deal
            </h2>
            <p className="text-[28px] md:text-[48px] tracking-[-2px] text-center md:text-start font-semibold">
              <span className="text-primary ">30%</span> Off for New Customers
            </p>
            <div className="flex items-center justify-center md:justify-start !mt-[12px] md:!mt-[16px]">
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

            <div></div>
          </div>

          <figure className="relative h-[495px] w-[627px]">
            <Image src={offerImg} alt="big deal" fill />
          </figure>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
