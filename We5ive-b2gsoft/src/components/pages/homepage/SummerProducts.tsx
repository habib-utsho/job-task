"use client";
import ProductCard from "@/components/ui/card/ProductCard";
import Container from "@/components/ui/Container";
import { useGetAllProducts } from "@/hooks/Products";
import { TProduct } from "@/types/product";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Skeleton } from "antd";
import React, { useRef, useState } from "react";
import { Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SummerProducts = () => {
  const { data: products, isLoading: isLoadingProducts } = useGetAllProducts([
    { name: "limit", value: 16 },
    { name: "page", value: 4 },
  ]);

  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);

  // State for controlling button opacity
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="!pb-[54px]">
      <Container>
        <div className="flex justify-between items-center gap-6 mb-[20px]">
          <div>
            <p className="text-primary font-normal text-[17px] md:text-[19px]">
              SUMMER
            </p>
            <h2 className="font-semibold text-[24px] md:text-[28px]">
              Big Deal
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span
              ref={prevButtonRef}
              className={`h-7 w-7 border text-primary hover:text-white border-primary rounded-full bg-white hover:bg-primary flex items-center justify-center cursor-pointer transition-all duration-500 ${
                isBeginning ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeftOutlined />
            </span>
            <span
              ref={nextButtonRef}
              className={`h-7 w-7 border text-primary hover:text-white border-primary rounded-full bg-white hover:bg-primary flex items-center justify-center cursor-pointer transition-all duration-500 ${
                isEnd ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              <ArrowRightOutlined />
            </span>
          </div>
        </div>

        {/* Products */}

        {isLoadingProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {Array.from({ length: 8 }).map((item, ind) => (
              <Skeleton.Button
                key={ind}
                active
                className="!rounded-[16px] !w-full !h-[400px]"
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation, Grid]}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            grabCursor={true}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            grid={{
              rows: 2,
              fill: "row", // Ensures that the cards are filled row by row
            }}
            breakpoints={{
              420: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1240: { slidesPerView: 4 },
            }}
            className="mySwiper !pb-4"
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
          >
            {products?.data.map((product: TProduct, ind: number) => (
              <SwiperSlide key={ind}>
                <ProductCard key={ind} product={product} isSummer={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="text-center !mt-[24px]">
          <Button type="primary" size="middle" className="!font-semibold ">
            See More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SummerProducts;
