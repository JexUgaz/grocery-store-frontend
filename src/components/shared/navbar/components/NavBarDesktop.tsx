import { navbarItems } from "@/data/navbarItems";
import NavBarItem from "./NavBarItem";
import ShoppingCart from "./ShoppingCart";

const NavBarDesktop = () => (
  <div
    id="navigation-items"
    className="hidden sm:flex gap-4 md:gap-10 xl:gap-20 items-center"
  >
    <div className="flex items-center gap-4 xl:gap-8">
      {navbarItems.map(({ Icon, link, title }) => (
        <NavBarItem key={title} link={link}>
          <Icon className="size-5" /> {title}
        </NavBarItem>
      ))}
    </div>
    <NavBarItem link="/cart" className="relative py-3 px-4">
      <ShoppingCart />
    </NavBarItem>
  </div>
);

export default NavBarDesktop;
