import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

type GetCartItem = ReturnType<
  typeof useQuery<typeof api.myFunctions.getCartItem>
>;

export function useCartTotalProduct(getCartItem: GetCartItem) {
  const totalCartItem = getCartItem?.reduce((total, item) => {
    return total + (item?.selectedQuantity ?? 0);
  }, 0);

  return {
    totalCartItem,
  };
}
