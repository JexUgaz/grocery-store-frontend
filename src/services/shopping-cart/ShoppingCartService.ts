import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";
import { hasCookie, getCookie, setCookie } from "cookies-next";
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

  async removeFromCart(product: Product): Promise<void> {
    const cart = await this.getCookieCartClient();
    const removedId = product.id;
    const index = cart.findIndex((item) => item.product.id === removedId);
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
    item.total = parseFloat((newQuantity * item.unitPrice).toFixed(2));

    cart[index] = item;
    this.save(cart);
  }

  async addToCart(product: Product): Promise<void> {
    const cart = await this.getCookieCartClient();
    const newId = product.id;
    const index = cart.findIndex((item) => item.product.id === newId);
    const itemExists = index !== -1;

    if (itemExists) {
      const oldItem = cart[index];
      const { quantity, unitPrice } = oldItem;
      if (quantity === this.maxQuantityByProduct) return;

      const newQuantity = quantity + 1;

      oldItem.quantity = newQuantity;
      oldItem.total = parseFloat((newQuantity * unitPrice).toFixed(2));
      cart[index] = oldItem;
      this.save(cart);
      return;
    }

    const { priceOriginal, priceOffer } = product;
    const price = priceOffer ?? priceOriginal;
    cart.push({
      quantity: 1,
      total: price,
      unitPrice: price,
      product,
    });
    this.save(cart);
  }

  private save(newCart: CartItem[]) {
    setCookie(this.cartKey, JSON.stringify(newCart));
  }
}
