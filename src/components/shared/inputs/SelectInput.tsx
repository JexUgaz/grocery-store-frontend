import React from "react";

interface Props {
  label?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string[];
}

const SelectInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Select an option",
  required = false,
  className = "",
  error,
}) => {
  const showError = error && error.length > 0;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-base font-semibold text-secondary"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary transition"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {showError && (
        <div className="space-y-1">
          {error.map((err, i) => (
            <p key={i} className="text-sm text-red-500">
              {err}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
