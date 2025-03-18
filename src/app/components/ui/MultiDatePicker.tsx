import React, { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, MenuItem, IconButton, FormControl } from "@mui/material";
import { Delete, CalendarToday } from "@mui/icons-material";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";

interface MultiDatePickerProps {
  onDateChange: (fechas: string[]) => void;
}

export default function MultiDatePicker({
  onDateChange,
}: MultiDatePickerProps) {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);

  const today = dayjs();
  const shouldDisableDate = (date: Dayjs) => date.isBefore(today, "day");

  const handleDateChange = (newDate: Dayjs | null) => {
    if (!newDate) return;

    setSelectedDates((prevDates) => {
      const isDuplicate = prevDates.some((date) => date.isSame(newDate, "day"));
      const updatedDates = isDuplicate
        ? prevDates.filter((date) => !date.isSame(newDate, "day"))
        : [...prevDates, newDate];

      setValue(
        updatedDates.length > 0 ? updatedDates[updatedDates.length - 1] : null
      );
      return updatedDates;
    });
  };

  const handleDeleteDate = (dateToDelete: Dayjs) => {
    setSelectedDates((prevDates) => {
      const updatedDates = prevDates.filter(
        (date) => !date.isSame(dateToDelete, "day")
      );

      setValue(
        updatedDates.length > 0 ? updatedDates[updatedDates.length - 1] : null
      );
      return updatedDates;
    });
  };

  // 🔹 Ejecutar `onDateChange` después de que `selectedDates` se haya actualizado
  useEffect(() => {
    onDateChange(selectedDates.map((date) => date.format("DD-MM-YYYY")));
  }, [selectedDates, onDateChange]);

  const CustomDay = React.memo((props: PickersDayProps<Dayjs>) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const isSelected = selectedDates.some((date) => date.isSame(day, "day"));

    return (
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        selected={isSelected}
        sx={{
          backgroundColor: isSelected ? "#90caf9" : "transparent",
          color: isSelected ? "#ffffff" : "inherit",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: isSelected ? "#64b5f6" : "#e3f2fd",
          },
          "&.Mui-selected": {
            backgroundColor: isSelected ? "#90caf9" : "transparent",
          },
        }}
      />
    );
  });

  CustomDay.displayName = "CustomDay";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex items-center space-x-1 pt-2">
        <div className="w-60">
          <DatePicker
            format="DD/MM/YYYY"
            label="Selecciona Fecha"
            closeOnSelect={false}
            value={value ?? null}
            onChange={handleDateChange}
            shouldDisableDate={shouldDisableDate}
            slots={{ day: CustomDay }}
          />
        </div>

        <FormControl className="w-16">
          <Select
            value={
              selectedDates.length > 0
                ? selectedDates.map((date) => date.format("DD-MM-YYYY"))
                : ""
            }
            displayEmpty
            renderValue={() => (
              <div className="flex items-center">
                <CalendarToday fontSize="small" />
              </div>
            )}
          >
            {selectedDates.length === 0 ? (
              <MenuItem disabled>No hay fechas seleccionadas</MenuItem>
            ) : (
              selectedDates.map((date) => (
                <MenuItem
                  key={date.format("DD-MM-YYYY")}
                  value={date.format("DD-MM-YYYY")}
                >
                  {date.format("DD/MM/YYYY")}
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteDate(date)}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
