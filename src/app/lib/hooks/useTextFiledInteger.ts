import { ChangeEvent, useState, useCallback } from "react";

export const useTextFieldInteger = (
  value: string,
  onChange: (value: string) => void
) => {
  const [rawValue, setRawValue] = useState(value || "");

  // Función para formatear el número entero
  const formatInteger = useCallback((num: string) => {
    const parsedNumber = parseInt(num, 10);
    if (isNaN(parsedNumber)) return ""; // Retorna cadena vacía si no es un número válido
    return parsedNumber.toLocaleString(""); // Formatea con separadores de miles
  }, []);

  // Manejador del evento onChange
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line prefer-const
      let inputValue = event.target.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico

      setRawValue(inputValue);
      onChange(inputValue);
    },
    [onChange]
  );

  // Manejador del evento onBlur
  const handleBlur = useCallback(() => {
    const formatted = formatInteger(rawValue);
    setRawValue(formatted);
    onChange(formatted);
  }, [rawValue, formatInteger, onChange]);

  return { value: rawValue, handleChange, handleBlur };
};
