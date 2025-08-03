import { ProductWithCategory } from "../product/ProductWithCategory";
import { CartItem } from "./CartItem";

export interface CartItemWithProduct extends Pick<CartItem, "quantity"> {
  product: ProductWithCategory;
}
