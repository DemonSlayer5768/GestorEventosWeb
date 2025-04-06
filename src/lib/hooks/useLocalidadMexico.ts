// useLocalidad.ts
import { useState, useEffect } from "react";
import { obtenerColonias } from "@Apis/apiDIPOMEX";

export function useLocalidad(
  estadoSeleccionado: { id: string; nombre: string } | null,
  municipioSeleccionado: { id: string; nombre: string } | null
) {
  const [colonias, setColonias] = useState<
    { ASENTA_ID: string; COLONIA: string }[]
  >([]);
  const [coloniaSeleccionada, setColoniaSeleccionada] = useState<{
    id: string;
    nombre: string;
  } | null>(null);

  useEffect(() => {
    const estadoId = estadoSeleccionado?.id?.trim();
    const municipioId = municipioSeleccionado?.id?.trim();
    let cancelado = false;

    if (!estadoId || !municipioId) {
      setColonias([]);
      return;
    }

    obtenerColonias(estadoId, municipioId)
      .then((datos) => {
        if (!cancelado) {
          setColonias(datos?.colonias || []);
        }
      })
      .catch((error) => {
        if (!cancelado) {
          console.error("Error al obtener colonias:", error);
          setColonias([]);
        }
      });

    return () => {
      cancelado = true;
    };
  }, [estadoSeleccionado?.id, municipioSeleccionado?.id]);

  return { colonias, coloniaSeleccionada, setColoniaSeleccionada };
}
