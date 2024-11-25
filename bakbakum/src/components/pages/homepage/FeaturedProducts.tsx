"use client";
import ProductCard from "@/components/ui/card/ProductCard";
import Container from "@/components/ui/Container";
import { useGetAllProducts } from "@/hooks/Products";
import { TProduct } from "@/types/product";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Skeleton } from "antd";
import React from "react";

const FeaturedProducts = () => {
  const { data: products, isLoading: isLoadingProducts } = useGetAllProducts([
    { name: "limit", value: 4 },
  ]);

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

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {isLoadingProducts
            ? Array.from({ length: 4 }).map((item, ind) => (
                <Skeleton.Button
                  key={ind}
                  active
                  className="!rounded-[16px] !w-full !h-[400px]"
                />
              ))
            : products?.data?.map((product: TProduct, ind: number) => (
                <ProductCard key={ind} product={product} />
              ))}
        </div>
        <div className="text-center !mt-[24px]">
          <Button
            type="primary"
            size="middle"
            className="!font-semibold "
          >
            See More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
