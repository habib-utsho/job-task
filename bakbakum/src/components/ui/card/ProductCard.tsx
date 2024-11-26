import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  decreaseQuantityInCart,
  increaseQuantityInCart,
} from "@/redux/slice/cartSlice";
import { TProduct } from "@/types/product";
import formatPrice from "@/utils/formatPrice";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
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
  const dispatch = useAppDispatch();
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const existProductInCart = cartProducts?.find(
    (pd: TProduct) => pd?._id === product?._id
  );
  return (
    <Link
      href={`/products/${product._id}`}
      className={` block p-[8px] rounded-[16px] ${
        isSummer ? "h-[h-425px]" : "h-[400px]"
      }  bg-white relative`}
    >
      {/* discount for summer */}
      {isSummer && (
        <div className="absolute top-0 right-2 z-[1000] h-[60px] w-[45px] text-[11px]  bg-primary text-white  rounded-b-full flex flex-col gap-[1px] font-semibold items-center justify-center">
          <span>Up</span> <span>to</span>{" "}
          <span>{product?.discount?.discountPercentage?.toFixed() || 50}%</span>
        </div>
      )}

      <figure className="relative h-[287px] w-full object-cover bg-pinky/50 rounded-[16px] !mb-[8px] hover:scale-[1.02] transition-all duration-500">
        <Image src={product.thumbnail} alt={product.title} fill sizes="100vw" />
      </figure>

      <div className="!space-y-[16px]">
        {isSummer && (
          <div>
            <Rate
              disabled
              value={Math.floor(Math.random() * (5 - 2 + 1)) + 2}
            />{" "}
            ({Math.round(Math.random() * 150)})
          </div>
        )}
        <div className="flex items-center gap-4 justify-between">
          <p className="text-[16px] block hover:text-primary">
            {product?.category?.name?.length > 23
              ? `${product?.category?.name?.slice(0, 23)}...`
              : product?.category?.name}
          </p>
          <h2 className="font-semibold text-[17px]">
            {" "}
            BDT {formatPrice(product.price?.icchaporon?.sellingPrice | 0)}
          </h2>
        </div>
        {existProductInCart ? (
          <div
            className="rounded-[24px] bg-pinky px-4 py-[8px] font-semibold w-fit flex items-center gap-6 mx-auto"
            onClick={(e) => e.preventDefault()}
          >
            <span
              className="cursor-pointer"
              onClick={() => {
                dispatch(decreaseQuantityInCart(product?._id));
              }}
            >
              <MinusOutlined />
            </span>
            <span>{existProductInCart?.cartQuantity || 0}</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                dispatch(increaseQuantityInCart({ ...product }));
              }}
            >
              <PlusOutlined />
            </span>
          </div>
        ) : (
          <Button
            className="w-full !text-primary !border-primary !font-semibold"
            onClick={(e) => {
              dispatch(increaseQuantityInCart({ ...product }));
              e.preventDefault();
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
