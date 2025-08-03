import { cookies } from "next/headers";
import { productService, shoppingCartService } from "@/services";
import NavBar from "@/components/shared/navbar/NavBar";
import CartItemsView from "@/components/cart/cart-items-view/CartItemsView";
import OrderSummary from "@/components/cart/order-summary/OrderSummary";
import { ProductWithCategory } from "@/types/product/ProductWithCategory";

const CartPage = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);
  let cartEmpty = cart.length === 0;

  let products: ProductWithCategory[] = [];
  if (!cartEmpty) {
    const ids = cart.map((c) => c.productId);
    const result = await productService.getByIds({ ids });
    if (result) products = result;
  }

  const shoppingCart = shoppingCartService.fromCookieCartToShoppingCart(
    cart,
    products
  );

  cartEmpty = shoppingCart.length === 0;

  return (
    <>
      <NavBar />

      <main className="w-full py-10 flex justify-evenly">
        <CartItemsView cart={shoppingCart} />
        {!cartEmpty && <OrderSummary cart={shoppingCart} />}
      </main>
    </>
  );
};

export default CartPage;
