import MenuIcon from "@/components/icons/MenuIcon";
import NavBarItem from "./NavBarItem";
import ShoppingCart from "./ShoppingCart";
import CloseIcon from "@/components/icons/CloseIcon";
import { navbarItems } from "@/data/navbarItems";
import NavBarItemMobile from "./NavBarItemMobile";

const NavBarMobile = () => (
  <div className="flex sm:hidden items-center gap-2">
    <NavBarItem link="/cart" className="block sm:hidden relative py-3 px-4">
      <ShoppingCart />
    </NavBarItem>
    <input type="checkbox" id="menu-toggle" className="hidden peer" />

    <label htmlFor="menu-toggle" className="cursor-pointer p-2">
      <MenuIcon className="size-7" />
      <span className="sr-only">Open Menu</span>
    </label>

    <label
      htmlFor="menu-toggle"
      className="fixed inset-0 bg-black/50 peer-checked:block hidden lg:hidden z-4000 h-[100dvh]"
    >
      <span className="sr-only">Background menu</span>
    </label>
    <div
      className="z-5000 fixed top-0 right-0 h-[100dvh] w-[300px] bg-secondary
         translate-x-full peer-checked:translate-x-0
         transition-transform duration-300 ease-in-out
         will-change-transform
         lg:hidden
         flex flex-col justify-between"
    >
      <label
        htmlFor="menu-toggle"
        className="absolute top-4 right-5 text-white"
      >
        <CloseIcon className="size-6" />
      </label>
      <ul className="mt-20 w-full flex flex-col items-center gap-4 px-2">
        {navbarItems.map(({ Icon, link, title }) => (
          <NavBarItemMobile key={title} link={link}>
            <Icon className="size-5" />
            {title}
          </NavBarItemMobile>
        ))}
      </ul>
      <div className="p-6 border-t border-gray-700">
        <div className="text-center text-sm text-white">
          © {new Date().getFullYear()} Loammi Ugaz. All rights reserved
        </div>
      </div>
    </div>
  </div>
);

export default NavBarMobile;
