import ButtonAction from "./ButtonAction";
import Link from "next/link";
import LinkIcon from "@/components/icons/LinkIcon";
import Image from "next/image";
import { Product } from "@/types/product/Product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, priceOriginal, priceOffer, currency, quantityInfo, image } =
    product;

  const formattedPrice = (price: number) =>
    currency === "USD" ? `$${price.toFixed(2)}` : `S/.${price.toFixed(2)}`;

  const showOffer =
    typeof priceOffer === "number" && priceOffer < priceOriginal;

  return (
    <div
      className="group cursor-auto w-70 bg-white rounded-3xl overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-105
            flex flex-col"
    >
      <div className="h-40 overflow-hidden bg-white flex items-center justify-center">
        {!image && (
          <span className="text-gray-500 text-sm">Image Placeholder</span>
        )}
        {image && (
          <Image
            alt=""
            src={`/images${image}`}
            width={280}
            height={200}
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />
        )}
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
          <ButtonAction product={product} />
          <Link
            href="#"
            className="relative group/tooltip bg-secondary text-white p-4 rounded-2xl hover:animate-lift"
          >
            <LinkIcon className="size-5" />
            <span className="tooltip tooltip-secondary">View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
