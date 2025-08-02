import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import { shoppingCartService } from "@/services";
import { cookies } from "next/headers";

const ShoppingCart = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <ShoppingCartIcon className="size-8 -translate-x-[2px]" />
      <span className="absolute top-2 right-3 text-white bg-red-500 text-xs px-1 rounded-full">
        {totalItems}
      </span>
    </>
  );
};

export default ShoppingCart;
