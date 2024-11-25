import Container from "@/components/ui/Container";
import { getSingleProduct } from "@/services/product";
import { TResponse } from "@/types";
import { TProduct } from "@/types/product";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = (await getSingleProduct(slug)) as TResponse<TProduct>;

  console.log(data, "data");

  return (
    <div>
      <Container className="space-y-4 ">
        <h2 className="font-bold">{data?.data?.title}</h2>
        <h2>{data?.data?.description}</h2>
        <h2>{data?.data?.price?.icchaporon?.sellingPrice} BDT</h2>
        {slug} for product details
      </Container>
    </div>
  );
};

export default page;
