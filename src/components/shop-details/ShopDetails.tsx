import { categories } from "@/data/categories";
import PriceOfferLabel from "@/components/shared/products/labels/PriceOfferLabel";
import DetailsButtonAdd from "./components/DetailsButtonAdd";
import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";
import ImageView from "./components/ImageView";

interface Props {
  cartItem?: CartItem;
  product: Product;
}

const ShopDetails: React.FC<Props> = ({ cartItem, product }) => {
  const {
    images,
    name,
    quantityInfo,
    priceOffer,
    priceOriginal,
    categoryId,
    features,
  } = cartItem?.product ?? product;

  const category = categories.find((c) => c.id === categoryId);
  const showPriceOffer = !!priceOffer && priceOffer < priceOriginal;

  return (
    <div className="text-lg flex gap-8 bg-white rounded-5xl p-6">
      <ImageView images={images} name={name} />

      <div className="min-w-md max-w-xl">
        <h1 className="text-4xl font-bold line-clamp-2">{name}</h1>
        <p className="text-gray-500 mb-4">{category?.title}</p>

        <div className="flex items-center gap-2">
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

        <div className="mt-4 text-base text-gray-600 italic">
          <p>{quantityInfo}</p>
        </div>
        <div className="text-secondary flex flex-col mt-5 gap-2">
          <h3 className="font-semibold border-b-2 border-b-secondary/80">
            Main features
          </h3>
          <ul className="text-base list-disc list-inside">
            {features?.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>

        <DetailsButtonAdd cartItem={cartItem} product={product} />
      </div>
    </div>
  );
};

export default ShopDetails;
