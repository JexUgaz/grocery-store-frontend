import { ProductWithCategory } from "@/types/product/ProductWithCategory";
import { CartItem } from "@/types/shopping-cart/CartItem";
import { CartItemWithProduct } from "@/types/shopping-cart/CartItemWithProduct";
import { ShoppingCart } from "@/types/shopping-cart/ShoppingCart";
import { hasCookie, getCookie, setCookie, deleteCookie } from "cookies-next";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export class ShoppingCartService {
  private readonly cartKey = "shopping-cart";
  public readonly maxQuantityByProduct = 10;

  async getCookieCartServer(
    cookieStore: ReadonlyRequestCookies
  ): Promise<CartItem[]> {
    const cookie = cookieStore.get(this.cartKey);
    return JSON.parse(cookie?.value ?? "[]");
  }

  async getCookieCartClient(): Promise<CartItem[]> {
    if (!hasCookie(this.cartKey)) return [];
    return JSON.parse((getCookie(this.cartKey) as string) ?? "[]");
  }

  fromCookieCartToShoppingCart(
    cookieCart: CartItem[],
    products: ProductWithCategory[]
  ): ShoppingCart {
    return cookieCart
      .map(({ quantity, productId }: CartItem): CartItemWithProduct | null => {
        const product = products.find((p) => p.id === productId);
        if (!product) return null;
        return {
          quantity,
          product,
        };
      })
      .filter((c) => !!c);
  }

  async removeFromCart(productId: string): Promise<void> {
    const cart = await this.getCookieCartClient();
    const index = cart.findIndex((item) => item.productId === productId);
    const itemExists = index !== -1;
    if (!itemExists) return;

    const item = cart[index];
    const newQuantity = item.quantity - 1;

    const hasToRemove = newQuantity === 0;
    if (hasToRemove) {
      cart.splice(index, 1);
      this.save(cart);
      return;
    }

    item.quantity = newQuantity;

    cart[index] = item;
    this.save(cart);
  }

  async addToCart(productId: string): Promise<void> {
    const cart = await this.getCookieCartClient();
    const index = cart.findIndex((item) => item.productId === productId);
    const itemExists = index !== -1;

    if (itemExists) {
      const oldItem = cart[index];
      const { quantity } = oldItem;
      if (quantity === this.maxQuantityByProduct) return;

      const newQuantity = quantity + 1;

      oldItem.quantity = newQuantity;
      cart[index] = oldItem;
      this.save(cart);
      return;
    }

    cart.push({
      quantity: 1,
      productId,
    });
    this.save(cart);
  }

  async cleanCart(): Promise<void> {
    await deleteCookie(this.cartKey);
  }

  private save(newCart: CartItem[]) {
    setCookie(this.cartKey, JSON.stringify(newCart));
  }
}
