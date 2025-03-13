import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface CalendarProps {
  selected: Date | null; // Permitir null
  onSelect: (value: Date | null) => void;
}

export const DatePickerBasic: React.FC<CalendarProps> = ({ onSelect }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Basic date picker"
          onChange={(value) => onSelect(value ? value.toDate() : null)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
