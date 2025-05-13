import { useEffect, useState } from "react";

interface ServicioAPI {
  id: number;
  nombre: string;
  precioBase: number;
  municipio: string;
  localidad: string;
  estado: string;
  imagenes: string[];
  calificacion?: number;
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
    image: s.imagenes?.[0] || "/placeholder.svg",
    price: `$${s.precioBase}`,
    location: `${s.localidad}, ${s.municipio}, ${s.estado}`,
    rating: s.calificacion ?? 0,
  }));

  return {
    selectedService,
    setSelectedService,
    filteredService,
  };
}
