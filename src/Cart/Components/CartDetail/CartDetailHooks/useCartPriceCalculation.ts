type getCartItem = {
  price: number;
  selectedQuantity: number;
};

export function useCartPriceCalculation(
  getCartItem: getCartItem[] | undefined,
) {
  const totalPrice = getCartItem?.reduce((sum, item) => {
    return sum + (item?.price ?? 0) * (item?.selectedQuantity ?? 0);
  }, 0);

  return { totalPrice };
}
