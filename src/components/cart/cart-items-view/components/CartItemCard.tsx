import { CartItem } from "@/types/CartItem";
import Image from "next/image";
import QuantityControl from "./QuantityControl";
import PriceOfferLabel from "./PriceOfferLabel";

interface Props {
  item: CartItem;
}

const CartItemCard: React.FC<Props> = ({ item }) => {
  const { product, quantity, total, unitPrice } = item;

  const showPriceOffer =
    !!product.priceOffer && product.priceOffer < product.priceOriginal;

  return (
    <li className="flex items-center gap-4 p-4 border-b border-b-secondary/50">
      <div className="relative overflow-hidden size-25 rounded-lg">
        <Image
          src={product.image ?? "/images/no-image.png"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.quantityInfo}</p>
        <p className="mt-1">
          {quantity} x {unitPrice.toFixed(2)} {product.currency}
        </p>
      </div>
      <div className="w-40 text-sm flex items-center gap-2">
        {showPriceOffer ? (
          <PriceOfferLabel
            priceOffer={product.priceOffer!}
            priceOriginal={product.priceOriginal}
          />
        ) : (
          <span className="text-xl text-secondary">
            $ {product.priceOriginal.toFixed(2)}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-lg text-secondary font-bold">
          <span className="text-sm">Total:</span> $ {total}
        </span>
        <div className="flex flex-col gap-1">
          <QuantityControl product={product} quantity={quantity} />
          <p className="text-center text-xs font-semibold">Max. 10 units</p>
        </div>
      </div>
    </li>
  );
};

export default CartItemCard;
