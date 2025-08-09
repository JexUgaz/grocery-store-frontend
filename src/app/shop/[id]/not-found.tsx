import NavBar from "@/components/shared/navbar/NavBar";
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <>
      <NavBar />
      <main className="w-full bg-muted flex items-center justify-center">
        <div className="w-full max-w-2xl h-100 bg-white rounded-4xl py-12 px-6 flex justify-center flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <p>Sorry, we couldn't find that product.</p>
          <Link
            href="/shop"
            className="bg-accent px-5 py-2 text-white rounded-3xl font-bold"
          >
            Go back shop
          </Link>
        </div>
      </main>
    </>
  );
}
