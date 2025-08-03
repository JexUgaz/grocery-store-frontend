"use client";

import AddCartIcon from "@/components/icons/AddCartIcon";
import { shoppingCartService } from "@/services";
import { Product } from "@/types/product/Product";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

const ButtonAction: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  const addToCart = () => {
    shoppingCartService.addToCart(product.id);
    router.refresh();
  };

  return (
    <button
      onClick={addToCart}
      className="relative bg-accent text-white font-semibold px-3 rounded-2xl hover:animate-lift flex items-center gap-1"
    >
      Add to Cart <AddCartIcon className="size-5" />
    </button>
  );
};

export default ButtonAction;
