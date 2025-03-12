import React from "react";

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  );
};

export const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export const SelectValue: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => {
  return <>{placeholder}</>;
};

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
      {children}
    </div>
  );
};

export const SelectItem: React.FC<{
  value: string;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
