import { Product } from "@/types/product/Product";
import ProductCard from "./components/ProductCard";
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
