import { useApp } from "@/useContext/useApp";
import { useCartDetail } from "./useCartDetail";
import { Container } from "@/Custom Div/Container";

export function CartDetail() {
  const { darkMode } = useApp();
  const { totalPrice, removeAllHandler } = useCartDetail();

  return (
    <section>
      <Container className="pb-24">
        <hr
          className={`w-full mb-5 ${darkMode ? "text-DBorder" : "text-LBorder"}`}
        />
        <div
          className={`w-full flex justify-between items-center gap-5 ${darkMode ? "text-DText" : "text-LText"}`}
        >
          <div className="flex flex-col gap-2.5 text-xl">
            <span>Subtotal: Rs.{totalPrice}</span>
            <span>Shipping: Rs.0</span>
            <span>Total Price: Rs.{totalPrice}</span>
          </div>
          <div className="flex flex-col gap-2.5 text-DText">
            <button
              onClick={() => void removeAllHandler()}
              className="bg-DSecondary hover:bg-DHighlight cursor-pointer text-xl px-2 py-1.5 rounded-lg"
            >
              Remove All Products
            </button>
            <button className="bg-DPrimary hover:bg-DHighlight cursor-pointer text-xl px-2 py-1.5 rounded-lg">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
