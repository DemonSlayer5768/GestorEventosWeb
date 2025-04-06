//FilterOnlyValuesCurrency.ts
// Este hook se encarga de formatear y validar los valores de entrada para que solo contengan números y el símbolo de moneda ($).
import { ChangeEvent, useState, useCallback } from "react";

export const OnlyCurrency = (
  value: string,
  onChange: (value: string) => void
) => {
  const [rawValue, setRawValue] = useState(value || "$");

  const formatCurrency = (num: string) => {
    const parsedNumber = parseFloat(num.replace("$", ""));
    if (isNaN(parsedNumber)) return "$";
    return `$${parsedNumber.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let inputValue = event.target.value.replace(/[^0-9.]/g, "");
      if (inputValue.split(".").length > 2)
        inputValue = inputValue.replace(/\.+$/, "");
      setRawValue(`$${inputValue}`);
      onChange(`$${inputValue}`);
    },
    [onChange]
  );

  const handleBlur = useCallback(() => {
    const formatted = formatCurrency(rawValue);
    setRawValue(formatted);
    onChange(formatted);
  }, [rawValue, onChange]);

  return { value: rawValue, handleChange, handleBlur };
};
