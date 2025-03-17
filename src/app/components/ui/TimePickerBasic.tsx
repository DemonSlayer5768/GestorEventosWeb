import * as React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";

interface TimePickerFieldProps {
  onTimeChange: (start: string | null, end: string | null) => void;
}

export default function BasicTimeRangeField({
  onTimeChange,
}: TimePickerFieldProps) {
  // Inicializa las horas como null en lugar de valores predeterminados
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setStartTime(newValue);
    onTimeChange(
      newValue ? newValue.format("hh:mm A") : null,
      endTime ? endTime.format("hh:mm A") : null
    );
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setEndTime(newValue);
    onTimeChange(
      startTime ? startTime.format("hh:mm A") : null,
      newValue ? newValue.format("hh:mm A") : null
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex gap-2 pt-2">
        <TimePicker
          label="Inicio"
          value={startTime}
          onChange={handleStartTimeChange}
          views={["hours"]}
        />
        <TimePicker
          label="Final"
          value={endTime}
          onChange={handleEndTimeChange}
          views={["hours"]}
        />
      </div>
    </LocalizationProvider>
  );
}
