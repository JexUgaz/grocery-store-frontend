"use client";

import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const router = useRouter();
  const onCheckout = () => {
    router.push("/checkout");
  };
  return (
    <button
      onClick={onCheckout}
      className="bg-secondary hover:bg-accent transition text-white rounded-3xl py-3 font-bold"
    >
      Continue to Checkout
    </button>
  );
};

export default CheckoutButton;
