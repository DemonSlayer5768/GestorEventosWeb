"use client";
import ServiceCard from "@Components/users/Proveedores/CatalogoSalones/SalonCard";
import CreateServiceDialog from "@Components/users/Proveedores/CatalogoServicios/CreateServiceDialog";
import { useSalonCatalog } from "@Lib/hooks/useSalonCatalog";

export default function SalonCatalog() {
  const {
    // searchTerm,
    // setSearchTerm,
    selectedSalon,
    setSelectedSalon,
    filteredSalon,
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
        {filteredSalon.map((salon) => (
          <ServiceCard
            key={salon.id}
            salon={salon}
            onReserve={() => setSelectedSalon(salon)} // Ahora acepta `Salon`
          />
        ))}
      </div>

      {filteredSalon.length === 0 && (
        <p className="text-center mt-8">
          No se encontraron salones que coincidan con tu búsqueda.
        </p>
      )}

      {selectedSalon && (
        <CreateServiceDialog
          salon={selectedSalon}
          isOpen={!!selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </div>
  );
}
