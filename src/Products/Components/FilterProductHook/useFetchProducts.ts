import { useQuery } from "convex/react";
import { Filter } from "../useProductFilter";
import { api } from "../../../../convex/_generated/api";

export function useFetchProducts(filter: Filter, cursor: string) {
  const allProducts = useQuery(api.myFunctions.productsList);
  const result = useQuery(api.myFunctions.getProducts, {
    ...filter,
    paginationOpts: { numItems: 6, cursor: cursor ?? "0" },
  });

  return { allProducts, result };
}
