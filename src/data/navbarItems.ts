import HomeIcon from "@/components/icons/HomeIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import { NavBarData } from "@/types/NavBarData";

export const navbarItems: NavBarData[] = [
  {
    Icon: HomeIcon,
    link: "/",
    title: "Home",
  },
  {
    Icon: StoreIcon,
    // link: "/shop",
    link: "#",
    title: "Shop",
  },
];
