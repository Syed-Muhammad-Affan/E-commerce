import { FilterProduct } from "./Components/FIlterProducts";
import { NextPageBtn } from "./Components/NextPageBtn";
import { ProductList } from "./Components/ProductList";
import { ProductFilterProvider } from "./Components/ProductsFilterContext";
import { ProductView } from "./Components/ProductsView";

export function Products() {
  return (
    <ProductFilterProvider>
      <FilterProduct />
      <ProductView />
      <ProductList />
      <NextPageBtn />
    </ProductFilterProvider>
  );
}
