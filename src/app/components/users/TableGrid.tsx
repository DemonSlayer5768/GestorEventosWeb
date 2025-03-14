"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { PointIcon } from "@Components/users/iconsStatus";
import EventFilters from "./EventFilters"; // Importamos el nuevo componente

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, disableColumnMenu: true },
  {
    field: "nombreEvento",
    headerName: "Evento",
    flex: 2,
    disableColumnMenu: true,
  },
  {
    field: "tipoEvento",
    headerName: "Tipo",
    flex: 1.5,
    disableColumnMenu: true,
  },
  {
    field: "fechaCreacion",
    headerName: "Creado",
    flex: 1.5,
    disableColumnMenu: true,
  },
  { field: "fechaFin", headerName: "Fin", flex: 1.5, disableColumnMenu: true },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => {
      const statusStyles: {
        [key: string]: { color: "green" | "red" | "yellow" };
      } = {
        Activo: { color: "green" },
        Cancelado: { color: "red" },
        Pendiente: { color: "yellow" },
      };

      const status = params.value;
      const style = statusStyles[status];

      return (
        <div className="flex items-center gap-2">
          <PointIcon color={style.color} />
          {status}
        </div>
      );
    },
  },
  {
    field: "categoria",
    headerName: "Categoría",
    flex: 1.5,
    disableColumnMenu: true,
  },
];

const rows = [
  {
    id: 1,
    nombreEvento: "Evento 1",
    tipoEvento: "Privado",
    fechaCreacion: "2024-03-01",
    fechaFin: "2024-03-05",
    status: "Activo",
    categoria: "Conferencia",
  },
  {
    id: 2,
    nombreEvento: "Evento 2",
    tipoEvento: "Público",
    fechaCreacion: "2024-03-02",
    fechaFin: "2024-03-06",
    status: "Cancelado",
    categoria: "Concierto",
  },
  {
    id: 3,
    nombreEvento: "Evento 3",
    tipoEvento: "Privado",
    fechaCreacion: "2024-03-03",
    fechaFin: "2024-03-07",
    status: "Pendiente",
    categoria: "Taller",
  },
];

export default function DataTable() {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [filters, setFilters] = React.useState({
    id: "",
    nombreEvento: "",
    status: "",
    fechaCreacion: "",
    tipoEvento: "",
    categoria: "",
  });

  const handleDelete = () => {
    console.log("Eliminar eventos:", selectedRows);
  };

  const handleModify = () => {
    if (selectedRows.length === 1) {
      console.log("Modificar evento ID:", selectedRows[0]);
    }
  };

  return (
    <div className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* FILTROS */}
      <EventFilters filters={filters} setFilters={setFilters} />

      {/* TABLA */}
      <Paper sx={{ width: "100%", boxShadow: "none" }} elevation={0}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) =>
            setSelectedRows(newSelection as number[])
          }
          sx={{
            border: 0,
            height: 400,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f3f4f6",
              color: "#374151",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:hover": { backgroundColor: "#f9fafb" },
          }}
        />
      </Paper>

      {/* BOTONES */}
      <div className="flex justify-end gap-4 mt-4">
        <Button
          variant="contained"
          color="info"
          onClick={handleModify}
          disabled={selectedRows.length !== 1}
        >
          Detalles
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleModify}
          disabled={selectedRows.length !== 1}
        >
          Modificar
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          disabled={selectedRows.length === 0}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}
