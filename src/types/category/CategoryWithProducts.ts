import { Product } from "@/types/product/Product";
import { Category } from "./Category";

export interface CategoryWithProducts extends Category {
  products: Product[];
}
