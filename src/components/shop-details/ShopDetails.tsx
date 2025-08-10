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
    <div className="text-lg flex flex-col lg:flex-row gap-4 sm:gap-2 lg:gap-8 bg-white rounded-5xl p-6 sm:w-[90%] md:w-[80%] lg:w-auto">
      <div className="flex lg:hidden gap-1 flex-col">
        <h1 className="text-3xl xs:text-4xl font-bold line-clamp-2">{name}</h1>
        <span className="font-bold text-sm xs:text-base text-gray-600 italic">
          {quantityInfo}
        </span>
        <p className="text-lg text-gray-500 mb-4">{category?.title}</p>
      </div>
      <ImageView images={images} name={name} />

      <div className="lg:min-w-sm xl:min-w-md lg:max-w-xl">
        <h1 className="hidden lg:block text-4xl font-bold line-clamp-2">
          {name}
        </h1>
        <span className="hidden lg:block font-bold text-base text-gray-600 italic">
          {quantityInfo}
        </span>
        <p className="hidden lg:block text-gray-500 mb-4">{category?.title}</p>

        <div className="flex items-center gap-2">
          {showPriceOffer ? (
            <PriceOfferLabel
              priceOffer={priceOffer!}
              priceOriginal={priceOriginal}
              priceOfferClass="text-2xl xs:text-3xl font-bold"
              priceOriginalClass="text-base xs:text-lg"
            />
          ) : (
            <span className="text-2xl xs:text-3xl text-secondary font-bold">
              $ {priceOriginal.toFixed(2)}
            </span>
          )}
        </div>
        <p className="text-lg font-semibold">Online Price</p>

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
