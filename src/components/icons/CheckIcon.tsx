import { IconProps } from "@/types/IconProps";

const CheckIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 12.6111L8.92308 17.5L20 6.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;
