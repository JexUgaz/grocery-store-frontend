import Link from "next/link";
import Image from "next/image";
import NavBarMobile from "./components/NavBarMobile";
import NavBarDesktop from "./components/NavBarDesktop";

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
    className={`sticky top-0 w-full h-[var(--navbar-height)] px-2 sm:px-6 flex justify-center z-900 transition-colors duration-100 ease-in-out ${backgroundColor} ${foregroundColor} ${shadow}`}
  >
    <span className="absolute top-0 left-0 backdrop-blur w-[100dvw] h-[var(--navbar-height)] z-900"></span>

    <div className="w-full h-full flex items-center justify-between max-w-[var(--max-page-width)] z-999 px-2 sm:px-0">
      <Link href="/" className="flex gap-1 items-center">
        <div className="size-15 drop-shadow-lg drop-shadow-white sm:drop-shadow-none">
          <Image
            src="/images/logo.webp"
            alt="Grocery Store logo"
            layout="responsive"
            width={478}
            height={478}
            priority
          />
        </div>
        <p className="hidden sm:block text-[clamp(1.25rem,1.8dvw,1.875rem)] font-semibold font-fredoka">
          Grocery Store
        </p>
      </Link>

      <NavBarDesktop />
      <NavBarMobile />
    </div>
  </nav>
);

export default NavBar;
