import { useQuery } from "convex/react";
import { Dispatch, SetStateAction, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../../../convex/_generated/api";

type ProductQueryResult = ReturnType<
  typeof useQuery<typeof api.myFunctions.getProducts>
>;

type SetCursor = Dispatch<SetStateAction<string>>;

export function useProductsPagination(
  result: ProductQueryResult | undefined,
  setCursor: SetCursor,
) {
  const [pageHistory, setPageHistory] = useState<string[]>(["0"]);
  const [currentPage, setCurrentPage] = useState(0);
  const [, setSearchParams] = useSearchParams();

  const goNext = () => {
    if (result && !result.isDone && result.continueCursor) {
      const next = result.continueCursor;
      const nextPage = currentPage + 1;

      setPageHistory((prev) => [...prev, next]);
      setCurrentPage(nextPage);
      setCursor(next);

      setSearchParams((prev) => {
        const params = Object.fromEntries(prev.entries());
        return { ...params, page: String(nextPage + 1) };
      });
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      const newHistory = [...pageHistory];
      newHistory.pop();
      const prev = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(prevPage);
      setCursor(prev);

      setSearchParams((p) => {
        const params = Object.fromEntries(p.entries());
        return { ...params, page: String(prevPage + 1) };
      });
    }
  };

  const resetPagination = () => {
    setCursor("0");
    setPageHistory(["0"]);
    setCurrentPage(0);
  };

  return {
    goNext,
    goPrev,
    currentPage,
    resetPagination,
  };
}
