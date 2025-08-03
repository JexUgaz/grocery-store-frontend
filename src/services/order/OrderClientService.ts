import { ApplicationApi } from "@/contracts/apis/ApplicationApi";
import { IOrderService } from "@/contracts/services/IOrderService";
import { ApiResponse } from "@/types/api/ApiResponse";
import { CreateOrder } from "@/types/order/CreateOrder";

export class OrderClientService
  extends ApplicationApi
  implements IOrderService
{
  apiBase: string = "/orders";

  completeOrderClient(body: CreateOrder): Promise<string | null> {
    return super.request<string>({
      endpoint: "",
      method: "POST",
      body: body,
      showSuccessMessage: false,
    });
  }

  completeOrderServer(body: CreateOrder): Promise<ApiResponse<string | null>> {
    throw new Error("Method not implemented.");
  }
}
