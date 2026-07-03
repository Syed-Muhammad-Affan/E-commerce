import { Container } from "@/Custom Div/Container";
import { useApp } from "@/useContext/useApp";
import { Paintbrush, RotateCcw, Shirt, Truck } from "lucide-react";

export function ServicesCard() {
  const { darkMode } = useApp();

  return (
    <section className="bg-DPrimary">
      <Container className={`py-10 ${darkMode ? "text-LText" : "text-DText"}`}>
        <div className="flex flex-col gap-2.5 items-center">
          <h2>Why Anime Tees?</h2>
          <p className="text-base!">
            We're not just another dropshipper. Here's what sets us apart.
          </p>
        </div>
        <div className="flex gap-5 w-full justify-between">
          <div className={`p-5 flex flex-col gap-2.5 w-[24%] items-center`}>
            <Shirt
              size={70}
              strokeWidth={3}
              className={`border-2 p-5 rounded-full`}
            />
            <h5 className="font-bold text-2xl text-center">Premium Fabric</h5>
            <p className="text-base! text-center ">
              Made with high-quality cotton for maximum comfort, durability, and
              everyday wear.
            </p>
          </div>
          <div className={`p-5 flex flex-col gap-2.5 w-[24%] items-center`}>
            <Paintbrush
              size={70}
              strokeWidth={3}
              className={`border-2 p-5 rounded-full`}
            />
            <h5 className="font-bold text-2xl text-center">
              Exclusive Anime Designs
            </h5>
            <p className="text-base! text-center ">
              Carefully crafted designs inspired by iconic anime characters and
              moments you love.
            </p>
          </div>
          <div className={`p-5 flex flex-col gap-2.5 w-[24%] items-center`}>
            <Truck
              size={70}
              strokeWidth={3}
              className={`border-2 p-5 rounded-full`}
            />
            <h5 className="font-bold text-2xl text-center">
              Fast & Reliable Shipping
            </h5>
            <p className="text-base! text-center">
              Quick delivery with secure packaging to ensure your order arrives
              safely.
            </p>
          </div>
          <div className={`p-5 flex flex-col gap-2.5 w-[24%] items-center`}>
            <RotateCcw
              size={70}
              strokeWidth={3}
              className={`border-2 p-5 rounded-full`}
            />
            <h5 className="font-bold text-2xl text-center">
              Hassle-Free Returns
            </h5>
            <p className="text-base! text-center ">
              Simple return and exchange process to make your shopping
              experience worry-free.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
