import { NavTabItem } from "./NavTabItem";
import { navTabData } from "./NavTabsData";

export function NavTabsList() {
  const navTabsData = navTabData;

  return navTabsData.map((item) => {
    return <NavTabItem key={item.path} item={item} />;
  });
}
