import { Product } from "@/types/Product";
import ProductCard from "@/components/shared/products/product-card/ProductCard";
import DraggableScroll from "@/components/shared/draggable-scroll/DraggableScroll";

interface Props {
  products: Product[];
}

const ProductView: React.FC<Props> = ({ products }) => {
  return (
    <DraggableScroll>
      <div className="px-20 lg:px-2 w-max flex gap-6 py-4">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </DraggableScroll>
  );
};

export default ProductView;
