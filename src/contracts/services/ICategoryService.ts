import { CategoryWithProducts } from "@/types/category/CategoryWithProducts";

interface ProductByCategoryParams {
  perCategory?: number;
}

export interface ICategoryService {
  getProductsByCategory(
    params: ProductByCategoryParams
  ): Promise<CategoryWithProducts[] | null>;
}
