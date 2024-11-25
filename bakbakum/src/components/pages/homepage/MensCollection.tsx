import Container from "@/components/ui/Container";
import React from "react";
import menCollectionImg from "@/assets/images/homepage/men_collection.png";
import { Button } from "antd";
import { ArrowRightIcon } from "@/components/ui/icons";
import Image from "next/image";

const MensCollection = () => {
  return (
    <div>
      <Container className="flex items-center gap-8 md:gap-12 justify-between flex-wrap lg:flex-nowrap">
        <div className="bg-pinky p-4 h-[481px] w-full lg:flex-1">
          <figure className="relative h-[545px] w-full lg:w-[450px] -top-[80px]">
            <Image src={menCollectionImg} alt="menCollectionImg" fill />
          </figure>
        </div>
        <div className="flex-1">
          <p className="text-[28px] md:text-[48px] tracking-[-2px] text-center md:text-start font-semibold">
            MEN COLLECTION
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
        </div>
      </Container>
    </div>
  );
};

export default MensCollection;
