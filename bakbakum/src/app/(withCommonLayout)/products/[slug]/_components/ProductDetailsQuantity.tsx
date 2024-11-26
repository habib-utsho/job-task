"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  decreaseQuantityInCart,
  increaseQuantityInCart,
} from "@/redux/slice/cartSlice";
import { TProduct } from "@/types/product";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

const ProductDetailsQuantity = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const existProductInCart = cartProducts?.find(
    (pd: TProduct) => pd?._id === product?._id
  );
  return (
    <div
      className="rounded-[24px] bg-pinky px-4 py-[8px] font-semibold w-fit flex items-center gap-6"
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
  );
};

export default ProductDetailsQuantity;
