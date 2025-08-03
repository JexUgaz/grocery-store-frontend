import { GroceryStoreApi } from "@/contracts/apis/GroceryStoreApi";
import { IOrderService } from "@/contracts/services/IOrderService";
import { ApiResponse } from "@/types/api/ApiResponse";
import { CreateOrder } from "@/types/order/CreateOrder";

export class OrderService extends GroceryStoreApi implements IOrderService {
  apiBase: string = "/orders";

  completeOrderServer(body: CreateOrder): Promise<ApiResponse<string | null>> {
    return super.apiRequest<string>({
      endpoint: "",
      method: "POST",
      body: body,
    });
  }

  completeOrderClient(body: CreateOrder): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
}
