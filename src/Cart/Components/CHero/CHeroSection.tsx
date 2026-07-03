import { useApp } from "@/useContext/useApp";
import { useCHero } from "./useCHero";
import { Container } from "@/Custom Div/Container";

export function CHeroSection() {
  const { darkMode } = useApp();
  const { totalCartItem, totalPrice } = useCHero();

  return (
    <section>
      <Container className="py-24">
        <h1 className={`${darkMode ? "text-DText" : "text-LText"}`}>
          Shopping Cart
        </h1>
        <div
          className={`text-2xl flex justify-between w-full ${darkMode ? "text-DText" : "text-LText"}`}
        >
          <span className="font-bold text-2xl">
            Total Items: {totalCartItem}
          </span>

          <span className="font-bold text-2xl">
            Total Price: Rs.{totalPrice}
          </span>
        </div>
        <hr
          className={`w-full mt-5 ${darkMode ? "text-DBorder" : "text-LBorder"}`}
        />
      </Container>
    </section>
  );
}
