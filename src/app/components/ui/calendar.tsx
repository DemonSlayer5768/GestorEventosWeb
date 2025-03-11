import React from "react";
import { Calendar as CalendarPrimitive } from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarProps {
  selected: Date;
  onSelect: (value: Date | null) => void;
  disabled?: (args: { date: Date }) => boolean;
}

export const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  disabled,
}) => {
  return (
    <CalendarPrimitive
      value={selected}
      onChange={(value) => onSelect(value as Date | null)}
      tileDisabled={disabled ? ({ date }) => disabled({ date }) : undefined}
    />
  );
};
