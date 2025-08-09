import { Product } from "@/types/Product";
import ProductCard from "@/components/shared/products/product-card/ProductCard";
import DraggableScroll from "@/components/shared/draggable-scroll/DraggableScroll";

interface Props {
  products: Product[];
}

const ProductView: React.FC<Props> = ({ products }) => {
  return (
    <DraggableScroll>
      <div className="w-max flex gap-6 px-2 py-4">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </DraggableScroll>
  );
};

export default ProductView;
