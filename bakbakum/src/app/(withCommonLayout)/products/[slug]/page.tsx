import Container from "@/components/ui/Container";
import { getSingleProduct } from "@/services/product";
import { TResponse } from "@/types";
import { TProduct } from "@/types/product";
import { Button, Divider, Rate } from "antd";
import React from "react";
import ImgMagnify from "./_components/ImgMagnify";
import RelatedProducts from "./_components/RelatedProducts";
import DetailsReviewsDiscussionTab from "./_components/DetailsReviewsDiscussionTab";
import ProductDetailsQuantity from "./_components/ProductDetailsQuantity";
import ProductDetailsAddRemoveFromCart from "./_components/ProductDetailsAddRemoveFromCart";
import ProductDetailsSize from "./_components/ProductDetailsSize";
import ProductDetailsColor from "./_components/ProductDetailsColor";
import FloatingBag from "@/components/ui/FloatingBag";

export const generateStaticParams = async () => {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products?limit=${100}`
  ).then((res) => res.json()); /// 100 products SSG

  return products?.data?.map((product: TProduct) => {
    return {
      slug: product?._id,
    };
  });
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = (await getSingleProduct(slug)) as TResponse<TProduct>;
  const randomRatings = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
  const randomReviews = Math.round(Math.random() * 150);

  return (
    <div className="py-10 bg-[#f4f8ff]">
      <Container className="space-y-[10px] md:space-y-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImgMagnify product={data?.data} />

          <div className="space-y-[10px] md:space-y-[14px]">
            <Button
              className="!bg-[#2F1C59] !text-white !px-6 !font-[500]"
              size="large"
            >
              {data?.data?.badge?.toUpperCase()}
            </Button>
            <h2 className="text-[28px] md:text-[33px] font-[600] leading-[35px]">
              {data?.data?.title}
            </h2>
            <h2 className="text-[24px] md:text-[28px] font-[700]">
              {data?.data?.price?.icchaporon?.sellingPrice} BDT
            </h2>
            <div>
              <Rate disabled value={randomRatings} /> ({randomRatings})
              <span className="text-primary font-semibold ml-3">
                {randomReviews} Reviews
              </span>
            </div>
            <Divider className="!mb-[28px] !mt-[32px]" />
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="space-y-2">
                <h2 className="font-[600] text-[18px] md:text-[19px]">
                  Available Size
                </h2>
                <ProductDetailsSize />
              </div>
              <div className="space-y-2">
                <h2 className="font-[600] text-[18px] md:text-[19px]">
                  Available Color
                </h2>
                <ProductDetailsColor />
              </div>
            </div>
            <Divider className="!mb-[28px] !mt-[32px]" />

            <div className="space-y-2">
              <h2 className="font-[600] text-[18px] md:text-[19px]">
                Quantity
              </h2>
              <ProductDetailsQuantity product={data?.data} />
            </div>

            <div className="flex items-center gap-4 !mt-8">
              <Button
                type="primary"
                block
                size="large"
                className="!font-semibold"
              >
                Buy Now
              </Button>
              <ProductDetailsAddRemoveFromCart product={data?.data} />
            </div>
          </div>
        </div>

        <DetailsReviewsDiscussionTab
          product={data?.data}
          randomRatings={randomRatings}
          randomReviews={randomReviews}
        />

        {/* Related product slider */}
        <RelatedProducts />
      </Container>


      <FloatingBag/>
    </div>
  );
};

export default page;
