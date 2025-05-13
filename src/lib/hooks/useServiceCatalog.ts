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
    price: s.precioBase,
    Estado: s.estado,
    Municipio: s.municipio,
    localidad: s.localidad,

    //ubicacion
    ubicacion: ` ${s.municipio}, ${s.estado}`,
    rating: s.calificacion ?? 0,
  }));

  //   id: number;
  // userId: string;
  // nombre: string;
  // tipo: string;
  // categoria: string;
  // descripcion: string;
  // imagenes: string;
  // precioBase: number;
  // cantidad: number;
  // estado: string;
  // municipio: string;
  // localidad: string;
  // extras: string;
  // fechaCreacion: Date;

  return {
    selectedService,
    setSelectedService,
    filteredService,
  };
}
