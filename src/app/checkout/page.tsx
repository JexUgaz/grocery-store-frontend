import CheckoutView from "@/components/checkout/checkout-view/CheckoutView";
import NavBar from "@/components/shared/navbar/NavBar";

const CheckoutPage = () => {
  return (
    <>
      <NavBar />
      <main className="w-full bg-muted py-12 px-6 flex justify-center">
        <CheckoutView />
      </main>
    </>
  );
};

export default CheckoutPage;
