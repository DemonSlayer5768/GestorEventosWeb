// salonCatalog.tsx
"use client";

import { useSalonCatalog } from "@Lib/hooks/useSalonCatalog";
// import TextField from "@mui/material/TextField";
import SalonCard from "@Components/users/Proveedores/CatalogoSalones/SalonCard";
import CreateSalonDialog from "@Components/users/Proveedores/CatalogoSalones/CreateSalonDialog";

export default function SalonCatalog() {
  const {
    // searchTerm,
    // setSearchTerm,
    selectedSalon,
    setSelectedSalon,
    filteredSalon,
  } = useSalonCatalog();

  return (
    <div className="flex flex-col w-full min-h-screen overflow-auto items-center py-8 px-4">
      <h1 className="text-3xl text-black font-bold mb-8 text-center">
        Catálogo Salones
      </h1>

      {/* <TextField
        label="Buscar por nombre o ubicación"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      {/* Contenedor del Grid */}
      <div className="grid grid-cols-1 m-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredSalon.map((salon) => (
          <SalonCard
            key={salon.id}
            salon={salon}
            onReserve={() => setSelectedSalon(salon)}
          />
        ))}
      </div>

      {filteredSalon.length === 0 && (
        <p className="text-center text-red-700 mt-8">
          No se encontraron salones.
        </p>
      )}

      {selectedSalon && (
        <CreateSalonDialog
          salon={selectedSalon}
          isOpen={!!selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </div>
  );
}
