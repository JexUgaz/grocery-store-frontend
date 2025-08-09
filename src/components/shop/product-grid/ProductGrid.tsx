import ProductCard from "@/components/shared/products/product-card/ProductCard";
import { filterProducts } from "@/utils";
import { FilterProps } from "@/components/shop/validations";
import Pagination from "./components/Pagination";
import EmptyResult from "./components/EmptyResult";
import { ShopSortOptions } from "@/types/ShopSortOptions";

type Props = {
  filters: FilterProps;
  page: number;
  query?: string;
  sort?: ShopSortOptions;
};

const ProductGrid: React.FC<Props> = async ({ filters, page, query, sort }) => {
  const { data, pagination } = await filterProducts({
    filters,
    page,
    query,
    sort,
    delay: 10,
  });

  if (pagination.totalItems === 0) return <EmptyResult query={query} />;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination metadata={pagination} />
    </>
  );
};

export default ProductGrid;
