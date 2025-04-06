import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es"; // Importa el idioma español

interface CalendarProps {
  selected: Date | null;
  onSelect: (value: Date | null) => void;
  myLabel: string;
}

export const DatePickerBasic: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  myLabel,
}) => {
  // Configurar Dayjs en español
  React.useEffect(() => {
    dayjs.locale("es");
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {" "}
      {/* Se ajusta el tamaño con Tailwind o CSS */}
      <DatePicker
        label={myLabel}
        value={selected ? dayjs(selected) : null}
        onChange={(value: Dayjs | null) =>
          onSelect(value ? value.toDate() : null)
        }
        format="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
};
