import { GroceryStoreApi } from "@/contracts/apis/GroceryStoreApi";
import {
  GetByIdsParams,
  IProductService,
} from "@/contracts/services/IProductService";
import { ProductWithCategory } from "@/types/product/ProductWithCategory";

export class ProductService extends GroceryStoreApi implements IProductService {
  apiBase: string = "/product";

  getByIds({ ids }: GetByIdsParams): Promise<ProductWithCategory[] | null> {
    return super.request({
      endpoint: "/by-ids",
      method: "POST",
      body: { ids },
    });
  }
}
