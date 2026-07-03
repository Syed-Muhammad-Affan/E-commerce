import { useCartTotalProduct } from "@/Cart/Components/CHero/CHeroHooks/useCartTotalProduct";
import { useFetchCartData } from "@/Cart/useFetchCartData";

export function useHeader() {
  const { getCartItem } = useFetchCartData();
  const { totalCartItem } = useCartTotalProduct(getCartItem);
  return {
    totalCartItem,
  };
}
