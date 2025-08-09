import CheckIcon from "@/components/icons/CheckIcon";
import { cn } from "@/utils";
import React from "react";

interface Props {
  label: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  required?: boolean;
  className?: string;
  error?: string[];
}

const CheckboxInput: React.FC<Props> = ({
  label,
  name,
  checked,
  onChange,
  value,
  required = false,
  className = "",
  error,
}) => {
  const showError = error && error.length > 0;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={name}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <input
          id={name}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          required={required}
          onChange={onChange}
          className="sr-only peer"
        />
        <span
          aria-hidden="true"
          className={cn(
            "size-4 rounded-md border bg-white flex items-center justify-center text-white",
            "border-gray-400 peer-checked:border-accent peer-checked:bg-accent"
          )}
        >
          <CheckIcon className="size-5" />
        </span>
        <span className="text-base font-medium text-secondary">{label}</span>
      </label>

      {showError && (
        <div className="space-y-1">
          {error!.map((err, i) => (
            <p key={i} className="text-sm text-red-500">
              {err}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxInput;
