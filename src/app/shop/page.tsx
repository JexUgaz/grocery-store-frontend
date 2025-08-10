import ProductsSkeleton from "@/components/shop/product-grid/components/ProductsSkeleton";
import ProductGrid from "@/components/shop/product-grid/ProductGrid";
import ShopFilters from "@/components/shop/shop-filters/ShopFilters";
import ShopSearchBar from "@/components/shop/shop-search-bar/ShopSearchBar";
import ShopSort from "@/components/shop/ShopSort";
import { FilterProps } from "@/components/shop/validations";
import { ShopSortOptions } from "@/types/ShopSortOptions";
import { Suspense } from "react";

interface Params extends FilterProps {
  page?: string;
  query?: string;
  sort?: ShopSortOptions;
}

interface Props {
  searchParams: Promise<Params>;
}

const ShopPage: React.FC<Props> = async ({ searchParams }) => {
  const {
    category = null,
    max = null,
    min = null,
    sale: saleParam,
    page: pageParam = "1",
    query,
    sort,
  } = await searchParams;

  const sale = typeof saleParam === "string" ? saleParam === "true" : false;
  const page = Number(pageParam);
  const filters: FilterProps = { category, max, min, sale };

  return (
    <main className="w-full py-12 px-2 sm:px-6 flex flex-col lg:flex-row justify-center gap-4">
      <aside className="w-full lg:w-80 xl:w-64">
        <ShopFilters initFilters={filters} />
      </aside>

      <section className="w-full lg:w-170 xl:w-250 2xl:w-300 flex flex-col gap-6 bg-white rounded-4xl py-8 px-5">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <ShopSearchBar query={query} />
          <ShopSort sort={sort} />
        </div>

        <Suspense
          key={JSON.stringify({ ...filters, page, sort, query })}
          fallback={<ProductsSkeleton />}
        >
          <ProductGrid
            filters={filters}
            page={page}
            query={query}
            sort={sort}
          />
        </Suspense>
      </section>
    </main>
  );
};
export default ShopPage;
