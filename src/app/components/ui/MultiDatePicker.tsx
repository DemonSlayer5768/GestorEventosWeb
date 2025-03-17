"use client";

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
      return isDuplicate
        ? prevDates.filter((date) => !date.isSame(newDate, "day"))
        : [...prevDates, newDate];
    });

    setValue(newDate);
  };

  const handleDeleteDate = (dateToDelete: Dayjs) => {
    setSelectedDates((prevDates) =>
      prevDates.filter((date) => !date.isSame(dateToDelete, "day"))
    );
  };

  // ✅ Usar useEffect para actualizar al padre cuando cambian las fechas seleccionadas
  useEffect(() => {
    onDateChange(selectedDates.map((date) => date.format("YYYY-MM-DD")));
  }, [selectedDates, onDateChange]);

  const CustomDay = (props: PickersDayProps<Dayjs>) => {
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
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex items-center space-x-4 pt-2">
        <div className="w-60">
          <DatePicker
            label="Selecciona Fechas"
            closeOnSelect={false}
            value={value}
            onChange={handleDateChange}
            shouldDisableDate={shouldDisableDate}
            slots={{ day: CustomDay }}
          />
        </div>

        <FormControl className="w-1/4">
          <Select
            displayEmpty
            renderValue={() => (
              <div className="flex items-center space-x-2">
                <CalendarToday fontSize="small" />
                <span className="text-sm text-gray-500">
                  {selectedDates.length > 0
                    ? "Fechas seleccionadas"
                    : "No hay fechas seleccionadas"}
                </span>
              </div>
            )}
          >
            {selectedDates.length === 0 ? (
              <MenuItem disabled>No hay fechas seleccionadas</MenuItem>
            ) : (
              selectedDates.map((date) => (
                <MenuItem
                  key={date.format("YYYY-MM-DD")}
                  value={date.format("YYYY-MM-DD")}
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
