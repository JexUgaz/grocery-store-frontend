"use client";

import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import QuantityControl from "@/components/shared/products/cart-buttons/QuantityControl";
import { shoppingCartService } from "@/services";
import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";
import { useRouter } from "next/navigation";

interface Props {
  cartItem?: CartItem;
  product: Product;
}

const DetailsButtonAdd: React.FC<Props> = ({ cartItem, product }) => {
  const router = useRouter();
  const productInCart = !!cartItem;

  const addToCart = async () => {
    await shoppingCartService.addToCart(product);
    router.refresh();
  };

  return (
    <>
      {!productInCart && (
        <button
          onClick={addToCart}
          className="mx-auto mt-6 w-70 py-3 bg-accent text-white rounded-3xl font-semibold flex gap-1 justify-center items-center"
        >
          Add to cart
          <ShoppingCartIcon className="size-5" />
        </button>
      )}
      {productInCart && (
        <div className="mx-auto mt-10 w-30">
          <QuantityControl product={product} quantity={cartItem.quantity} />
          <p className="text-center text-xs font-semibold mt-1">
            Max. 10 units
          </p>
        </div>
      )}
    </>
  );
};

export default DetailsButtonAdd;
