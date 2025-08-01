import SearchIcon from "@/components/icons/SearchIcon";
import Link from "next/link";

const ContentBanner = () => (
  <div className="absolute inset-0 z-20 flex flex-col justify-center items-start w-[50%] ps-40 gap-10 text-white">
    <h1 className="text-8xl font-fredoka font-extrabold mb-4 leading-tight">
      <span className="text-accent text-9xl">Freshness</span> <br />
      at Your Doorstep
    </h1>
    <p className="text-3xl mb-4 font-bold text-justify max-w-3xl">
      Fresh fruits, vegetables, and essential cleaning products delivered to
      your door.
    </p>
    <Link
      href="/products"
      className="bg-gradient-to-r from-primary to-lime-500 hover:brightness-110 transition px-6 py-3 rounded-xl
              flex items-center gap-3 text-white font-bold hover:scale-105 hover:animate-lift"
    >
      <SearchIcon className="size-5" />
      Browse Products
    </Link>
  </div>
);

export default ContentBanner;
