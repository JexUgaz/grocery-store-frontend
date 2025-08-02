"use client";

import { shoppingCartService } from "@/services";
import { Product } from "@/types/Product";
import { useRouter } from "next/navigation";

interface Props {
  quantity: number;
  product: Product;
}

const QuantityControl: React.FC<Props> = ({ quantity, product }) => {
  const router = useRouter();

  const btnAddIsDisabled =
    quantity === shoppingCartService.maxQuantityByProduct;

  const onDecrease = () => {
    shoppingCartService.removeFromCart(product);
    router.refresh();
  };

  const onAdd = () => {
    shoppingCartService.addToCart(product);
    router.refresh();
  };

  return (
    <div className="flex justify-between items-center gap-3">
      <button
        onClick={onDecrease}
        className="bg-secondary text-white px-3 py-1 rounded-lg"
      >
        -
      </button>
      <p className="text-secondary font-semibold">{quantity}</p>
      <button
        onClick={onAdd}
        disabled={btnAddIsDisabled}
        className="bg-secondary text-white px-3 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
