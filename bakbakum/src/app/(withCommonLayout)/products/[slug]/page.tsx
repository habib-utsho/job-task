import Container from "@/components/ui/Container";
import { getSingleProduct } from "@/services/product";
import { TResponse } from "@/types";
import { TProduct } from "@/types/product";
import { Button, Divider, Rate } from "antd";
import React from "react";
import ImgMagnify from "./_components/ImgMagnify";
import RelatedProducts from "./_components/RelatedProducts";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import DetailsReviewsDiscussionTab from "./_components/DetailsReviewsDiscussionTab";

const page = async ({ params }: { params: { slug: string } }) => {
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
                <div className="flex items-center gap-[6px] ">
                  {["S", "M", "L", "XL", "XXL"].map((size, ind) => (
                    <span
                      key={ind}
                      className="border-[1.5px] border-primary text-primary font-semibold rounded-[8px] py-[2px] px-[8px] bg-white cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="font-[600] text-[18px] md:text-[19px]">
                  Available Color
                </h2>
                <div className="flex items-center gap-[10px] ">
                  {["White", "Black", "Red"].map((color, ind) => (
                    <div
                      key={ind}
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      <span
                        className={`border border-primary h-6 w-6 inline-block !rounded-full`}
                        style={{ background: color?.toLowerCase() }}
                      ></span>
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Divider className="!mb-[28px] !mt-[32px]" />

            <div className="space-y-2">
              <h2 className="font-[600] text-[18px] md:text-[19px]">
                Quantity
              </h2>
              <div className="rounded-[24px] bg-pinky px-4 py-[8px] font-semibold w-fit flex items-center gap-6">
                <span className="cursor-pointer">
                  <MinusOutlined />
                </span>
                <span>5</span>
                <span className="cursor-pointer">
                  <PlusOutlined />
                </span>
              </div>
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
              <Button
                size="large"
                block
                className="!text-primary !border-primary !font-semibold"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <DetailsReviewsDiscussionTab product={data?.data} randomRatings={randomRatings} randomReviews={randomReviews}/>

        {/* Related product slider */}
        <RelatedProducts />
      </Container>
    </div>
  );
};

export default page;
