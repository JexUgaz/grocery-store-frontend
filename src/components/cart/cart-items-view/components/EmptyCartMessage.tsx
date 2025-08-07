import EmptyCartIcon from "@/components/icons/EmptyCartIcon";
import Link from "next/link";

const EmptyCartMessage = () => (
  <div className="flex flex-col gap-3 items-center">
    <EmptyCartIcon className="size-30 text-secondary" />

    <p className="text-center text-3xl font-bold text-secondary">
      Your cart is empty
    </p>

    <p className="text-center text-muted-foreground max-w-md">
      You haven&apos;t added any products yet. Browse our store to find
      something you like.
    </p>

    <Link
      href="/"
      className="mt-4 px-6 py-2 rounded-xl bg-accent font-bold text-white hover:bg-accent/90 transition"
    >
      Return to store
    </Link>
  </div>
);

export default EmptyCartMessage;
