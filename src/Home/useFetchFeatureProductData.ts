import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useFetchFeatureProductData() {
  const getFeaturedProducts = useQuery(api.myFunctions.getFeaturedProducts);

  return {
    getFeaturedProducts,
  };
}
