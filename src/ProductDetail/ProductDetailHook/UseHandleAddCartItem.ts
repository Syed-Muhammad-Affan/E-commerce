import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import toast from "react-hot-toast";
import { Id } from "../../../convex/_generated/dataModel";

export function useHandleAddCartItem() {
  const addItemToCart = useMutation(api.myFunctions.addItemToCart);

  const handleAddItem = async (quantity: number, productId: Id<"Products">) => {
    try {
      await addItemToCart({ productId, quantity });
      toast.success("Item is added");
    } catch {
      toast.error("Failed to add item");
    }
  };

  return {
    handleAddItem,
  };
}
