import { CartItem } from "@/types/CartItem";
import CartItemCard from "./components/CartItemCard";
import EmptyCartMessage from "./components/EmptyCartMessage";

interface Props {
  items: CartItem[];
}
const CartItemsView: React.FC<Props> = ({ items }) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartEmpty = items.length === 0;

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
            {items.map((item) => (
              <CartItemCard key={item.product.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default CartItemsView;
