import { Category } from "@/types/category/Category";
import CategoryCard from "./components/CategoryCard";

interface Props {
  categories: Category[];
}

const CategoriesView: React.FC<Props> = ({ categories }) => (
  <div className="w-full flex flex-col items-center">
    <div className="flex gap-6">
      {categories.map((cat, idx) => (
        <CategoryCard key={cat.id} category={cat} index={idx} />
      ))}
    </div>
  </div>
);

export default CategoriesView;
