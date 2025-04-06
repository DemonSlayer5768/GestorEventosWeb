import { ChangeEvent, useState, useCallback } from "react";

const useTextFieldCurrency = (
  value: string,
  onChange: (value: string) => void
) => {
  const [rawValue, setRawValue] = useState(value || "$");

  // Función para formatear la moneda
  const formatCurrency = useCallback((num: string) => {
    const parsedNumber = parseFloat(num.replace("$", ""));
    if (isNaN(parsedNumber)) return "$"; // Mantener $ si no es un número válido
    return `$${parsedNumber.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }, []);

  // Manejador del evento onChange
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let inputValue = event.target.value.replace(/[^0-9.]/g, ""); // Solo números y punto decimal
      if (inputValue.split(".").length > 2)
        inputValue = inputValue.replace(/\.+$/, ""); // Evita más de un punto decimal

      setRawValue(`$${inputValue}`);
      onChange(`$${inputValue}`);
    },
    [onChange]
  );

  // Manejador del evento onBlur
  const handleBlur = useCallback(() => {
    const formatted = formatCurrency(rawValue);
    setRawValue(formatted);
    onChange(formatted);
  }, [rawValue, formatCurrency, onChange]);

  return { value: rawValue, handleChange, handleBlur };
};

export default useTextFieldCurrency;
