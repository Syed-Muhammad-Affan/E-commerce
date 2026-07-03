import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

export function useRemoveHandle() {
  const removeCartItem = useMutation(api.myFunctions.removeCartItem);
  const removeHandler = async (productId: Id<"Products">) => {
    try {
      await removeCartItem({ productId });
      toast.success("Product removed from cart", {
        icon: (
          <span className="bg-red-500 p-1.5 rounded-full flex items-center justify-center">
            <Trash size={14} className="text-white" />
          </span>
        ),
      });
    } catch {
      toast.error("Failed to remove product");
    }
  };

  return {
    removeHandler,
  };
}
