"use client";

import AddCartIcon from "@/components/icons/AddCartIcon";

const ButtonAction = () => (
  <button className="relative bg-accent text-white font-semibold px-3 rounded-2xl hover:animate-lift flex items-center gap-1">
    Add to Cart <AddCartIcon className="size-5" />
  </button>
);

export default ButtonAction;
