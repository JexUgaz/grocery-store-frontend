import { CreateOrderItem } from "./CreateOrderItem";

export interface CreateOrder {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  clientCity: string;
  clientReference?: string;
  items: CreateOrderItem[];
}
