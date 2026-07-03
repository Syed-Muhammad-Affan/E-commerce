import { useApp } from "@/useContext/useApp";
import { Doc } from "../../../convex/_generated/dataModel";
import { NavLink } from "react-router-dom";

type PropType = {
  item: Doc<"Products">;
};

export function FeaturedSingleItem({ item }: PropType) {
  const { darkMode } = useApp();

  const { title, price, img2, _id, category } = item;

  return (
    <NavLink to={`/product/${_id}`}>
      <div
        className={`flex flex-col h-full p-7 rounded-lg gap-5 ${
          darkMode
            ? "bg-DSurface shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)]"
            : "bg-LSurface shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
        }`}
      >
        <div className="w-full">
          <img className="rounded-t-lg" src={img2} alt="" />
        </div>
        <div
          className={` flex flex-col gap-1.5 w-full ${darkMode ? " text-DText" : " text-LText"}`}
        >
          <div className="flex flex-col gap-1.5">
            <h5 className="text-xl font-bold text-LPrimary capitalize">
              {title}
            </h5>
            <p>Category: {category}</p>
          </div>
          <p>Rs. {price}</p>
        </div>
      </div>
    </NavLink>
  );
}
