"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  increaseQuantityInCart,
  removeFromCart,
} from "@/redux/slice/cartSlice";
import { TProduct } from "@/types/product";
import { Button } from "antd";
import React from "react";

const ProductDetailsAddRemoveFromCart = ({
  product,
}: {
  product: TProduct;
}) => {
  const dispatch = useAppDispatch();
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const existProductInCart = cartProducts?.find(
    (pd: TProduct) => pd?._id === product?._id
  );
  return (
    <>
      {existProductInCart ? (
        <Button
          size="large"
          block
          danger
          className="!text-danger !border-danger !font-semibold"
          onClick={() => dispatch(removeFromCart(product?._id))}
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          size="large"
          block
          className="!text-primary !border-primary !font-semibold"
          onClick={() => dispatch(increaseQuantityInCart(product))}
        >
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default ProductDetailsAddRemoveFromCart;
