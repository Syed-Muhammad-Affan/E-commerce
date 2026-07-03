import { useApp } from "@/useContext/useApp";
import { Minus, Plus } from "lucide-react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useCartProductItem } from "./useCartProductItem";

type cartProducts = {
  _id: Id<"Products">;
  _creationTime: number;
  title: string;
  description: string;
  price: number;
  img1: string;
  img2: string;
  quantity: number;
  category: string;
  selectedQuantity: number;
};

type PropType = {
  item: cartProducts;
};

export function CartProductItem({ item }: PropType) {
  const { darkMode } = useApp();
  const { removeHandler, handleUpdateQuantity } = useCartProductItem();
  const { title, price, img2, _id, selectedQuantity, category } = item;

  return (
    <div
      className={`w-full flex gap-5 justify-between p-7 rounded-lg ${darkMode ? "bg-DSurface shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)]" : "bg-LSurface shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"}`}
    >
      <img src={img2} alt="Anime Tees" className="w-[10%] rounded-lg" />
      <div
        className={`flex flex-col w-[59%] gap-2.5 ${darkMode ? "text-DText" : "text-LText"}`}
      >
        <h5 className="text-2xl font-bold capitalize">{title}</h5>
        <p>Category: {category}</p>
        <p>Rs.{price}</p>
      </div>
      <div className="flex flex-col gap-5 justify-between items-center w-[28%]">
        <div className="flex gap-2.5 items-center">
          <button
            onClick={() => void handleUpdateQuantity(_id, selectedQuantity - 1)}
            className="bg-DHighlight p-2 text-DText rounded-full cursor-pointer"
          >
            <Minus size={18} strokeWidth={4} />
          </button>
          <span
            className={`w-7 text-center text-xl ${darkMode ? "text-DText" : "to-LText"}`}
          >
            {selectedQuantity}
          </span>
          <button
            onClick={() => void handleUpdateQuantity(_id, selectedQuantity + 1)}
            className="bg-DHighlight p-2 text-DText rounded-full cursor-pointer"
          >
            <Plus size={18} strokeWidth={4} />
          </button>
        </div>
        <button
          onClick={() => void removeHandler(_id)}
          className="bg-DPrimary hover:bg-DSecondary px-2 py-1.5 rounded-lg text-lg cursor-pointer text-DText"
        >
          Remove Product
        </button>
      </div>
    </div>
  );
}
