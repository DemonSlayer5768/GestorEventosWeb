import { useState } from "react";

export interface Filters {
  id: string;
  nombreEvento: string;
  status: string;
  categoria: string;
  fechaCreacion: string;
  fechaFin: string;
}

export const useEventFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    id: "",
    nombreEvento: "",
    status: "",
    categoria: "",
    fechaCreacion: "",
    fechaFin: "",
  });

  return { filters, setFilters };
};
