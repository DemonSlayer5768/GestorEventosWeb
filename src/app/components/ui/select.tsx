import React, { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-2/6">
      {/* Input que simula el select */}
      <div
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={selectedValue === "" ? "text-gray-400" : "text-gray-900"}
        >
          {selectedValue === "" ? placeholder : selectedValue}
        </span>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<SelectItemProps>(child)) {
              return React.cloneElement(child, {
                onClick: () => handleOptionClick(child.props.value),
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void; // Añade onClick a las props
}

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  onClick,
  value,
}) => {
  return (
    <div
      role="option"
      aria-selected={false}
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {children}
      <h1>aqui ${value}</h1>
    </div>
  );
};
