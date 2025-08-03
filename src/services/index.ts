import { CategoryService } from "./category/CategoryService";
import { OrderClientService } from "./order/OrderClientService";
import { OrderService } from "./order/OrderService";
import { ProductService } from "./product/ProductService";
import { ShoppingCartService } from "./shopping-cart/ShoppingCartService";

export const shoppingCartService = new ShoppingCartService();
export const categoryService = new CategoryService();
export const productService = new ProductService();
export const orderService = new OrderService();
export const orderClientService = new OrderClientService();
