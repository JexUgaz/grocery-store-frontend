import DiscountsSummary from "./components/DiscountsSummary";
import CheckoutButton from "./components/CheckoutButton";
import { ShoppingCart } from "@/types/shopping-cart/ShoppingCart";

interface Props {
  cart: ShoppingCart;
}

const OrderSummary: React.FC<Props> = ({ cart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalOriginalPrice = cart.reduce(
    (sum, item) => sum + item.product.priceOriginal * item.quantity,
    0
  );

  const discounts = cart
    .map((item) => {
      const { priceOriginal, priceOffer, name } = item.product;
      const hasDiscount = !!priceOffer;
      return hasDiscount
        ? {
            name,
            discount: (priceOriginal - priceOffer) * item.quantity,
          }
        : null;
    })
    .filter(Boolean) as { name: string; discount: number }[];

  const totalDiscount = discounts.reduce((sum, d) => sum + d.discount, 0);
  const totalPrice = totalOriginalPrice - totalDiscount;

  return (
    <div className="w-full max-w-lg">
      <h1 className="ms-6 mb-8 text-3xl font-bold text-secondary">
        Order Summary
      </h1>
      <div className="flex flex-col bg-white rounded-4xl py-10 px-14 gap-8 shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-secondary font-semibold text-base">
            <p>Products ({totalItems})</p>
            <p>$ {totalOriginalPrice.toFixed(2)}</p>
          </div>

          <span className="w-full h-[1px] bg-secondary opacity-20"></span>

          <DiscountsSummary
            discounts={discounts}
            totalDiscount={totalDiscount}
          />

          <span className="w-full h-[1px] bg-secondary opacity-20"></span>

          <div className="flex justify-between text-secondary font-bold text-lg">
            <p>Total</p>
            <p>$ {totalPrice.toFixed(2)}</p>
          </div>
        </div>

        <CheckoutButton />
      </div>
    </div>
  );
};

export default OrderSummary;
