import { useApp } from "@/useContext/useApp";
import { NavLink } from "react-router-dom";

type Items = {
  label: string;
  path: string;
};

type NavTabItemProps = {
  item: Items;
};

export function NavTabItem({ item }: NavTabItemProps) {
  const { darkMode } = useApp();

  //   const navTextColor = darkMode
  //   ? "text-DText"
  //   : "text-LText";

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "text-DPrimary"
          : `${darkMode ? "text-DText" : "text-LText"} hover:text-DHighlight`
      }
    >
      {item.label}
    </NavLink>
  );
}
