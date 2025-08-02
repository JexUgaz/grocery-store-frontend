export interface Product {
  name: string;
  priceOriginal: number;
  image?: string;
  priceOffer?: number | null;
  currency: "USD" | "PEN";
  quantityInfo: string;
}
