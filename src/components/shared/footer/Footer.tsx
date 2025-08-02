import Link from "next/link";

const Footer = () => (
  <footer className="h-[var(--footer-height)] w-full bg-secondary text-white py-8 px-6">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-6">
      <div>
        <h2 className="text-lg font-bold">Grocery Store</h2>
        <p className="text-sm mt-2 max-w-xs">
          Your trusted store for groceries, fresh fruits, and cleaning products.
          Quality and freshness every day.
        </p>
      </div>

      <div>
        <h3 className="text-md font-semibold">Links</h3>
        <ul className="text-sm mt-2 space-y-1">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:underline">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
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
