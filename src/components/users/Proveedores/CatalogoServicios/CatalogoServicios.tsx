"use client";

import { useServiceCatalog } from "@Lib/hooks/useServiceCatalog";
import ServiceCard from "@Components/users/Proveedores/CatalogoServicios/ServiceCard";
import ModifyService from "@Components/users/Proveedores/CatalogoServicios/ModifyService";

export default function ServiceCatalog() {
  const { selectedService, setSelectedService, filteredService } =
    useServiceCatalog();

  return (
    <div className="flex flex-col w-full min-h-screen overflow-auto items-center py-8 px-4">
      <h1 className="text-3xl text-black font-bold mb-8 text-center">
        Catálogo de Servicios
      </h1>

      {/* Contenedor del Grid */}
      <div className="grid grid-cols-1 m-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredService.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onReserve={() => setSelectedService(service)}
          />
        ))}
      </div>

      <div className="bg-blue-600 h-20 w-full mt-8">
        <h1 className="text-black text-center">aqui</h1>
      </div>

      {selectedService && (
        <ModifyService
          salon={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
