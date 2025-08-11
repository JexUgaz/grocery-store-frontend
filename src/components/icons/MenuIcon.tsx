import { IconProps } from "@/types/IconProps";

const MenuIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

export default MenuIcon;
