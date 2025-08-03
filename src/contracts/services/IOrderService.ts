import { ApiResponse } from "@/types/api/ApiResponse";
import { CreateOrder } from "@/types/order/CreateOrder";

export interface IOrderService {
  completeOrderServer(body: CreateOrder): Promise<ApiResponse<string | null>>;
  completeOrderClient(body: CreateOrder): Promise<string | null>;
}
