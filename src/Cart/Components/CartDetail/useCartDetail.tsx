import { useFetchCartData } from "@/Cart/useFetchCartData";
import { useCartPriceCalculation } from "./CartDetailHooks/useCartPriceCalculation";
import { useCartActions } from "./CartDetailHooks/useCartActions";

export function useCartDetail() {
  const { getCartItem } = useFetchCartData();
  const { totalPrice } = useCartPriceCalculation(getCartItem);
  const { removeAllHandler } = useCartActions();

  return {
    totalPrice,
    removeAllHandler,
  };
}
