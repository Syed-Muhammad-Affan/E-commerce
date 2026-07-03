import { useState } from "react";

export function useChangeImg() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (images: string[]) => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (images: string[]) => {
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return {
    currentImgIndex,
    nextImg,
    prevImage,
  };
}
