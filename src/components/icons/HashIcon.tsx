import { IconProps } from "@/types/IconProps";

const HashIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <line
      x1="4"
      y1="7.25"
      x2="16"
      y2="7.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="4"
      y1="12.75"
      x2="16"
      y2="12.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.75 4L6.75 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13.25 4L12.25 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default HashIcon;
