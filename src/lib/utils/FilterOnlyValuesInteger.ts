//FilterOnlyValuesInteger.ts
// Este hook se encarga de formatear y validar los valores de entrada para que solo contengan números enteros.
import { ChangeEvent, useState, useCallback } from "react";

export const OnlyInteger = (
  value: string,
  onChange: (value: string) => void
) => {
  const [rawValue, setRawValue] = useState(value || "");

  const formatInteger = (num: string) => {
    const parsedNumber = parseInt(num, 10);
    if (isNaN(parsedNumber)) return "";
    return parsedNumber.toLocaleString(""); // Formateo con separadores de miles
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
      setRawValue(inputValue);
      onChange(inputValue);
    },
    [onChange]
  );

  const handleBlur = useCallback(() => {
    const formatted = formatInteger(rawValue);
    setRawValue(formatted);
    onChange(formatted);
  }, [rawValue, onChange]);

  return { value: rawValue, handleChange, handleBlur };
};
