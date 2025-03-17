"use client";

import { useState } from "react";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/es"; // Importa el locale de español

interface BasicDatePickerProps {
  onDateChange: (date: string | null) => void;
}

export default function BasicDatePicker({
  onDateChange,
}: BasicDatePickerProps) {
  const [value, setValue] = useState<import("dayjs").Dayjs | null>(null);

  function handleDateChange(newValue: import("dayjs").Dayjs | null): void {
    setValue(newValue);
    onDateChange(newValue ? newValue.format("DD-MM-YYYY") : null);
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="es" // Usar la localización en español
    >
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Ingresa una Fecha"
          value={value}
          onChange={handleDateChange}
          className="w-full"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
