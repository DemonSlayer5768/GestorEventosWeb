import * as React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";
import { Alert } from "@mui/material";

interface TimePickerFieldProps {
  onTimeChange: (start: string | null, end: string | null) => void;
}

export default function BasicTimeRangeField({
  onTimeChange,
}: TimePickerFieldProps) {
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setStartTime(newValue);
    if (newValue && endTime && newValue.isAfter(endTime)) {
      setError(
        "La hora de inicio no puede ser mayor que la hora de finalización."
      );
    } else {
      setError(null);
    }
    onTimeChange(
      newValue ? newValue.format("HH:mm") : null,
      endTime ? endTime.format("HH:mm") : null
    );
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setEndTime(newValue);
    if (newValue && startTime && newValue.isBefore(startTime)) {
      setError(
        "La hora de finalización no puede ser menor que la hora de inicio."
      );
    } else {
      setError(null);
    }
    onTimeChange(
      startTime ? startTime.format("HH:mm") : null,
      newValue ? newValue.format("HH:mm") : null
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex gap-2">
          <TimePicker
            label="Inicio"
            value={startTime}
            onChange={handleStartTimeChange}
            views={["hours", "minutes"]}
          />
          <TimePicker
            label="Final"
            value={endTime}
            onChange={handleEndTimeChange}
            views={["hours", "minutes"]}
          />
        </div>
        {error && (
          <Alert severity="error" className="mt-2">
            {error}
          </Alert>
        )}
      </div>
    </LocalizationProvider>
  );
}
