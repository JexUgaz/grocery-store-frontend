"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import { cn } from "@/utils";
import { ClassValue } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  link: string;
  children: React.ReactNode;
  className?: string;
}

const NavBarItemMobile: React.FC<Props> = ({ children, link, className }) => {
  const pathName = usePathname();
  const isActive = pathName.includes(link);
  const itemClass: ClassValue = isActive
    ? "bg-white text-secondary font-bold"
    : "text-white";
  return (
    <li className="w-[90%]">
      <Link
        href={link}
        className={cn(
          "relative rounded-xl py-3 px-4 flex gap-2 items-center cursor-pointer w-full",
          itemClass
        )}
      >
        {children}
        <ArrowIcon className="absolute size-5 right-5 rotate-90" />
      </Link>
    </li>
  );
};

export default NavBarItemMobile;
