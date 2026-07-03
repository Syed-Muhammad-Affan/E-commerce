import { useProductFilterState } from "./FilterProductHook/useProductFilterState";
import { useProductsPagination } from "./FilterProductHook/useProductsPagination";
import { useFetchProducts } from "./FilterProductHook/useFetchProducts";
import { useProductFilterAction } from "./FilterProductHook/seProductFilterAction";
import { useCursor } from "./FilterProductHook/useCursor";

export const forFilter = {
  title: "",
  sort: "A-Z",
  price: 1100,
  category: "",
};

export type Filter = typeof forFilter;

export function useProductFilter() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { cursor, setCursor } = useCursor();
  const { tempFilter, setTempFilter, filter } = useProductFilterState();
  const { allProducts, result } = useFetchProducts(filter, cursor);
  const { currentPage, goNext, goPrev, resetPagination } =
    useProductsPagination(result, setCursor);
  const { handleFilter, handleReset } = useProductFilterAction(
    tempFilter,
    setTempFilter,
    resetPagination,
  );

  // const getFilterFromParams = (params: URLSearchParams) => ({
  //   title: params.get("title") ?? forFilter.title,
  //   category: params.get("category") ?? forFilter.category,
  //   price: params.get("price") ? Number(params.get("price")) : forFilter.price,
  //   sort: params.get("sort") ?? forFilter.sort,
  // });

  // const [tempFilter, setTempFilter] = useState(() =>
  //   getFilterFromParams(searchParams),
  // );

  // const filter = getFilterFromParams(searchParams);

  // // ✅ Pagination state
  // const [cursor, setCursor] = useState("0");
  // const [pageHistory, setPageHistory] = useState<string[]>(["0"]);
  // const [currentPage, setCurrentPage] = useState(0);

  // // ✅ Reset pagination whenever filters change
  // // useEffect(() => {
  // //   setCursor("0");
  // //   setPageHistory(["0"]);
  // //   setCurrentPage(0);
  // // }, [filter.title, filter.category, filter.price, filter.sort]);

  // const result = useQuery(api.myFunctions.getProducts, {
  //   ...filter,
  //   paginationOpts: {
  //     numItems: 6,
  //     cursor: cursor ?? "0",
  //   },
  // });

  // const goNext = () => {
  //   if (result && !result.isDone && result.continueCursor) {
  //     const next = result.continueCursor;
  //     const nextPage = currentPage + 1;

  //     setPageHistory((prev) => [...prev, next]);
  //     setCurrentPage(nextPage);
  //     setCursor(next);

  //     setSearchParams((prev) => {
  //       const params = Object.fromEntries(prev.entries());
  //       return { ...params, page: String(nextPage + 1) };
  //     });
  //   }
  // };

  // const goPrev = () => {
  //   if (currentPage > 0) {
  //     const prevPage = currentPage - 1;
  //     const newHistory = [...pageHistory];
  //     newHistory.pop();
  //     const prev = newHistory[newHistory.length - 1];
  //     setPageHistory(newHistory);
  //     setCurrentPage(prevPage);
  //     setCursor(prev);

  //     setSearchParams((p) => {
  //       const params = Object.fromEntries(p.entries());
  //       return { ...params, page: String(prevPage + 1) };
  //     });
  //   }
  // };

  // const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const params: Record<string, string> = {};

  //   if (tempFilter.title) params.title = tempFilter.title.trim().toLowerCase();
  //   if (tempFilter.sort) params.sort = tempFilter.sort;
  //   if (tempFilter.price !== forFilter.price)
  //     params.price = String(tempFilter.price);
  //   if (tempFilter.category) params.category = tempFilter.category;

  //   params.page = "1";

  //   setSearchParams(params);
  // };

  // const handleReset = () => {
  //   setTempFilter({ ...forFilter });
  //   setCursor("0");
  //   setPageHistory(["0"]);
  //   setCurrentPage(0);
  //   setSearchParams({});
  // };

  return {
    tempFilter,
    setTempFilter,
    handleFilter,
    handleReset,
    products: result?.page ?? [],
    isLoading: result === undefined,
    isDone: result?.isDone ?? false,
    currentPage,
    goNext,
    goPrev,
    canGoNext: result ? !result.isDone : false,
    canGoPrev: currentPage > 0,
    allProducts,
  };
}
