import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { IconButton } from "@/components/shared/buttons";

interface Props {
  onApplyFilter: () => void;
  onReset: () => void;
  onClear: () => void;
  isDirty: boolean;
  isEmpty: boolean;
  initEmpty: boolean;
}

const FilterButtons: React.FC<Props> = ({
  isDirty,
  isEmpty,
  initEmpty,
  onApplyFilter,
  onClear,
  onReset,
}) => {
  const showClear = initEmpty ? !isEmpty : true;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {isDirty && (
        <>
          <IconButton
            onClick={onApplyFilter}
            Icon={CheckCircleIcon}
            text="Apply"
            bgColorClass="bg-accent hover:bg-accent/80"
            widthClass="w-[95%]"
            type="button"
          />
          <IconButton
            onClick={onReset}
            Icon={RefreshIcon}
            text="Reset"
            bgColorClass="bg-secondary hover:bg-secondary/80"
            widthClass="w-[47%]"
            type="button"
          />
        </>
      )}
      {showClear && (
        <IconButton
          onClick={onClear}
          Icon={TrashIcon}
          text="Clear"
          bgColorClass="bg-red hover:bg-red/80"
          widthClass="w-[47%]"
          type="button"
        />
      )}
      {isDirty && (
        <p className="mt-2 text-center text-xs text-secondary">
          Please apply the filters to update results.
        </p>
      )}
    </div>
  );
};

export default FilterButtons;
