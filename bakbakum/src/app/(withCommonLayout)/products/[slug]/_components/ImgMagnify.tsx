"use client";
import { TProduct } from "@/types/product";
import { Skeleton } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const ImgMagnify = ({
  product,
  isLoadingProduct = false,
}: {
  product: TProduct;
  isLoadingProduct?: boolean;
}) => {
  const [activeMagnifyImg, setActiveMagnifyImg] = useState("");
  const placeholderImg =
    "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0";
  const { title, images } = product || {};

  // Set the first image or placeholder as the default active magnify image
  useEffect(() => {
    setActiveMagnifyImg(images?.[0]?.url || placeholderImg);
  }, [images]);

  return (
    <div className="flex flex-col gap-6 p-4" style={{ position: "relative" }}>
      {/* Skeleton Loading */}
      {isLoadingProduct ? (
        <Skeleton.Button className="!h-[519px] !w-[628px]" active />
      ) : (
        <div className="flex flex-col items-center">
          {/* Magnify Image Section */}
          <div className="relative w-full max-w-[628px] mx-auto">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: title || "Product Image",
                  isFluidWidth: true,
                  width: 628,
                  height: 519,
                  src: activeMagnifyImg,
                },
                largeImage: {
                  alt: title || "Zoomed Product Image",
                  src: activeMagnifyImg,
                  width: 1500, // Higher resolution for zoomed image
                  height: 900,
                },
                enlargedImageContainerClassName:
                  "absolute z-50 border-2 border-primary bg-white",
                enlargedImagePosition: "beside", // Adjust zoom position beside image
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "130%",
                },
              }}
            />
          </div>

          {/* Thumbnail Section */}
          <div className="flex gap-4 flex-wrap justify-center mt-4">
            {images?.length ? (
              images.map((img, ind) => (
                <div
                  key={ind}
                  className={`cursor-pointer border border-slate-300 rounded-lg overflow-hidden transition-all duration-300 ${
                    img.url === activeMagnifyImg
                      ? "border-2 border-primary"
                      : "hover:border-primary-light"
                  }`}
                  onMouseEnter={() => setActiveMagnifyImg(img.url)}
                  style={{ width: "100px", height: "100px" }}
                >
                  <Image
                    src={img.url}
                    width={100}
                    height={100}
                    alt={`Thumbnail ${ind + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <div
                className="border border-slate-300 rounded-lg overflow-hidden"
                style={{ width: "100px", height: "100px" }}
              >
                <Image
                  src={placeholderImg}
                  width={100}
                  height={100}
                  alt="Placeholder Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgMagnify;
