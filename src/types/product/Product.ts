export interface Product {
  id: string;
  name: string;
  quantityInfo: string;
  priceOffer?: number;
  currentPrice: number;
  priceOriginal: number;
  currency: string;
  stock: number;
  isActive: boolean;
  image?: string;
  createdAt: string;
}
