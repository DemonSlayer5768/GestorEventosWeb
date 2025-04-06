import { LicenseInfo } from "@mui/x-data-grid-pro";

LicenseInfo.setLicenseKey(
  "e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y"
);

import { useState } from "react";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";

interface BasicDateRangePickerProps {
  onDateChange: (start: string | null, end: string | null) => void;
}

export default function BasicDateRangePicker({
  onDateChange,
}: BasicDateRangePickerProps) {
  const [value, setValue] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  const today = dayjs();
  const shouldDisableDate = (date: Dayjs) => {
    return date.isBefore(today, "day"); // Deshabilitar fechas anteriores al día actual
  };

  function handleDateChange(newValue: [Dayjs | null, Dayjs | null]) {
    setValue(newValue);
    const [start, end] = newValue;
    onDateChange(
      start ? start.format("DD-MM-YYYY") : null,
      end ? end.format("DD-MM-YYYY") : null
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          calendars={1}
          value={value}
          onChange={handleDateChange}
          shouldDisableDate={shouldDisableDate}
          localeText={{ start: "Inicio", end: "Fin" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
