import SearchIcon from "@/components/icons/SearchIcon";
import Link from "next/link";

const ContentBanner = () => (
  <div
    className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start 
              px-10 sm:px-0 gap-10 text-white h-full 
              w-full sm:w-[90%] md:w-[70%] 3xl:w-[50%] sm:pl-10 md:pl-20 2xl:pl-30 3xl:pl-40"
  >
    <h1 className="text-center sm:text-start text-4xl sm:text-[clamp(3rem,5dvw,5rem)] font-fredoka font-extrabold mb-4 leading-tight line-clamp-2">
      <span className="text-accent text-6xl sm:text-7xl sm:text-[clamp(5rem,8dvw,8rem)]">
        Freshness
      </span>{" "}
      <br />
      at Your Doorstep
    </h1>
    <p className="text-base sm:text-lg sm:text-[clamp(1.25rem,1.8dvw,1.875rem)] mb-4 font-bold text-center md:text-justify max-w-3xl">
      Fresh fruits, vegetables, and essential cleaning products delivered to
      your door.
    </p>
    <Link
      href="/shop"
      className="bg-gradient-to-r from-primary to-lime-500 hover:brightness-110 transition px-6 py-3 rounded-xl
              flex items-center gap-3 text-white font-bold hover:scale-105 hover:animate-lift"
    >
      <SearchIcon className="size-5" />
      Browse Products
    </Link>
  </div>
);

export default ContentBanner;
