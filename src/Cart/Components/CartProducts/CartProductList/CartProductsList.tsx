import { useApp } from "@/useContext/useApp";
import { CartProductItem } from "../CartProductsItem/CartProductItem";
import { NavLink } from "react-router-dom";
import { useCartProductList } from "./useCartProductsList";
import { Container } from "@/Custom Div/Container";

export function CartProductList() {
  const { darkMode } = useApp();
  const { getCartItem } = useCartProductList();

  if (getCartItem?.length === 0) {
    return (
      <section>
        <Container className="justify-center">
          <h2 className={`text-center ${darkMode ? "text-DText" : "to-LText"}`}>
            Your cart is empty.
          </h2>
          <NavLink
            className="bg-DPrimary hover:bg-DSecondary px-2 py-1.5 rounded-lg text-lg cursor-pointer text-DText"
            to={"/products"}
          >
            Continue Shopping
          </NavLink>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <div className="flex flex-col max-w-7xl m-auto px-5 pb-24 gap-5">
        {getCartItem?.map((item) => {
          if (!item) return null;
          return <CartProductItem key={item?._id} item={item} />;
        })}
      </div>
    </section>
  );
}
