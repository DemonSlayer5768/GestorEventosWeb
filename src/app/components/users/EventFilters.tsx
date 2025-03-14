import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

interface EventFiltersProps {
  filters: {
    id: string;
    nombreEvento: string;
    status: string;
    fechaCreacion: string;
    tipoEvento: string;
    categoria: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      id: string;
      nombreEvento: string;
      status: string;
      fechaCreacion: string;
      tipoEvento: string;
      categoria: string;
    }>
  >;
}

const EventFilters: React.FC<EventFiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className="grid grid-cols-6 gap-4 mb-4">
      <TextField
        label="ID"
        variant="outlined"
        size="small"
        value={filters.id}
        onChange={(e) => setFilters({ ...filters, id: e.target.value })}
      />
      <TextField
        label="Evento"
        variant="outlined"
        size="small"
        value={filters.nombreEvento}
        onChange={(e) =>
          setFilters({ ...filters, nombreEvento: e.target.value })
        }
      />
      <FormControl size="small">
        <InputLabel>Status</InputLabel>
        <Select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="Activo">Activo</MenuItem>
          <MenuItem value="Cancelado">Cancelado</MenuItem>
          <MenuItem value="Pendiente">Pendiente</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Fecha Creación"
        type="date"
        variant="outlined"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={filters.fechaCreacion}
        onChange={(e) =>
          setFilters({ ...filters, fechaCreacion: e.target.value })
        }
      />
      <TextField
        label="Tipo"
        variant="outlined"
        size="small"
        value={filters.tipoEvento}
        onChange={(e) => setFilters({ ...filters, tipoEvento: e.target.value })}
      />
      <TextField
        label="Categoría"
        variant="outlined"
        size="small"
        value={filters.categoria}
        onChange={(e) => setFilters({ ...filters, categoria: e.target.value })}
      />
    </div>
  );
};

export default EventFilters;
