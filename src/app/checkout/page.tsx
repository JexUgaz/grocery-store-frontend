import CheckoutView from "@/components/checkout/checkout-view/CheckoutView";
import NavBar from "@/components/shared/navbar/NavBar";
import { productService, shoppingCartService } from "@/services";
import { CreateOrderItem } from "@/types/order/CreateOrderItem";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);

  if (cart.length === 0) redirect("/");

  const ids = cart.map((c) => c.productId);
  const products = await productService.getByIds({ ids });

  if (!products) redirect("/");

  const shoppingCart = shoppingCartService.fromCookieCartToShoppingCart(
    cart,
    products
  );

  const totalAmount = shoppingCart.reduce((sum, item) => {
    const { priceOriginal, priceOffer } = item.product;
    const usePriceOffer = !!priceOffer && priceOffer < priceOriginal;
    const unitPrice = usePriceOffer ? priceOffer : priceOriginal;

    return sum + unitPrice * item.quantity;
  }, 0);

  const items = shoppingCart.map(
    (s): CreateOrderItem => ({
      productId: s.product.id,
      quantity: s.quantity,
    })
  );

  return (
    <>
      <NavBar />
      <main className="w-full bg-muted py-12 px-6 flex justify-center">
        <CheckoutView totalAmount={totalAmount} items={items} />
      </main>
    </>
  );
};

export default CheckoutPage;
