import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useFetchCartData() {
  const getCartItem = useQuery(api.myFunctions.getCartItem);
  return {
    getCartItem,
  };
}
