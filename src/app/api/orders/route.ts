import { orderService } from "@/services";
import { CreateOrder } from "@/types/order/CreateOrder";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateOrder;
  const response = await orderService.completeOrderServer(body);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
