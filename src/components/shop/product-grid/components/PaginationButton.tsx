import { cn } from "@/utils";

interface Props {
  selected?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const PaginationButton: React.FC<Props> = ({
  onClick,
  children,
  selected = false,
}) => {
  return (
    <button
      onClick={selected ? undefined : onClick}
      className={cn(
        "size-10 flex justify-center items-center rounded-lg",
        selected
          ? "bg-accent text-white font-bold cursor-auto"
          : "bg-white text-secondary font-semibold hover:bg-accent/50 hover:text-white hover:font-bold"
      )}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
