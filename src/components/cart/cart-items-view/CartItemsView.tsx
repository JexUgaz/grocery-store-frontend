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
    <div className="w-full sm:w-[90%] lg:w-[50%] xl:w-auto xl:max-w-2xl 2xl:max-w-3xl">
      <h1 className="sm:ms-6 mb-8 text-2xl sm:text-3xl font-bold text-secondary flex flex-col xs:flex-row justify-between items-center xs:items-end">
        Your Shopping Cart{" "}
        {!cartEmpty && (
          <span className="text-sm sm:text-base">
            ({totalItems} product{totalItems === 1 ? "" : "s"})
          </span>
        )}
      </h1>
      <div className="overflow-hidden bg-white rounded-2xl sm:rounded-4xl py-5 2xl:py-10 lg:px-0 2xl:px-14">
        {cartEmpty && <EmptyCartMessage />}
        {!cartEmpty && (
          <ul className="space-y-6">
            {items.map((item) => (
              <CartItemCard key={item.product.id} item={item} />
            ))}
          </ul>
        )}
      </div>
      <div className="block lg:hidden h-50"></div>
    </div>
  );
};
export default CartItemsView;
