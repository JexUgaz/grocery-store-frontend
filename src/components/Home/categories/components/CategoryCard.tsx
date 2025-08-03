import { Category } from "@/types/category/Category";
import Image from "next/image";
import Link from "next/link";

interface Props {
  index: number;
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ category, index }) => {
  const { id, name, image } = category;
  const colors = [
    "bg-pastel-pink",
    "bg-pastel-yellow",
    "bg-pastel-green",
    "bg-pastel-blue",
  ];
  const color = colors[index % colors.length];

  return (
    <Link
      href={`/${id}`}
      className={`group relative max-w-[250px] overflow-hidden rounded-3xl ${color}`}
    >
      <Image
        alt=""
        src={`/images${image}`}
        width={250}
        height={250}
        className="object-cover transition-transform duration-400 scale-110 group-hover:scale-100"
      />
      <span className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-secondary/50 to-transparent group-hover:from-black" />
      <span className="absolute bottom-5 left-[50%] -translate-x-[50%] text-white text-xl font-bold text-center group-hover:animate-lift">
        {name}
      </span>
    </Link>
  );
};

export default CategoryCard;
