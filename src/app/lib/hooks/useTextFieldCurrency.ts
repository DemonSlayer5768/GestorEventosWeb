import { ChangeEvent, useState } from "react";

const useTextFieldCurrency = (
  value: string,
  onChange: (value: string) => void
) => {
  const [rawValue, setRawValue] = useState(value || "$"); // Inicializa con $

  const formatCurrency = (num: string) => {
    const parsedNumber = parseFloat(num.replace("$", ""));
    if (isNaN(parsedNumber)) return "$"; // Mantener $ si no es un número válido
    return `$${parsedNumber.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/[^0-9.]/g, ""); // Solo números y punto decimal
    if (inputValue.split(".").length > 2)
      inputValue = inputValue.replace(/\.+$/, ""); // Evita más de un punto decimal

    setRawValue(`$${inputValue}`);
    onChange(`$${inputValue}`);
  };

  const handleBlur = () => {
    const formatted = formatCurrency(rawValue);
    setRawValue(formatted);
    onChange(formatted);
  };

  return { value: rawValue, handleChange, handleBlur };
};

export default useTextFieldCurrency;
