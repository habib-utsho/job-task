"use client";
import React, { useState } from "react";

const ProductDetailsColor: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const colors = ["White", "Black", "Red"];

  return (
    <div className="flex items-center gap-[10px]">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`flex items-center gap-1 cursor-pointer ${
            selectedColor === color ? "font-bold text-primary" : "text-gray-600"
          }`}
          onClick={() => setSelectedColor(color)}
        >
          <span
            className={`border h-6 w-6 inline-block rounded-full ${
              selectedColor === color ? "border-primary" : "border-gray-400"
            }`}
            style={{ background: color.toLowerCase() }}
          ></span>
          {color}
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsColor;
