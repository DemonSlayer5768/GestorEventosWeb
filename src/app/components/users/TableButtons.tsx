"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVertical } from "lucide-react";
import { PointIcon } from "@Components/users/iconsStatus";
import EventFilters from "./EventFilters";

// Componente separado para manejar el menú de acciones
const ActionMenu: React.FC<{ rowId: number }> = ({ rowId }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertical size={20} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => console.log("Detalles", rowId)}>
          Detalles
        </MenuItem>
        <MenuItem onClick={() => console.log("Modificar", rowId)}>
          Modificar
        </MenuItem>
        <MenuItem onClick={() => console.log("Eliminar", rowId)}>
          Eliminar
        </MenuItem>
      </Menu>
    </>
  );
};

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
      const statusStyles = {
        Activo: { color: "green" },
        Cancelado: { color: "red" },
        Pendiente: { color: "yellow" },
      };
      return (
        <div className="flex items-center gap-2">
          <PointIcon
            color={
              statusStyles[params.value as keyof typeof statusStyles]?.color as
                | "green"
                | "red"
                | "yellow"
            }
          />
          {params.value}
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
  {
    field: "acciones",
    headerName: "Acciones",
    flex: 0.5,
    disableColumnMenu: true,
    renderCell: (params) => <ActionMenu rowId={params.row.id} />,
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
            height: 700,
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
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <Button
            variant="contained"
            color="info"
            onClick={() => console.log("Detalles", selectedRows[0])}
            disabled={selectedRows.length !== 1}
          >
            Detalles
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => console.log("Modificar", selectedRows[0])}
            disabled={selectedRows.length !== 1}
          >
            Modificar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => console.log("Eliminar", selectedRows)}
            disabled={selectedRows.length === 0}
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}
