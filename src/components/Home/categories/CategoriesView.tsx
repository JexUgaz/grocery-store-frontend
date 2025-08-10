import { categories } from "@/data/categories";
import CategoryCard from "./components/CategoryCard";
import DraggableScroll from "@/components/shared/draggable-scroll/DraggableScroll";

const CategoriesView = () => (
  <div className="w-full flex flex-col items-center">
    <DraggableScroll>
      <div className="px-20 lg:px-0 w-max lg:w-auto flex justify-center gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </DraggableScroll>
  </div>
);

export default CategoriesView;
