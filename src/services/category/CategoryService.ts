import { GroceryStoreApi } from "@/contracts/apis/GroceryStoreApi";
import { ICategoryService } from "@/contracts/services/ICategoryService";
import { CategoryWithProducts } from "@/types/category/CategoryWithProducts";

export class CategoryService
  extends GroceryStoreApi
  implements ICategoryService
{
  apiBase: string = "/category";

  getProductsByCategory({
    perCategory = 10,
  }): Promise<CategoryWithProducts[] | null> {
    return super.request<CategoryWithProducts[]>({
      endpoint: "/products-by-category",
      queryParams: {
        perCategory: perCategory.toString(),
      },
    });
  }
}
