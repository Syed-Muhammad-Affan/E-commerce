import { Container } from "@/Custom Div/Container";
import { NavTabsList } from "@/NavTabs/NavTabsList";
import { useApp } from "@/useContext/useApp";
import {
  CreditCard,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Shirt,
  Truck,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export function Footer() {
  const { darkMode } = useApp();

  return (
    <section
      className={`${darkMode ? " bg-DBackground shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)]" : " bg-LSurface shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"}`}
    >
      <Container className={`py-12`}>
        <div className="flex gap-5 justify-between">
          <div
            className={`flex flex-col items-start w-[24%] gap-5 ${darkMode ? "text-DText" : "text-LText"}`}
          >
            <h4 className="bg-linear-to-r from-DPrimary via-LSecondary to-LHighlight bg-clip-text text-transparent font-bold text-3xl">
              Anime Tees
            </h4>
            <p
              className={`text-base! ${darkMode ? "text-DText" : "text-LText"}`}
            >
              Premium anime T-shirts designed for fans who want comfort,
              quality, and style. Express your favorite characters and stories
              through every outfit.
            </p>
            <NavLink
              className={
                "px-4 py-2 rounded-lg w-auto bg-DPrimary text-DText hover:bg-LSecondary"
              }
              to={"/products"}
            >
              Shop Now
            </NavLink>
          </div>
          <div
            className={`flex flex-col items-start w-[17%] gap-5 ${darkMode ? "text-DText" : "text-LText"}`}
          >
            <h4 className="font-bold text-3xl">Navigation</h4>
            <nav className="flex flex-col gap-1.5 text-lg">
              <NavTabsList />
            </nav>
          </div>

          <div
            className={`flex flex-col items-start w-[21%] gap-5 ${darkMode ? "text-DText" : "text-LText"}`}
          >
            <h4 className="font-bold text-3xl">Services</h4>
            <ul className="flex flex-col text-lg gap-1.5">
              <li className="flex gap-2.5 items-center">
                <Truck />
                <p>Shipping</p>
              </li>
              <li className="flex gap-2.5">
                <RotateCcw />
                <p>Returns & Exchange</p>
              </li>
              <li className="flex gap-2.5">
                <Shirt />
                <p>Best Product Quality</p>
              </li>
              <li className="flex gap-2.5">
                <CreditCard />
                <p>Payments</p>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-col items-start w-[28%] gap-5 ${darkMode ? "text-DText" : "text-LText"}`}
          >
            <h4 className="font-bold text-3xl">Contact Us</h4>
            <ul className="flex flex-col text-lg gap-2.5">
              <li className="flex gap-2.5 items-center">
                <Phone />
                <a href="#">000-000-000</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail />
                <a href="#">abc@gmail.com</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <MapPin className="w-8" />
                <a href="#">5900 Balcones Dr Suite 4000, Austin, TX 78731</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
