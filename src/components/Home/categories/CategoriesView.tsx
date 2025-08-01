import { categories } from "@/data/categories";
import CategoryCard from "./components/CategoryCard";

const CategoriesView = () => (
  <div className="w-full flex flex-col items-center">
    <div className="flex gap-6">
      {categories.map((cat) => (
        <CategoryCard key={cat.title} {...cat} />
      ))}
    </div>
  </div>
);

export default CategoriesView;
