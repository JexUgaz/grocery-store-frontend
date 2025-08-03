import { ShoppingCart } from "@/types/shopping-cart/ShoppingCart";
import CartItemCard from "./components/CartItemCard";
import EmptyCartMessage from "./components/EmptyCartMessage";

interface Props {
  cart: ShoppingCart;
}
const CartItemsView: React.FC<Props> = ({ cart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartEmpty = totalItems === 0;

  return (
    <div className="w-full max-w-3xl">
      <h1 className="ms-6 mb-8 text-3xl font-bold text-secondary flex justify-between items-end">
        Your Shopping Cart{" "}
        {!cartEmpty && (
          <span className="text-base">
            ({totalItems} producto{totalItems === 1 ? "" : "s"})
          </span>
        )}
      </h1>
      <div className="bg-white rounded-4xl py-10 px-14">
        {cartEmpty && <EmptyCartMessage />}
        {!cartEmpty && (
          <ul className="space-y-6">
            {cart.map((item) => (
              <CartItemCard key={item.product.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default CartItemsView;
