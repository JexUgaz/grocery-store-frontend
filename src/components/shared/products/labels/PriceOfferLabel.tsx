import { cn } from "@/utils";
import { ClassValue } from "clsx";

interface Props {
  priceOffer: number;
  priceOriginal: number;
  priceOfferClass?: ClassValue;
  priceOriginalClass?: ClassValue;
  percentageClass?: ClassValue;
}

const PriceOfferLabel: React.FC<Props> = ({
  priceOffer,
  priceOriginal,
  percentageClass = "text-sm",
  priceOfferClass = "text-xl",
  priceOriginalClass = "text-sm",
}) => {
  const percentage = Math.round(
    ((priceOriginal - priceOffer) / priceOriginal) * 100
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <span className={cn("text-secondary", priceOfferClass)}>
          $ {priceOffer.toFixed(2)}
        </span>
        <span
          className={cn(
            "font-semibold bg-red-500 text-white py-[2px] px-[5px] rounded-xl",
            percentageClass
          )}
        >
          -{percentage}%
        </span>
      </div>
      <span
        className={cn(
          "line-through text-secondary text-muted-foreground",
          priceOriginalClass
        )}
      >
        $ {priceOriginal.toFixed(2)}
      </span>
    </div>
  );
};
export default PriceOfferLabel;
