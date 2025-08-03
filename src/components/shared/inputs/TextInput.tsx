import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  maxLength,
  error,
}) => {
  const showError = error && error?.length > 0;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-base font-semibold text-secondary">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
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
