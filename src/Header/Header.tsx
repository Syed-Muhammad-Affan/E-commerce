import { useApp } from "@/useContext/useApp";
import { UserButton } from "@clerk/clerk-react";
import { ShoppingCart, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useHeader } from "./useheader";
import { Container } from "@/Custom Div/Container";
import { NavTabsList } from "../NavTabs/NavTabsList";

export function Header() {
  const { darkMode, setDarkMode } = useApp();
  const { totalCartItem } = useHeader();

  return (
    <header
      className={`sticky top-0 z-10 ${darkMode ? " bg-DBackground shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)]" : " bg-LSurface shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"}`}
    >
      <Container
        className={`py-7 flex-row gap-0 justify-between  ${darkMode ? "text-DText" : "text-LText"} `}
      >
        <NavLink to={"/"}>
          <h3 className="bg-linear-to-r from-DPrimary via-LSecondary to-LHighlight bg-clip-text text-transparent">
            Anime Tees
          </h3>
        </NavLink>

        <nav className="text-xl flex items-center gap-5 font-bold">
          <NavTabsList />
        </nav>

        <div className={`flex items-center gap-5 text-[18px]`}>
          <button
            className={`cursor-pointer hover:text-DHighlight`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <Sun />
          </button>
          <NavLink
            to={"/cart"}
            className={
              "hover:text-DHighlight relative w-10 h-10 flex justify-center items-center"
            }
          >
            <span className="text-DText text-[12px] bg-DPrimary rounded-full absolute right-0 top-0 px-1.5">
              {totalCartItem}
            </span>
            <ShoppingCart />
          </NavLink>
          <UserButton />
        </div>
      </Container>
    </header>
  );
}
