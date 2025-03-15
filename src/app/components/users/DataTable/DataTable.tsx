"use client";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "@Components/users/DataTable/Columns";
import { rows } from "@Data/users/DataTableRows";
import Paper from "@mui/material/Paper";
import EventFilters from "@Components/users/DataTable/TableFilters";
import { useEventFilters } from "@Hooks/useEventFilters";
import { useState } from "react";

const DataTable = () => {
  const { filters, setFilters } = useEventFilters();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  // Filtrar los datos según los valores de los filtros
  const filteredRows = rows.filter((row) => {
    return (
      (!filters.id || row.id.toString().includes(filters.id)) && // Convertir ID a string
      (!filters.nombreEvento ||
        row.nombreEvento.includes(filters.nombreEvento)) &&
      (!filters.status || row.status === filters.status) &&
      (!filters.categoria || row.categoria === filters.categoria) &&
      (!filters.fechaCreacion ||
        new Date(row.fechaCreacion).toISOString().split("T")[0] ===
          filters.fechaCreacion) &&
      (!filters.fechaFin ||
        new Date(row.fechaFin).toISOString().split("T")[0] === filters.fechaFin)
    );
  });

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Paper className="p-4 shadow-md rounded-lg h-full flex flex-col">
        <EventFilters filters={filters} setFilters={setFilters} />

        {/* Contenedor con altura fija para DataGrid */}
        <div className="flex-grow overflow-auto">
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pagination
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            disableColumnResize
            className="overflow-hidden"
          />
        </div>
      </Paper>
    </div>
  );
};

export default DataTable;
