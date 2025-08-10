import { CartItem } from "@/types/CartItem";
import Image from "next/image";
import PriceOfferLabel from "@/components/shared/products/labels/PriceOfferLabel";
import QuantityControl from "@/components/shared/products/cart-buttons/QuantityControl";
import Link from "next/link";

interface Props {
  item: CartItem;
}

const CartItemCard: React.FC<Props> = ({ item }) => {
  const { product, quantity, total, unitPrice } = item;
  const { priceOriginal, priceOffer, images, name, quantityInfo, currency } =
    product;

  const image = images[0];

  const showPriceOffer = !!priceOffer && priceOffer < priceOriginal;

  return (
    <li className="flex flex-wrap sm:flex-nowrap items-center gap-4 p-4 border-b border-b-secondary/50">
      <div className="w-full sm:w-auto sm:flex-1 flex gap-4">
        <Link
          href={`/shop/${product.id}`}
          className="relative overflow-hidden size-25 rounded-lg"
        >
          <Image
            src={image ?? "/images/no-image.png"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </Link>
        <div className="sm:w-auto sm:flex-1 flex flex-col">
          <h2 className="text-xl sm:text-lg xl:text-xl font-semibold">
            {name}
          </h2>
          <p className="text-base sm:text-sm text-gray-600">{quantityInfo}</p>
          <p className="text-base sm:text-sm xl:text-base mt-1">
            {quantity} x {unitPrice.toFixed(2)} {currency}
          </p>
        </div>
        <span className="block sm:hidden ml-auto text-base text-center xl:text-lg text-secondary font-bold">
          <span className="text-xs xl:text-sm">Total:</span> ${total}
        </span>
      </div>
      <div className="sm:w-30 xl:w-40 text-sm flex items-center gap-2">
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
      <div className="ml-auto sm:ml-0 flex flex-col gap-2 items-center">
        <span className="hidden sm:block text-base xl:text-lg text-secondary font-bold">
          <span className="text-xs xl:text-sm">Total:</span> ${total}
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
