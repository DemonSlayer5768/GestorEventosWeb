import { useEffect, useState } from "react";

interface ServicioAPI {
  id: number;
  nombre: string;
  precioBase: string;
  municipio: string;
  localidad: string;
  estado: string;
  imagenes: string[];
  calificacion?: number;
  tipo?: string;
  categoria?: string;
  descripcion?: string;
  cantidad?: number;
  extras?: string;
  fechaCreacion?: Date;
}

export function useServiceCatalog() {
  const [servicios, setServicios] = useState<ServicioAPI[]>([]);
  const [selectedService, setSelectedService] = useState<ServicioAPI | null>(
    null
  );

  useEffect(() => {
    fetch("/api/getServicios")
      .then((res) => res.json())
      .then((data) => {
        setServicios(data);
      });
  }, []);

  const filteredService = servicios.map((s) => ({
    id: s.id,
    name: s.nombre,
    tipo: s.tipo,
    categoria: s.categoria,
    descripcion: s.descripcion,
    image: s.imagenes?.[0] || "/placeholder.svg",
    price: s.precioBase,
    cantidad: s.cantidad,
    Estado: s.estado,
    Municipio: s.municipio,
    localidad: s.localidad,
    extras: s.extras,

    //ubicacion
    ubicacion: ` ${s.municipio}, ${s.estado}`,
    rating: s.calificacion ?? 0,
  }));

  return {
    selectedService,
    setSelectedService,
    filteredService,
  };
}
