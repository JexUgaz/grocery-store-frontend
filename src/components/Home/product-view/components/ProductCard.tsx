import { Product } from "@/types/Product";
import ButtonAction from "./ButtonAction";
import Link from "next/link";
import LinkIcon from "@/components/icons/LinkIcon";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, priceOriginal, priceOffer, currency, quantityInfo } = product;

  const formattedPrice = (price: number) =>
    currency === "USD" ? `$${price.toFixed(2)}` : `S/.${price.toFixed(2)}`;

  const showOffer =
    typeof priceOffer === "number" && priceOffer < priceOriginal;

  return (
    <div
      className="group cursor-auto w-64 bg-white rounded-3xl overflow-hidden shadow-md transition hover:scale-105
            flex flex-col"
    >
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Image Placeholder</span>
      </div>

      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-secondary">{name}</h3>
          <p className="text-sm text-gray-500">{quantityInfo}</p>

          <div className="flex items-center gap-2">
            {showOffer ? (
              <>
                <span className="text-accent font-bold">
                  {formattedPrice(priceOffer!)}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  {formattedPrice(priceOriginal)}
                </span>
              </>
            ) : (
              <span className="text-secondary font-semibold">
                {formattedPrice(priceOriginal)}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-center py-2 gap-1 mx-5">
          <Link
            href={`/${name}`}
            className="bg-secondary text-white p-4 rounded-2xl hover:animate-lift"
          >
            <LinkIcon className="size-5" />
          </Link>
          <ButtonAction />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
