"use client";

// import TextField from "@mui/material/TextField";
import SalonCard from "@Components/users/Proveedores/CatalogoServicios/SalonCard";
import ReservationDialog from "@Components/users/Proveedores/CatalogoServicios/ReservationDialog";
import { useSalonCatalog } from "@Lib/hooks/useSalonCatalog";

export default function SalonCatalog() {
  const {
    // searchTerm,
    // setSearchTerm,
    selectedSalon,
    setSelectedSalon,
    filteredSalons,
  } = useSalonCatalog();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Catálogo de Salones
      </h1>
      {/* <TextField
        label="Buscar por nombre o ubicación"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSalons.map((salon) => (
          <SalonCard
            key={salon.id}
            salon={salon}
            onReserve={() => setSelectedSalon(salon)} // Ahora acepta `Salon`
          />
        ))}
      </div>

      {filteredSalons.length === 0 && (
        <p className="text-center mt-8">
          No se encontraron salones que coincidan con tu búsqueda.
        </p>
      )}

      {selectedSalon && (
        <ReservationDialog
          salon={selectedSalon}
          isOpen={!!selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </div>
  );
}
