import CheckoutView from "@/components/checkout/checkout-view/CheckoutView";
import { shoppingCartService } from "@/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);

  if (cart.length === 0) redirect("/");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return (
    <main className="w-full bg-muted py-12 px-6 flex justify-center">
      <CheckoutView totalAmount={totalAmount} />
    </main>
  );
};

export default CheckoutPage;
