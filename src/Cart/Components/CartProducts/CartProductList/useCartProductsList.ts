import { useFetchCartData } from "@/Cart/useFetchCartData";

export function useCartProductList() {
  const { getCartItem } = useFetchCartData();

  return {
    getCartItem,
  };
}
