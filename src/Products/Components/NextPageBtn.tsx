// import { useApp } from "@/useContext/useApp";
import { useApp } from "@/useContext/useApp";
import { useProductFilterContext } from "./ProductsFilterContext";
import { Container } from "@/Custom Div/Container";
// import { useProductFilter } from "./useProductFilter";

export function NextPageBtn() {
  const { darkMode } = useApp();
  const { goPrev, canGoPrev, goNext, canGoNext, currentPage } =
    useProductFilterContext();

  return (
    <section>
      <Container className="flex-row pb-10">
        <button
          onClick={goPrev}
          disabled={!canGoPrev}
          className="px-5 py-2 rounded-lg bg-DSecondary text-DText hover:bg-DHighlight disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Prev
        </button>

        <span className={`${darkMode ? "text-DText" : "text-LText"}`}>
          Page {currentPage + 1}
        </span>

        <button
          onClick={goNext}
          disabled={!canGoNext}
          className="px-5 py-2 rounded-lg bg-DSecondary text-DText hover:bg-DHighlight disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next →
        </button>
        {/* {status === "LoadingMore" && <p>Loading...</p>}

        {status === "CanLoadMore" && (
          <button
            className={`text-DText bg-DPrimary text-xl px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => {
              loadMore(6);
              console.log("clicked, ", results);
            }}
          >
            Load More
          </button>
        )}

        {status === "Exhausted" && <p>No more products</p>} */}
      </Container>
    </section>
  );
}
