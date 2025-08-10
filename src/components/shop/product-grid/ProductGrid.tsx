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
      <div className="w-full flex justify-center flex-wrap gap-x-3 gap-y-8">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            width="w-[90%] xs:w-[70%] sm:w-[45%] md:w-[38%] ml:w-[32%] lg:w-[48%] xl:w-[31%] 2xl:w-[24%]"
          />
        ))}
      </div>
      <Pagination metadata={pagination} />
    </>
  );
};

export default ProductGrid;
