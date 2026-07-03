import { useChangeImg } from "./ProductDetailHook/useChangeImg";
import { useFetchAllProducts } from "./ProductDetailHook/useFetchAllProducts";
import { useHandleAddCartItem } from "./ProductDetailHook/UseHandleAddCartItem";

export function useProductDetail() {
  const { nextImg, prevImage, currentImgIndex } = useChangeImg();
  const { allProducts } = useFetchAllProducts();
  const { handleAddItem } = useHandleAddCartItem();

  return {
    currentImgIndex,
    nextImg,
    prevImage,
    handleAddItem,
    allProducts,
  };
}
