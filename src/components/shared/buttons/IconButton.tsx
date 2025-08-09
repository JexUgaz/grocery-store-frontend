import { cn } from "@/utils";
import { ClassValue } from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColorClass?: ClassValue;
  textColorClass?: ClassValue;
  widthClass?: ClassValue;
};

const IconButton: React.FC<Props> = ({
  text,
  Icon,
  bgColorClass = "bg-gray-700",
  textColorClass = "text-white",
  widthClass = "w-auto",
  className = "",
  ...props
}) => (
  <button
    {...props}
    type="button"
    className={cn(
      "flex justify-center items-center gap-1 text-sm font-semibold py-2 rounded-2xl transition-all duration-300",
      bgColorClass,
      textColorClass,
      widthClass,
      className
    )}
  >
    <Icon className="size-5" aria-hidden="true" />
    <span>{text}</span>
  </button>
);

export { IconButton };
