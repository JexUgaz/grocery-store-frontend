import { Category } from "@/types/Category";

export const categories: Category[] = [
  {
    title: "Fruits",
    href: "/shop",
    image: "/images/categories/fruits.png",
    color: "bg-fruits",
  },
  {
    title: "Vegetables",
    href: "/shop",
    image: "/images/categories/vegetables.png",
    color: "bg-vegetables",
  },
  {
    title: "Pantry Staples",
    href: "/shop",
    image: "/images/categories/pantry-staples.png",
    color: "bg-pantry",
  },
  {
    title: "Cleaning Products",
    href: "/shop",
    image: "/images/categories/cleaning-products.png",
    color: "bg-cleaning",
  },
];

const categoryTitles = [
  "Fruits",
  "Vegetables",
  "Pantry Staples",
  "Cleaning Products",
] as const;

export type CategoryTitle = (typeof categoryTitles)[number];
