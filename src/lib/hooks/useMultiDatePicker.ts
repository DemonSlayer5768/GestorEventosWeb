import { useState, useCallback } from "react";
import { UseFormReturn, FieldValues, Path, PathValue } from "react-hook-form";

export function useMultiDatePicker<TFieldValues extends FieldValues>(
  form: UseFormReturn<TFieldValues>,
  fieldName: Path<TFieldValues>
) {
  const [fechas, setFechas] = useState<
    PathValue<TFieldValues, Path<TFieldValues>>
  >(
    () =>
      (form.getValues(fieldName) as PathValue<
        TFieldValues,
        Path<TFieldValues>
      >) ?? ([] as PathValue<TFieldValues, Path<TFieldValues>>)
  );

  const handleDateChange = useCallback(
    (nuevasFechas: PathValue<TFieldValues, Path<TFieldValues>>) => {
      setFechas(nuevasFechas);
      form.setValue(fieldName, nuevasFechas);
      form.trigger(fieldName);
    },
    [form, fieldName]
  );

  return { fechas, handleDateChange, setFechas };
}
