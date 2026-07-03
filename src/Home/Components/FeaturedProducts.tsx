import { FeaturedSingleItem } from "@/Home/Components/FeaturedSingleItem";
import { useApp } from "@/useContext/useApp";
import { Container } from "@/Custom Div/Container";
import { useFetchFeatureProductData } from "../useFetchFeatureProductData";

export function FeaturedProducts() {
  const { darkMode } = useApp();
  const { getFeaturedProducts } = useFetchFeatureProductData();

  if (!getFeaturedProducts) {
    return (
      <h2 className={`${darkMode ? "text-DText" : "text-LText"}`}>Loading</h2>
    );
  }

  return (
    <section>
      <Container className="pb-24">
        <h2 className={`${darkMode ? "text-DText" : "text-LText"}`}>
          Featured Products
        </h2>
        <hr className={`${darkMode ? "text-DBorder" : "text-LBorder"}`} />
        <div className="grid grid-cols-3 items-stretch gap-6 w-full mt-7">
          {getFeaturedProducts?.map((item) => (
            <FeaturedSingleItem key={item._id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
