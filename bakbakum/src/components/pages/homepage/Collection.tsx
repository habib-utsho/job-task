"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "@/components/ui/Container";
import menCollectionImg from "@/assets/images/homepage/men_collection.png";
import womanCollectionImg from "@/assets/images/homepage/woman_collection.png";
import kidCollectionImg from "@/assets/images/homepage/kid_collection.png";
import { Button } from "antd";
import { ArrowTopRightIcon } from "@/components/ui/icons";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Collection = () => {
  const collections = [
    {
      img: menCollectionImg,
      title: "MEN COLLECTION",
    },
    {
      img: womanCollectionImg,
      title: "WOMAN COLLECTION",
    },
    {
      img: kidCollectionImg,
      title: "KID COLLECTION",
    },
  ];

  return (
    <div>
      <Container className="overflow-hidden py-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="collection-swiper !overflow-visible !pb-10"
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index} className="!overflow-visible">
              <div className="flex items-center gap-8 md:gap-12 justify-between flex-wrap lg:flex-nowrap">
                {/* Image Section */}
                <div className="bg-pinky p-4 h-[481px] w-full lg:flex-1">
                  <figure className="relative h-[545px] w-full lg:min-w-[400px] -top-[80px]">
                    <Image
                      src={collection.img}
                      alt={`${collection.title} Image`}
                      fill
                    />
                  </figure>
                </div>
                {/* Text Section */}
                <div className="flex-1">
                  <p className="text-[28px] md:text-[48px] tracking-[-2px] text-center md:text-start font-semibold">
                    {collection.title}
                  </p>
                  <div className="flex items-center justify-center md:justify-start !mt-[12px] md:!mt-[16px]">
                    <Button
                      size="large"
                      className="!rounded-[28px]"
                      type="primary"
                    >
                      Shop Now
                    </Button>
                    <Button
                      size="large"
                      className="!rounded-full"
                      type="primary"
                      icon={<ArrowTopRightIcon />}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Collection;
