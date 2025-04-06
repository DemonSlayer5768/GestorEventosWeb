import { useState } from "react";

export function useDataTable() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    id: "",
    nombreEvento: "",
    status: "",
    fechaCreacion: "",
    tipoEvento: "",
    categoria: "",
  });

  return {
    selectedRows,
    setSelectedRows,
    filters,
    setFilters,
  };
}
