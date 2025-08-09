import CheckoutView from "@/components/checkout/checkout-view/CheckoutView";
import NavBar from "@/components/shared/navbar/NavBar";
import { shoppingCartService } from "@/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const runtime = "edge";

const CheckoutPage = async () => {
  const cookieStore = await cookies();
  const cart = await shoppingCartService.getCookieCartServer(cookieStore);

  if (cart.length === 0) redirect("/");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return (
    <>
      <NavBar />
      <main className="w-full bg-muted py-12 px-6 flex justify-center">
        <CheckoutView totalAmount={totalAmount} />
      </main>
    </>
  );
};

export default CheckoutPage;
