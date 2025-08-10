import HomeIcon from "@/components/icons/HomeIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import Link from "next/link";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import { ClassValue } from "clsx";
import { cn } from "@/utils";

interface Props {
  className?: ClassValue;
}

const Footer: React.FC<Props> = ({ className }) => (
  <footer
    className={cn(
      "sm:min-h-[var(--footer-height)] w-full bg-secondary text-white py-8 px-6",
      className
    )}
  >
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-evenly md:flex-nowrap md:justify-between gap-3 lg:gap-6">
      <div>
        <h2 className="text-lg font-bold">Grocery Store</h2>
        <p className="text-sm mt-2 max-w-xs text-justify">
          Your trusted store for groceries, fresh fruits, and cleaning products.
          Quality and freshness every day.
        </p>
      </div>
      <span className="block sm:hidden w-full border-1 border-white/50 my-2"></span>

      <div>
        <h3 className="text-md font-semibold">Links</h3>
        <ul className="text-sm mt-2 space-y-1">
          <li>
            <Link
              href="/"
              className="flex items-center justify-start gap-1 hover:underline"
            >
              <HomeIcon className="size-[13px]" /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="flex items-center justify-start gap-1 hover:underline"
            >
              <StoreIcon className="size-4" /> Shop
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="flex items-center justify-start gap-1 hover:underline"
            >
              <ShoppingCartIcon className="size-4" /> Cart
            </Link>
          </li>
        </ul>
      </div>
      <span className="block sm:hidden w-full border-1 border-white/50 my-2"></span>

      <div className="sm:text-center md:text-start">
        <h3 className="text-md font-semibold">Contact</h3>
        <ul className="text-sm mt-2 space-y-1">
          <li>Email: contact@grocerystore.com</li>
          <li>Phone: +51 999 999 999</li>
          <li>Address: Lima, Peru</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/60">
      © {new Date().getFullYear()} Grocery Store. All rights reserved.
    </div>
  </footer>
);

export default Footer;
