import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface TimeProps {
  selected: Date | null;
  oneChange: (value: Date | null) => void;
}

export const TimePickerBasic: React.FC<TimeProps> = ({ oneChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label="Basic time picker"
          onChange={(value) => oneChange(value ? value.toDate() : null)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
