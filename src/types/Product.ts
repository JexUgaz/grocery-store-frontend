export interface Product {
  name: string;
  priceOriginal: number;
  priceOffer?: number | null;
  currency: "USD" | "PEN";
  quantityInfo: string;
}
