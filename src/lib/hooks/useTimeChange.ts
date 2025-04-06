import { useState } from "react";
import { UseFormReturn, FieldValues, Path, PathValue } from "react-hook-form";

export function useTimeChange<TFieldValues extends FieldValues>(
  form: UseFormReturn<TFieldValues>,
  startField: Path<TFieldValues>,
  endField: Path<TFieldValues>
) {
  const [timeInicio, setTimeInicio] = useState<string | null>(null);
  const [timeFin, setTimeFin] = useState<string | null>(null);

  const handleTimeChange = (start: string | null, end: string | null) => {
    setTimeInicio(start);
    setTimeFin(end);

    // Aquí estamos asegurándonos de que los valores sean del tipo adecuado
    form.setValue(
      startField,
      (start as unknown as PathValue<TFieldValues, Path<TFieldValues>>) ||
        ("" as PathValue<TFieldValues, Path<TFieldValues>>)
    ); // String vacío si es null
    form.setValue(
      endField,
      (end as unknown as PathValue<TFieldValues, Path<TFieldValues>>) ||
        ("" as PathValue<TFieldValues, Path<TFieldValues>>)
    ); // String vacío si es null
    form.trigger([startField, endField]);
  };

  return { timeInicio, timeFin, handleTimeChange, setTimeInicio, setTimeFin };
}
