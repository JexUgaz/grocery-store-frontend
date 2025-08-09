import { FilterProps } from "@/components/shop/validations";
import { products } from "@/data/products";
import { PaginatedResult, PaginationMetadata } from "@/types/pagination";
import { Product } from "@/types/Product";
import { ShopSortOptions } from "@/types/ShopSortOptions";

export const filterProducts = async ({
  delay = 2000,
  filters,
  sort,
  query,
  page = 1,
  pageSize = 12,
}: {
  filters: FilterProps;
  query?: string;
  delay?: number;
  page?: number;
  pageSize?: number;
  sort?: ShopSortOptions;
}): Promise<PaginatedResult<Product>> => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const normalizedQuery = query?.trim().toLowerCase() ?? "";

  let filtered = products.filter(
    ({ categoryId, priceOriginal, priceOffer, name }) => {
      const price = priceOffer ?? priceOriginal;
      const sale = !!priceOffer;

      if (filters.min && Number(filters.min) > price) {
        return false;
      }
      if (filters.max && Number(filters.max) < price) {
        return false;
      }
      if (filters.category && filters.category !== categoryId) {
        return false;
      }
      if (filters.sale === true && sale !== true) {
        return false;
      }

      if (normalizedQuery && !name.toLowerCase().includes(normalizedQuery)) {
        return false;
      }

      return true;
    }
  );

  if (sort) {
    filtered = [...filtered].sort((a, b) => {
      const priceA = a.priceOffer ?? a.priceOriginal;
      const priceB = b.priceOffer ?? b.priceOriginal;

      switch (sort) {
        case ShopSortOptions.PRICE_ASC:
          return priceA - priceB;
        case ShopSortOptions.PRICE_DESC:
          return priceB - priceA;
        default:
          return 0;
      }
    });
  }

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const safePage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = filtered.slice(startIndex, endIndex);

  const pagination: PaginationMetadata = {
    page: safePage,
    pageSize,
    totalPages,
    totalItems,
    hasNextPage: safePage < totalPages,
    hasPreviousPage: safePage > 1,
    nextPage: safePage < totalPages ? safePage + 1 : null,
    previousPage: safePage > 1 ? safePage - 1 : null,
  };

  return { data, pagination };
};
