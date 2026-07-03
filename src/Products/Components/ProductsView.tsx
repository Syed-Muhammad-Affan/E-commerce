import { useApp } from "@/useContext/useApp";
import { LayoutGrid, List } from "lucide-react";
// import { useProductFilter } from "./useProductFilter";
import { useProductFilterContext } from "./ProductsFilterContext";
import { Container } from "@/Custom Div/Container";

export function ProductView() {
  const { darkMode, gridView, setGridView } = useApp();
  const { allProducts } = useProductFilterContext();
  return (
    <section>
      <Container className="py-10">
        <div
          className={`flex w-full justify-between items-center ${darkMode ? "text-DText" : "text-LText"}`}
        >
          <span className="text-xl">Total Products: {allProducts?.length}</span>
          <div className="flex gap-2.5">
            <button
              className={`hover:text-DHighlight ${gridView ? "text-DPrimary" : `${darkMode ? "text-DText" : "text-LText"}`}`}
              onClick={() => setGridView(true)}
            >
              <LayoutGrid size={25} />
            </button>
            <button
              className={`hover:text-DHighlight ${gridView ? `${darkMode ? "text-DText" : "text-LText"}` : "text-DPrimary"}`}
              onClick={() => setGridView(false)}
            >
              <List size={25} />
            </button>
          </div>
        </div>
        <hr
          className={`w-full ${darkMode ? "text-DBorder" : "text-LBorder"}`}
        />
      </Container>
    </section>
  );
}
