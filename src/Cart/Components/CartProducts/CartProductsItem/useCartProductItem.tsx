import { useRemoveHandle } from "./CartProductsItemHooks/useRemoveHandle";
import { useHandleUpdateQuantity } from "./CartProductsItemHooks/useHandleUpdateQuantity";

export function useCartProductItem() {
  const { removeHandler } = useRemoveHandle();
  const { handleUpdateQuantity } = useHandleUpdateQuantity();

  return {
    removeHandler,
    handleUpdateQuantity,
  };
}
