import { CategoryIds } from "@/data/categories";

export interface Product {
  id: string;
  name: string;
  categoryId: CategoryIds;
  priceOriginal: number;
  images: string[];
  priceOffer?: number | null;
  currency: "USD" | "PEN";
  quantityInfo: string;
  features?: string[];
}
