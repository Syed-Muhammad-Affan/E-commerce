import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function useFetchAllProducts() {
  const allProducts = useQuery(api.myFunctions.productsList);

  return {
    allProducts,
  };
}
