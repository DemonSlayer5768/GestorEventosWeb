import { useState } from "react";
import { Salons } from "../DB/dataSalones";
import { Salon } from "@Components/users/Proveedores/CatalogoSalones/SalonCard";

export function useSalonCatalog() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);

  const filteredSalon = Salons.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedSalon,
    setSelectedSalon,
    filteredSalon,
  };
}
