import { cookies } from "next/headers";
import { shoppingCartService } from "@/services";
import NavBar from "@/components/shared/navbar/NavBar";
import CartItemsView from "@/components/cart/cart-items-view/CartItemsView";
import OrderSummary from "@/components/cart/order-summary/OrderSummary";

const CartPage = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);
  const cartEmpty = cart.length === 0;

  return (
    <>
      <NavBar />

      <main className="w-full py-10 flex justify-evenly">
        <CartItemsView items={cart} />
        {!cartEmpty && <OrderSummary items={cart} />}
      </main>
    </>
  );
};

export default CartPage;
