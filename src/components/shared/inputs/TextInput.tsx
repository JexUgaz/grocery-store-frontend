import React from "react";

interface TextInputProps {
  label?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | null;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  className?: string;
  maxLength?: number;
  error?: string[];
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  value = "",
  onChange,
  onBlur,
  placeholder = "",
  min,
  max,
  required = false,
  className = "",
  maxLength,
  error,
}) => {
  const showError = error && error?.length > 0;
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
      <input
        id={name}
        type={type}
        name={name}
        value={value ?? ""}
        onBlur={onBlur}
        onChange={onChange}
        min={min}
        max={max}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary transition"
      />
      {showError && (
        <div className="space-y-1">
          {error.map((err, i) => (
            <p key={i} className="text-sm text-red-500">
              {err}
            </p>
          ))}
        </div>
      )}{" "}
    </div>
  );
};

export default TextInput;
