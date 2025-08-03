import { IconProps } from "@/types/IconProps";

const CreditCardIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    className={className}
    width="800px"
    height="800px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="currentColor"
        d="M0,32v20c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V32H0z M24,44h-8c-2.211,0-4-1.789-4-4s1.789-4,4-4h8
		c2.211,0,4,1.789,4,4S26.211,44,24,44z"
      />
      <path
        fill="currentColor"
        d="M64,24V12c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4v12H64z"
      />
    </g>
  </svg>
);

export default CreditCardIcon;
