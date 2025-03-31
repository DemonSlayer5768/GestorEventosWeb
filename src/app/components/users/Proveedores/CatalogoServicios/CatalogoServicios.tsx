// ServiceCatalog.tsx
"use client";

import { useServiceCatalog } from "@Lib/hooks/useServiceCatalog";
// import TextField from "@mui/material/TextField";
import ServiceCard from "@Components/users/Proveedores/CatalogoServicios/ServiceCard";
import CreateServiceDialog from "@Components/users/Proveedores/CatalogoServicios/CreateServiceDialog";

export default function ServiceCatalog() {
  const {
    // searchTerm,
    // setSearchTerm,
    selectedService,
    setSelectedService,
    filteredService,
  } = useServiceCatalog();

  return (
    <div className="flex flex-col w-7xl min-h-screen overflow-auto items-center py-8 px-4">
      <h1 className="text-3xl text-black font-bold mb-8 text-center">
        Catálogo de Servicios
      </h1>

      {/* <TextField
        label="Buscar por nombre o ubicación"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      <div className="grid grid-cols-4 md:grid-cols-4 gap-6">
        {filteredService.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onReserve={() => setSelectedService(service)}
          />
        ))}
      </div>

      <div className="bg-blue-600 h-20 w-full">
        <h1 className="text-black">aqui </h1>
      </div>

      {/* {filteredService.length === 0 && (
        <p className="text-center text-gray-700 mt-8">
          No se encontraron salones.
        </p>
      )} */}

      {selectedService && (
        <CreateServiceDialog
          salon={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
