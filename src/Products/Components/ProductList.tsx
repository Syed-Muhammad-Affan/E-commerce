import { useApp } from "@/useContext/useApp";
import { SingleItem } from "./SingleItem";
// import { useProductFilter } from "./useProductFilter";
import { useProductFilterContext } from "./ProductsFilterContext";
import { Container } from "@/Custom Div/Container";

export function ProductList() {
  const { gridView } = useApp();
  const { products } = useProductFilterContext();

  return (
    <section>
      <Container
        className={`pb-24 grid items-stretch ${gridView ? "grid-cols-3 gap-6" : "grid-cols-1 gap-6"}`}
      >
        {products.map((item) => (
          <SingleItem key={item._id} item={item} />
        ))}
      </Container>
    </section>
  );
}
