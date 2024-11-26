"use client";
import React, { useState } from "react";

const ProductDetailsSize = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  return (
    <div className="flex items-center gap-[6px] ">
      {["S", "M", "L", "XL", "XXL"].map((size, ind) => (
        <span
          key={ind}
          onClick={() => setSelectedSize(size)}
          className={`border-[1.5px] border-primary  font-semibold rounded-[8px] py-[2px] px-[8px]  ${
            selectedSize === size
              ? "bg-primary text-white"
              : "bg-white text-primary"
          } cursor-pointer`}
        >
          {size}
        </span>
      ))}
    </div>
  );
};

export default ProductDetailsSize;
