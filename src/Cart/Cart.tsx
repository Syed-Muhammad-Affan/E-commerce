import { CartDetail } from "./Components/CartDetail/CartDetail";
import { CartProductList } from "./Components/CartProducts/CartProductList/CartProductsList";
import { CHeroSection } from "./Components/CHero/CHeroSection";

export function Cart() {
  return (
    <>
      <CHeroSection />
      <CartProductList />
      <CartDetail />
    </>
  );
}
