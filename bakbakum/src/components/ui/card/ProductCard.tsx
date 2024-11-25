import { TProduct } from "@/types/product";
import { Button, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  product,
  isSummer,
}: {
  product: TProduct;
  isSummer?: boolean;
}) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className={`!space-y-[16px] p-[8px] rounded-[16px] ${
        isSummer ? "h-[h-425px]" : "h-[400px]"
      }  bg-white relative`}
    >
      {/* discount for summer */}
      {isSummer && (
        <div className="absolute top-0 right-2 z-[1000] h-[60px] w-[45px] text-[11px]  bg-primary text-white  rounded-b-full flex flex-col gap-[1px] font-semibold items-center justify-center">
          <span>Up</span> <span>to</span>{" "}
          <span>{product?.discount?.discountPercentage || 50}%</span>
        </div>
      )}

      <figure className="relative h-[287px] w-full object-cover bg-pinky/50 rounded-[16px]">
        <Image src={product.thumbnail} alt={product.title} fill sizes="100vw" />
      </figure>
      {isSummer && (
        <div>
          <Rate defaultValue={3} /> (50)
        </div>
      )}
      <div className="flex items-center gap-4 justify-between">
        <p className="font-thin">{product?.category?.name}</p>
        <h2 className="font-semibold text-[19px]">
          {" "}
          BDT {product.price?.icchaporon?.sellingPrice}
        </h2>
      </div>
      <Button
        className="w-full !text-primary !border-primary !font-semibold"
        onClick={(e) => e.preventDefault()}
      >
        Add to Cart
      </Button>
    </Link>
  );
};

export default ProductCard;
