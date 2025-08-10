import SearchIcon from "@/components/icons/SearchIcon";
import Link from "next/link";

const ContentBanner = () => (
  <div className="absolute inset-0 z-20 flex flex-col justify-center items-start w-[50%] ps-40 gap-10 text-white h-full">
    <h1 className="text-[clamp(2.5rem,5dvw,6rem)] font-fredoka font-extrabold mb-4 leading-tight line-clamp-2">
      <span className="text-accent text-[clamp(4.5rem,8dvw,8rem)]">
        Freshness
      </span>{" "}
      <br />
      at Your Doorstep
    </h1>
    <p className="text-[clamp(1.25rem,1.8dvw,1.875rem)] mb-4 font-bold text-justify max-w-3xl">
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
