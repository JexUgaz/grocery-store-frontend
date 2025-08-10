import LinkBrokenIcon from "@/components/icons/LinkBrokenIcon";
import NavBar from "@/components/shared/navbar/NavBar";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <NavBar />
      <main className="w-full bg-muted flex items-center justify-center">
        <div className="w-full max-w-2xl xs:h-100 bg-white xs:rounded-4xl py-12 px-6 flex justify-center flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">
            404 - Page Not Found
          </h1>
          <LinkBrokenIcon className="size-20 sm:size-30 text-secondary" />
          <p className="text-center text-sm sm:text-base">
            Sorry, we couldn&apos;t find that page.
          </p>
          <Link
            href="/home"
            className="bg-accent px-5 py-2 text-white rounded-3xl font-bold text-sm sm:text-base"
          >
            Go back home
          </Link>
        </div>
      </main>
    </>
  );
}
