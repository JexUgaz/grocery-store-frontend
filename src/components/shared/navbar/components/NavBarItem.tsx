"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  link: string;
  children: React.ReactNode;
  className?: string;
}

const NavBarItem: React.FC<Props> = ({
  link,
  children,
  className = "py-2 px-5",
}) => {
  const pathName = usePathname();
  const isActive = pathName === link;

  const isHome = pathName === "/";
  const extraClass = isHome ? "home-" : "";

  const inactiveClasses = `${extraClass}navbar-item-inactive`;
  const activeClasses = `${extraClass}navbar-item-active`;

  const finalClasses = isActive ? activeClasses : inactiveClasses;

  return (
    <Link
      href={link}
      className={`rounded-3xl font-bold flex gap-2 ${finalClasses} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavBarItem;
