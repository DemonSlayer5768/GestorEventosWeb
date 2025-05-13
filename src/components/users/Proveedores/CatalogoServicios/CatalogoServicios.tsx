"use client";

import { useServiceCatalog } from "@Lib/hooks/useServiceCatalog";
import ServiceCard from "@Components/users/Proveedores/CatalogoServicios/ServiceCard";

export default function ServiceCatalog() {
  const { setSelectedService, filteredService } = useServiceCatalog();

  return (
    <div className="w-full min-h-screen py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        Catálogo de Servicios
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full max-h-full mx-auto px-2">
        {filteredService.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No hay servicios disponibles.
          </p>
        ) : (
          filteredService.map((service) => (
            <ServiceCard
              key={service.id}
              service={{
                id: service.id,
                nombre: service.name,
                precioBase: String(service.price),
                estado: service.Estado,
                municipio: service.Municipio,
                localidad: service.localidad,
                location: service.ubicacion,
                calificacion: service.rating,
                imagenes: [service.image],
              }}
              onModify={() =>
                setSelectedService({
                  id: service.id,
                  nombre: service.name,
                  precioBase: String(service.price),
                  calificacion: service.rating,
                  imagenes: [service.image],
                  estado: service.Estado,
                  municipio: service.Municipio,
                  localidad: service.localidad,
                  extras: service.extras,
                  descripcion: service.descripcion,
                  cantidad: service.cantidad,
                  tipo: service.tipo,
                  categoria: service.categoria,
                })
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
