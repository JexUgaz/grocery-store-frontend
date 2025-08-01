import { NavBarData } from "@/types/NavBarData";
import Link from "next/link";

const NavBarItem: React.FC<NavBarData> = ({ Icon, link, title }) => (
  <Link
    href={link}
    className="rounded-3xl font-bold py-2 px-5 hover:bg-accent hover:text-white transition flex gap-2"
  >
    <Icon className="size-5" /> {title}
  </Link>
);

export default NavBarItem;
