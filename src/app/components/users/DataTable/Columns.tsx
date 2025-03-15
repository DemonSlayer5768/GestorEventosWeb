import { GridColDef } from "@mui/x-data-grid";
import { PointIcon } from "@Components/users/DataTable/iconsStatus";
import ActionMenu from "@Components/users/DataTable/ActionMenu";

const statusStyles = {
  Activo: { color: "green" },
  Cancelado: { color: "red" },
  Pendiente: { color: "yellow" },
  Finalizado: { color: "blue" },
};

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
    disableColumnMenu: true,
    disableReorder: true,
    resizable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "nombreEvento",
    headerName: "Evento",
    flex: 1.5,
    minWidth: 180,
    disableColumnMenu: true,
  },
  {
    field: "tipoEvento",
    headerName: "Tipo",
    flex: 1.5,
    minWidth: 140,
    disableColumnMenu: true,
  },
  {
    field: "fechaCreacion",
    headerName: "Creado",
    flex: 1.5,
    minWidth: 140,
    disableColumnMenu: true,
  },
  {
    field: "fechaFin",
    headerName: "Fin",
    flex: 1.5,
    minWidth: 140,
    disableColumnMenu: true,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex items-center gap-2">
        <PointIcon
          color={
            statusStyles[params.value as keyof typeof statusStyles]?.color as
              | "green"
              | "red"
              | "yellow"
              | "blue"
          }
        />
        {params.value}
      </div>
    ),
  },
  {
    field: "categoria",
    headerName: "Categoría",
    width: 200, // Fijamos el ancho para evitar problemas con "Acciones"
    disableColumnMenu: true,
    disableReorder: true,
    resizable: false,
  },
  {
    field: "acciones",
    headerName: "",
    width: 80,
    disableColumnMenu: true,
    disableReorder: true,
    resizable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => <ActionMenu rowId={params.row.id} />,
  },
];
