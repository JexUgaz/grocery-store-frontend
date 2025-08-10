import { cookies } from "next/headers";
import { shoppingCartService } from "@/services";
import NavBar from "@/components/shared/navbar/NavBar";
import CartItemsView from "@/components/cart/cart-items-view/CartItemsView";
import OrderSummary from "@/components/cart/order-summary/OrderSummary";
import Footer from "@/components/shared/footer/Footer";

const CartPage = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);
  const cartEmpty = cart.length === 0;

  return (
    <>
      <NavBar />

      <main className="px-2 xs:px-5 sm:px-0 relative w-full min-h-[90dvh] lg:min-h-[calc(100dvh_-_var(--navbar-height)_-_var(--topbar-height)_-_var(--footer-height))] py-10 flex flex-col lg:flex-row justify-start lg:justify-evenly items-center lg:items-start">
        <CartItemsView items={cart} />
        {!cartEmpty && <OrderSummary items={cart} />}
      </main>
      <Footer className="hidden lg:block" />
    </>
  );
};

export default CartPage;
