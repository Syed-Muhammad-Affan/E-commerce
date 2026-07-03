import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

export function useCartActions() {
  const removeAllItem = useMutation(api.myFunctions.removeAllItem);

  const removeAllHandler = async () => {
    try {
      await removeAllItem();
      toast.success("All products removed from cart", {
        icon: (
          <span className="bg-red-500 p-1.5 rounded-full flex items-center justify-center">
            <Trash size={14} className="text-white" />
          </span>
        ),
      });
    } catch {
      toast.error("Failed to remove all products");
    }
  };

  return {
    removeAllHandler,
  };
}
