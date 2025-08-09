import { Category } from "@/types/Category";

export const categories = [
  {
    id: "fruits",
    title: "Fruits",
    href: "/shop",
    image: "/images/categories/fruits.png",
    color: "bg-fruits",
  },
  {
    id: "vegetables",
    title: "Vegetables",
    href: "/shop",
    image: "/images/categories/vegetables.png",
    color: "bg-vegetables",
  },
  {
    id: "pantry-staples",
    title: "Pantry Staples",
    href: "/shop",
    image: "/images/categories/pantry-staples.png",
    color: "bg-pantry",
  },
  {
    id: "cleaning-products",
    title: "Cleaning Products",
    href: "/shop",
    image: "/images/categories/cleaning-products.png",
    color: "bg-cleaning",
  },
] as const satisfies Category[];

export type CategoryIds = (typeof categories)[number]["id"];

export type CategoryTitle = (typeof categories)[number]["title"];
