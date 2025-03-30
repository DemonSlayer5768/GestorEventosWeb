import { useState } from "react";
import { service } from "../data/dataServices";
import { Service } from "@Components/users/Proveedores/CatalogoServicios/ServiceCard";

export function useServiceCatalog() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredService = service.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedService,
    setSelectedService,
    filteredService,
  };
}
