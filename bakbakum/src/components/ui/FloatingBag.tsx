"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { ShoppingBagIcon } from "./icons";
import { Drawer } from "antd";
import CartSider from "./CartSider";

const FloatingBag: React.FC = () => {
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const [isCartSiderDrawerVisible, setIsCartSiderDrawerVisible] =
    useState(false);

  if (!cartProducts?.length) return null;

  return (
    <>
      <div
        className={`fixed top-1/2 right-0 -translate-y-1/2 w-[100px] h-[100px] 
      rounded-l-2xl bg-[#581fc1] text-white font-bold flex flex-col items-center 
      justify-center gap-1 shadow-lg transition-transform duration-300 ease-in-out cursor-pointer !z-[5000]`}
        onClick={() => setIsCartSiderDrawerVisible(true)}
      >
        <ShoppingBagIcon className="w-6 h-6" />
        <span>Your Bag</span>
        <span className="text-lg">{cartProducts.length}</span>
      </div>
      {/* Cart drawer */}
      <Drawer
        title="Cart"
        placement="right"
        onClose={() => setIsCartSiderDrawerVisible(false)}
        open={isCartSiderDrawerVisible}
        width="400"
        zIndex={50000}
      >
        <CartSider />
      </Drawer>
    </>
  );
};

export default FloatingBag;
