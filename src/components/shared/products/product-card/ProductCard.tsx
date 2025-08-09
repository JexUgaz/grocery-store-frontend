import { Product } from "@/types/Product";
import Link from "next/link";
import LinkIcon from "@/components/icons/LinkIcon";
import Image from "next/image";
import ButtonAction from "./components/ButtonAction";
import { generateSlug } from "@/utils";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, priceOriginal, priceOffer, currency, quantityInfo, images } =
    product;

  const image = images[0];
  const slug = generateSlug(name);

  const formattedPrice = (price: number) =>
    currency === "USD" ? `$${price.toFixed(2)}` : `S/.${price.toFixed(2)}`;

  const showOffer = !!priceOffer;
  const percentageOffer = Math.round(
    ((priceOriginal - (priceOffer ?? 0)) / priceOriginal) * 100
  );

  return (
    <div
      className="group cursor-auto w-70 bg-white rounded-3xl overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-105
            flex flex-col"
    >
      <div className="relative h-40 w-72 overflow-hidden bg-white flex items-center justify-center">
        {!image && (
          <span className="text-gray-500 text-sm">Image Placeholder</span>
        )}
        {image && (
          <Image
            alt={`${name} Image`}
            src={image}
            fill
            sizes="18rem"
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />
        )}
        {showOffer && (
          <span className="absolute top-2 left-3 bg-red text-white font-bold px-2 rounded-3xl">
            -{percentageOffer}%
          </span>
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
            href={`/shop/${slug}`}
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
