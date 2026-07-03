import { useApp } from "@/useContext/useApp";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductDetail } from "./useProductDetail";

export function ProductDetail() {
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const { darkMode } = useApp();

  const { currentImgIndex, nextImg, prevImage, handleAddItem, allProducts } =
    useProductDetail();

  const addAmount = (quantity: number) => {
    setAmount((prev) => (prev === quantity ? quantity : prev + 1));
  };

  const minusAmount = () => {
    setAmount((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const product = allProducts?.find((item) => item._id === id);

  if (!product) {
    return (
      <section>
        <div className="max-w-7xl m-auto px-5 py-24 flex gap-5 justify-center items-center">
          <div>
            <h1 className={`${darkMode ? "text-DText" : "text-LText"}`}>
              Product Not Found
            </h1>
          </div>
        </div>
      </section>
    );
  }

  const { img1, img2, _id, title, description, price, quantity, category } =
    product;
  const images = [img1, img2];

  return (
    <section>
      <div className="max-w-7xl m-auto px-5 py-24 flex items-center gap-5 justify-between">
        <div
          className={`flex items-center justify-between gap-2.5 w-[49%] ${darkMode ? "text-DText" : "text-LText"}`}
        >
          <button
            className={`cursor-pointer hover:text-DPrimary ${darkMode ? "text-DText" : "text-LText"}`}
            onClick={() => prevImage(images)}
          >
            <ChevronLeft size={50} />
          </button>
          <img
            src={images[currentImgIndex]}
            alt="Anime Tees"
            className="rounded-lg w-[78%]"
          />
          <button
            className={`cursor-pointer hover:text-DPrimary ${darkMode ? "text-DText" : "text-LText"}`}
            onClick={() => nextImg(images)}
          >
            <ChevronRight size={50} />
          </button>
        </div>
        <div
          className={`flex flex-col items-start w-[49%] gap-7 ${darkMode ? "text-DText" : "text-LText"}`}
        >
          <h2 className="capitalize">{title}</h2>
          <h5 className="text-2xl text-DSecondary font-bold">Rs.{price}</h5>
          <p>{description}</p>
          <p className="font-bold">
            Category: <span className="font-medium">{category}</span>
          </p>
          <div className={`flex items-center gap-5`}>
            <button
              onClick={() => minusAmount()}
              className="cursor-pointer bg-DHighlight hover:bg-DSecondary p-2 rounded-full text-DText"
            >
              <Minus strokeWidth={3} />
            </button>
            <span className="text-2xl font-bold w-14 text-center">
              {amount}
            </span>
            <button
              onClick={() => addAmount(quantity)}
              className="cursor-pointer bg-DHighlight hover:bg-DSecondary p-2 rounded-full text-DText"
            >
              <Plus strokeWidth={3} />
            </button>
          </div>
          <button
            onClick={() => void handleAddItem(amount, _id)}
            className="text-xl px-4 py-3 cursor-pointer bg-DPrimary hover:bg-DSecondary rounded-lg text-DText"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
