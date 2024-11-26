import Container from "@/components/ui/Container";
import { getSingleProduct } from "@/services/product";
import { TResponse } from "@/types";
import { TProduct } from "@/types/product";
import { Button, Divider, Rate } from "antd";
import Image from "next/image";
import React from "react";
import ImgMagnify from "./_components/ImgMagnify";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data = (await getSingleProduct(slug)) as TResponse<TProduct>;

  console.log(data, "data");

  return (
    <div className="py-10">
      <Container className="space-y-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <ImgMagnify product={data?.data} />

          <div className="space-y-[8px]">
            <Button className="!bg-[#2F1C59] !text-white">
              {data?.data?.badge?.toUpperCase()}
            </Button>
            <h2 className="font-bold">{data?.data?.title}</h2>
            <h2>{data?.data?.price?.icchaporon?.sellingPrice} BDT</h2>
            <Rate defaultValue={3} /> (50)
            <Divider />
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>Available Size</div>
              <div>Available Colors</div>
            </div>
            <div>
              <h2>Quantity</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button type="primary" block size="large">
                Buy Now
              </Button>
              <Button size="large" block className="">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        {slug} for product details
      </Container>
    </div>
  );
};

export default page;
