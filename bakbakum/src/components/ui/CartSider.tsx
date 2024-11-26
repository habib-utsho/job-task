"use client"; // Necessary for components using hooks in Next.js
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import React from "react";
import Image from "next/image";
import { TProduct } from "@/types/product";
import { Divider, Empty, Button } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  decreaseQuantityInCart,
  increaseQuantityInCart,
  removeFromCart,
} from "@/redux/slice/cartSlice";

const CartSider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products: cartProducts } = useAppSelector((state) => state.cart);

  // Calculate the total price
  const totalPrice = cartProducts.reduce(
    (acc: number, product: TProduct & { cartQuantity: number }) =>
      acc + product.price.icchaporon.sellingPrice * product.cartQuantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Your Cart</h2>
      {cartProducts.length === 0 ? (
        <Empty description="Your cart is empty" />
      ) : (
        <div className="space-y-4">
          {cartProducts.map(
            (product: TProduct & { cartQuantity: number }, ind: number) => (
              <div key={product._id} className="pb-2">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="relative h-16 w-16">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{product.title}</h3>
                    <p className="text-gray-600">
                      {product.price.icchaporon?.sellingPrice?.toFixed(2)} BDT x{" "}
                      {product.cartQuantity}
                    </p>
                  </div>
                  {/* Subtotal */}
                  <div className="text-right">
                    <p className="font-bold">
                      {(
                        product.price.icchaporon?.sellingPrice *
                        product.cartQuantity
                      ).toFixed(2)}{" "}
                      BDT
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between">
                  {/* Quantity Controls */}
                  <div
                    className="rounded-[24px] bg-pinky px-4 py-[8px] font-semibold w-fit flex items-center gap-6  mt-2"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(decreaseQuantityInCart(product._id))
                      }
                    >
                      <MinusOutlined />
                    </span>
                    <span>{product.cartQuantity}</span>
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(increaseQuantityInCart({ ...product }))
                      }
                    >
                      <PlusOutlined />
                    </span>
                  </div>
                  {/* Remove Button */}
                  <Button
                    size="large"
                    danger
                    className="!text-danger !border-danger !font-semibold mt-2"
                    onClick={() => dispatch(removeFromCart(product._id))}
                    icon={<DeleteOutlined />}
                  />
                </div>

                {/* Divider */}
                {cartProducts?.length !== ind + 1 && (
                  <Divider className="!mt-[24px]" />
                )}
              </div>
            )
          )}
          {/* Total Price */}
          <div className="pt-4">
            <h3 className="text-lg font-bold">
              Total: {totalPrice.toFixed(2)} BDT
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSider;
