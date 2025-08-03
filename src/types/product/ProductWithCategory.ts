import { Category } from "@/types/category/Category";
import { Product } from "./Product";

export interface ProductWithCategory extends Product {
  category: Category;
}
