import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { Filters } from "@Hooks/useEventFilters";
import { DatePickerBasic } from "@Components/ui/DatePickerBasic";

interface EventFiltersProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const EventFilters: React.FC<EventFiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className="relative flex flex-col w-full p-3 mb-3">
      <h1 className="text-lg font-semibold text-gray-700 mb-2">Mis Eventos</h1>

      {/* Filtros principales en una fila */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <TextField
          label="ID"
          variant="outlined"
          size="small"
          className="w-full text-sm"
          value={filters.id}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, id: e.target.value }))
          }
        />

        <TextField
          label="Evento"
          variant="outlined"
          size="small"
          className="w-full text-sm"
          value={filters.nombreEvento}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, nombreEvento: e.target.value }))
          }
        />

        <FormControl size="small" className="w-full">
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Cancelado">Cancelado</MenuItem>
            <MenuItem value="Pendiente">Pendiente</MenuItem>
            <MenuItem value="Finalizado">Finalizado</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-full">
          <InputLabel>Categoría</InputLabel>
          <Select
            label="Categoría"
            value={filters.categoria}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, categoria: e.target.value }))
            }
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Boda">Boda</MenuItem>
            <MenuItem value="Taller">Taller</MenuItem>
            <MenuItem value="Concierto">Concierto</MenuItem>
            <MenuItem value="Conferencia">Conferencia</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Filtros de fechas en una nueva fila */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
        <DatePickerBasic
          selected={
            filters.fechaCreacion ? new Date(filters.fechaCreacion) : null
          }
          onSelect={(date: Date | null) =>
            setFilters((prev) => ({
              ...prev,
              fechaCreacion: date ? date.toISOString().split("T")[0] : "",
            }))
          }
          myLabel="Fecha Creación"
        />

        <DatePickerBasic
          selected={filters.fechaFin ? new Date(filters.fechaFin) : null}
          onSelect={(date: Date | null) =>
            setFilters((prev) => ({
              ...prev,
              fechaFin: date ? date.toISOString().split("T")[0] : "",
            }))
          }
          myLabel="Fecha Fin"
        />
        {/* Botón para limpiar filtros */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={setFilters.bind(null, {
            categoria: "",
            fechaCreacion: "",
            fechaFin: "",
            id: "",
            nombreEvento: "",
            status: "",
          })}
          // className="absolute bottom-2 right-2"
        >
          Limpiar Filtros
        </Button>
      </div>
    </div>
  );
};

export default EventFilters;
