import { useFetchCartData } from "@/Cart/useFetchCartData";
import { useCartTotalProduct } from "./CHeroHooks/useCartTotalProduct";
import { useCartPriceCalculation } from "../CartDetail/CartDetailHooks/useCartPriceCalculation";

export function useCHero() {
  const { getCartItem } = useFetchCartData();
  const { totalPrice } = useCartPriceCalculation(getCartItem);
  const { totalCartItem } = useCartTotalProduct(getCartItem);

  return {
    totalPrice,
    totalCartItem,
  };
}
