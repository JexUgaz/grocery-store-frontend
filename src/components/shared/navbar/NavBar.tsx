import Link from "next/link";
import Image from "next/image";
import ShoppingCart from "@/components/icons/ShoppingCart";
import { navbarItems } from "@/data/navbarItems";
import NavBarItem from "./components/NavBarItem";

const NavBar = () => (
  <nav
    id="main-navbar"
    className="sticky top-0 w-full h-[var(--navbar-height)] text-accent px-6 shadow-2xl shadow-black/25 bg-white flex justify-center z-900 transition-colors duration-100 ease-in-out"
  >
    <span className="absolute top-0 left-0 backdrop-blur w-[100dvw] h-[var(--navbar-height)] z-900"></span>

    <div className="w-full h-full flex items-center justify-between max-w-[var(--max-page-width)] z-999">
      <Link href="/" className="tracking-wide flex gap-1 items-center">
        <Image
          src="/images/logo.webp"
          alt="Grocery Store logo"
          width={60}
          height={60}
          priority
        />
        <p className="text-3xl font-semibold font-fredoka">Grocery Store</p>
      </Link>

      <div className="flex gap-20 items-center">
        <div className="flex items-center gap-8 text-base">
          {navbarItems.map((item) => (
            <NavBarItem key={item.title} {...item} />
          ))}
        </div>

        <Link
          href="/cart"
          className="relative rounded-xl py-3 px-4 hover:bg-accent hover:text-white transition "
        >
          <ShoppingCart className="size-8" />
          <span className="absolute top-2 right-1 text-white bg-red-500 text-xs px-1.5 rounded-full">
            2
          </span>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
