"use client";
import { cn } from "@/utils";
import Image from "next/image";
import { useState } from "react";

interface Props {
  name: string;
  images: string[];
}
const ImageView: React.FC<Props> = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const showSelector = images.length > 1;

  return (
    <div className="self-center w-80 xs:w-100 sm:w-120 xl:w-140 flex flex-col items-center gap-3">
      <div className="relative h-80 xs:h-100 sm:h-120 xl:h-140 w-80 xs:w-100 sm:w-120 xl:w-130 overflow-hidden flex items-center justify-center rounded-4xl">
        <Image
          src={selectedImage}
          alt={`${name} Image`}
          fill
          className="object-cover"
        />
      </div>
      {showSelector && (
        <div className="flex flex-wrap justify-center gap-2">
          {images.map((img) => {
            const isSelected = img === selectedImage;
            return (
              <button
                key={img}
                onClick={() => (isSelected ? null : setSelectedImage(img))}
                className={cn(
                  isSelected && "cursor-auto",
                  !isSelected && "cursor-pointer"
                )}
              >
                <div className="relative rounded-2xl size-12 xs:size-15 lg:size-20 xl:size-25 overflow-hidden block">
                  <Image
                    src={img}
                    alt={`${name} Image`}
                    fill
                    className="object-cover"
                  />
                  {isSelected && (
                    <span className="absolute size-12 xs:size-15 lg:size-20 xl:size-25 bg-gradient-to-b from-transparent to-black flex items-end justify-center">
                      <p className="hidden xs:block text-white mb-2 xs:text-xs lg:text-sm font-medium">
                        Selected
                      </p>
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageView;
