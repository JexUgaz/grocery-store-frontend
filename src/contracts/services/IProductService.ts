import { ProductWithCategory } from "@/types/product/ProductWithCategory";

export interface GetByIdsParams {
  ids: string[];
}

export interface IProductService {
  getByIds(params: GetByIdsParams): Promise<ProductWithCategory[] | null>;
}
