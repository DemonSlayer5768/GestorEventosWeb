import { useState, useEffect, useCallback } from "react";
import { obtenerMunicipios } from "@Apis/apiDIPOMEX";

// Hook para manejar los municipios
export function useMunicipio(
  estadoSeleccionado: { id: string; nombre: string } | null
) {
  const [municipios, setMunicipios] = useState<
    { MUNICIPIO_ID: string; MUNICIPIO: string }[]
  >([]);

  const [municipioSeleccionado, setMunicipioSeleccionado] = useState<{
    id: string;
    nombre: string;
  } | null>(null); // Estado del municipio seleccionado

  const resetMunicipio = useCallback(() => {
    setMunicipioSeleccionado(null); // Resetear el municipio seleccionado
  }, []);

  useEffect(() => {
    if (!estadoSeleccionado) return; // Si no hay estado seleccionado, no hacer nada
    obtenerMunicipios(estadoSeleccionado.id).then((datos) => {
      setMunicipios(datos.municipios || []); // Establecer los municipios obtenidos
      resetMunicipio(); // Resetear el municipio seleccionado
    });
  }, [estadoSeleccionado, resetMunicipio]);

  return { municipios, municipioSeleccionado, setMunicipioSeleccionado };
}
