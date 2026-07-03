import { Container } from "@/Custom Div/Container";
import { useApp } from "@/useContext/useApp";
import { NavLink } from "react-router-dom";

export function AHeroSection() {
  const { darkMode } = useApp();

  return (
    <section>
      <Container className="py-24 gap-8">
        <h1 className={`${darkMode ? "text-DText" : "text-LText"}`}>
          Anime Style That Stands Out.
        </h1>
        <p
          className={`max-w-1/2 text-center ${darkMode ? "text-DText" : "text-LText"}`}
        >
          Premium anime t-shirts designed for fans who want to wear their
          passion with confidence.
        </p>
        <div className="flex gap-5 text-DText items-center">
          <NavLink
            className="bg-LPrimary px-4 py-2 rounded-lg hover:bg-LSecondary"
            to={"/about"}
          >
            Contact Us
          </NavLink>
          <NavLink
            className={
              "px-4 py-2 rounded-lg border border-LPrimary text-LPrimary hover:text-LSecondary hover:border-LSecondary"
            }
            to={"/products"}
          >
            Shop Now
          </NavLink>
        </div>
      </Container>
    </section>
  );
}
