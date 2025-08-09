import { Category } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

const CategoryCard: React.FC<Category> = ({
  id,
  title,
  href,
  image,
  color,
}) => {
  return (
    <Link
      href={`${href}?category=${id}`}
      className={`group relative max-w-[250px] overflow-hidden rounded-3xl ${color}`}
    >
      <Image
        alt=""
        src={image}
        width={250}
        height={250}
        className="object-cover transition-transform duration-400 scale-110 group-hover:scale-100"
      />
      <span className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-secondary/50 to-transparent group-hover:from-black" />
      <span className="absolute bottom-5 left-[50%] -translate-x-[50%] text-white text-xl font-bold text-center group-hover:animate-lift">
        {title}
      </span>
    </Link>
  );
};

export default CategoryCard;
