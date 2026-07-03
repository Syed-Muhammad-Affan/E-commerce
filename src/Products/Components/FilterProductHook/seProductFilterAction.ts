import { useSearchParams } from "react-router-dom";
import { Filter, forFilter } from "../useProductFilter";

export function useProductFilterAction(
  tempFilter: Filter,
  setTempFilter: (f: Filter) => void,
  resetPagination: () => void,
) {
  const [, setSearchParams] = useSearchParams();

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: Record<string, string> = {};
    if (tempFilter.title) params.title = tempFilter.title.trim().toLowerCase();
    if (tempFilter.sort) params.sort = tempFilter.sort;
    if (tempFilter.price !== forFilter.price)
      params.price = String(tempFilter.price);
    if (tempFilter.category) params.category = tempFilter.category;
    params.page = "1";
    setSearchParams(params);
  };

  const handleReset = () => {
    setTempFilter({ ...forFilter });
    resetPagination();
    setSearchParams({});
  };

  return { handleFilter, handleReset };
}
