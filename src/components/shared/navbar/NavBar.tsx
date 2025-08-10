import Link from "next/link";
import Image from "next/image";
import { navbarItems } from "@/data/navbarItems";
import NavBarItem from "./components/NavBarItem";
import ShoppingCart from "./components/ShoppingCart";

interface Props {
  shadow?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}

const NavBar: React.FC<Props> = ({
  shadow = "shadow-md shadow-black/25",
  backgroundColor = "bg-accent",
  foregroundColor = "text-white",
}) => (
  <nav
    id="main-navbar"
    className={`sticky top-0 w-full h-[var(--navbar-height)] px-6 flex justify-center z-900 transition-colors duration-100 ease-in-out ${backgroundColor} ${foregroundColor} ${shadow}`}
  >
    <span className="absolute top-0 left-0 backdrop-blur w-[100dvw] h-[var(--navbar-height)] z-900"></span>

    <div className="w-full h-full flex items-center justify-between max-w-[var(--max-page-width)] z-999">
      <Link href="/" className="tracking-wide flex gap-1 items-center">
        <div className="size-15">
          <Image
            src="/images/logo.webp"
            alt="Grocery Store logo"
            layout="responsive"
            width={478}
            height={478}
            priority
          />
        </div>
        <p className="text-[clamp(1.25rem,1.8dvw,1.875rem)] font-semibold font-fredoka">
          Grocery Store
        </p>
      </Link>

      <div id="navigation-items" className="flex gap-20 items-center">
        <div className="flex items-center gap-8">
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
    </div>
  </nav>
);

export default NavBar;
