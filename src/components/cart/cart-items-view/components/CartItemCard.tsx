import Image from "next/image";
import QuantityControl from "./QuantityControl";
import PriceOfferLabel from "./PriceOfferLabel";
import { CartItemWithProduct } from "@/types/shopping-cart/CartItemWithProduct";

interface Props {
  item: CartItemWithProduct;
}

const CartItemCard: React.FC<Props> = ({ item }) => {
  const { product, quantity } = item;
  const { priceOffer, priceOriginal, name, quantityInfo, currency, image } =
    product;

  const showPriceOffer = !!priceOffer && priceOffer < priceOriginal;
  const unitPrice = showPriceOffer ? priceOffer : priceOriginal;
  const total = quantity * unitPrice;

  return (
    <li className="flex items-center gap-4 p-4 border-b border-b-secondary/50">
      <div className="relative overflow-hidden size-25 rounded-lg">
        <Image
          src={`/images${image ?? "/no-image.png"}`}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{quantityInfo}</p>
        <p className="mt-1">
          {quantity} x {unitPrice.toFixed(2)} {currency}
        </p>
      </div>
      <div className="w-40 text-sm flex items-center gap-2">
        {showPriceOffer ? (
          <PriceOfferLabel
            priceOffer={priceOffer!}
            priceOriginal={priceOriginal}
          />
        ) : (
          <span className="text-xl text-secondary">
            $ {priceOriginal.toFixed(2)}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-lg text-secondary font-bold">
          <span className="text-sm">Total:</span> $ {total.toFixed(2)}
        </span>
        <div className="flex flex-col gap-1">
          <QuantityControl productId={product.id} quantity={quantity} />
          <p className="text-center text-xs font-semibold">Max. 10 units</p>
        </div>
      </div>
    </li>
  );
};

export default CartItemCard;
