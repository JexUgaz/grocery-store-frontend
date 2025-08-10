import ShoppingCartCloseIcon from "@/components/icons/ShoppingCartCloseIcon";
import NavBar from "@/components/shared/navbar/NavBar";
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <>
      <NavBar />
      <main className="w-full bg-muted flex items-center justify-center">
        <div className="w-full max-w-2xl xs:h-100 bg-white xs:rounded-4xl py-12 px-6 flex justify-center flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">Product Not Found</h1>
          <ShoppingCartCloseIcon className="size-30 sm:size-50" />
          <p className="text-center text-sm sm:text-base">
            Sorry, we couldn&apos;t find that product.
          </p>
          <Link
            href="/shop"
            className="bg-accent px-5 py-2 text-white rounded-3xl font-bold text-sm sm:text-base"
          >
            Go back shop
          </Link>
        </div>
      </main>
    </>
  );
}
