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

  return (
    <div className="w-140 flex flex-col items-center gap-3">
      <div className="relative h-140 w-130 overflow-hidden flex items-center justify-center rounded-4xl">
        <Image
          src={selectedImage}
          alt={`${name} Image`}
          fill
          className="object-cover"
        />
      </div>
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
              <div className="relative rounded-2xl size-25 overflow-hidden block">
                <Image
                  src={img}
                  alt={`${name} Image`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
                {isSelected && (
                  <span className="absolute size-25 bg-gradient-to-b from-transparent to-black flex items-end justify-center">
                    <p className="text-white mb-2 text-sm font-medium">
                      Selected
                    </p>
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageView;
