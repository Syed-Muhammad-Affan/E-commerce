import { useSearchParams } from "react-router-dom";
import { forFilter } from "../useProductFilter";
import { useState } from "react";

export function useProductFilterState() {
  const [searchParams] = useSearchParams();
  const getFilterFromParams = (params: URLSearchParams) => ({
    title: params.get("title") ?? forFilter.title,
    category: params.get("category") ?? forFilter.category,
    price: params.get("price") ? Number(params.get("price")) : forFilter.price,
    sort: params.get("sort") ?? forFilter.sort,
  });

  const [tempFilter, setTempFilter] = useState(() =>
    getFilterFromParams(searchParams),
  );

  const filter = getFilterFromParams(searchParams);

  return {
    tempFilter,
    filter,
    setTempFilter,
  };
}
