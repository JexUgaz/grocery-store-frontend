interface Props {
  priceOffer: number;
  priceOriginal: number;
}

const PriceOfferLabel: React.FC<Props> = ({ priceOffer, priceOriginal }) => {
  const percentage = Math.round(
    ((priceOriginal - priceOffer) / priceOriginal) * 100
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <span className="text-xl text-secondary">
          $ {priceOffer.toFixed(2)}
        </span>
        <span className="font-semibold text-sm bg-red-500 text-white py-[2px] px-[5px] rounded-xl">
          -{percentage}%
        </span>
      </div>
      <span className="line-through text-secondary text-muted-foreground text-sm">
        $ {priceOriginal.toFixed(2)}
      </span>
    </div>
  );
};
export default PriceOfferLabel;
