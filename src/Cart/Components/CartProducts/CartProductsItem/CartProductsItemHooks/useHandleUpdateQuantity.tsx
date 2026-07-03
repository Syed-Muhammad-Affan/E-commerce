import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { Id } from "../../../../../../convex/_generated/dataModel";

export function useHandleUpdateQuantity() {
  const updateItemQuantity = useMutation(api.myFunctions.updateItemQuantity);
  const handleUpdateQuantity = async (
    productId: Id<"Products">,
    quantity: number,
  ) => {
    try {
      const res = await updateItemQuantity({ productId, quantity });
      if (res?.status === "deleted") {
        toast.success("Product removed from cart", {
          icon: (
            <span className="bg-red-500 p-1.5 rounded-full flex items-center justify-center">
              <Trash size={14} className="text-white" />
            </span>
          ),
        });
      }
    } catch {
      toast.error("Failed to Cart Updated");
    }
  };

  return {
    handleUpdateQuantity,
  };
}
