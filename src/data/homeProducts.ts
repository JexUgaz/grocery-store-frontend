import { Product } from "@/types/Product";
import { CategoryTitle } from "./categories";
import { products } from "./products";

export const homeProducts: Record<CategoryTitle, Product[]> = {
  Fruits: products.filter((p) => p.categoryId === "fruits"),
  "Pantry Staples": products.filter((p) => p.categoryId === "pantry-staples"),
  Vegetables: products.filter((p) => p.categoryId === "vegetables"),
  "Cleaning Products": products.filter(
    (p) => p.categoryId === "cleaning-products"
  ),
};
