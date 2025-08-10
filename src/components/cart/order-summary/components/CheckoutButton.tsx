"use client";

import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const router = useRouter();
  const onCheckout = () => {
    router.push("/cart/checkout");
  };
  return (
    <button
      onClick={onCheckout}
      className="mt-4 xs:mt-0 bg-secondary lg:bg-accent lg:hover:bg-accent/80 w-full transition text-white rounded-3xl py-1 xs:py-2 sm:py-3 font-bold"
    >
      Continue to Checkout
    </button>
  );
};

export default CheckoutButton;
