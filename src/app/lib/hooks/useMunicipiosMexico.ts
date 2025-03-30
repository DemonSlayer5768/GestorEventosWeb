import { useState, useEffect, useCallback } from "react";
import { obtenerMunicipios } from "@Apis/apiDIPOMEX";

export function useMunicipio(
  municipio: string, // Ahora solo espera el valor de municipio
  estadoSeleccionado: { id: string; nombre: string } | null
) {
  const [municipios, setMunicipios] = useState<
    { MUNICIPIO_ID: string; MUNICIPIO: string }[]
  >([]);

  const [municipioSeleccionado, setMunicipioSeleccionado] = useState<{
    id: string;
    nombre: string;
  } | null>(null); // Inicializa el estado de municipioSeleccionado

  const resetMunicipio = useCallback(() => {
    setMunicipioSeleccionado(null); // Resetear municipioSeleccionado
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

// export function useMunicipio(
//   form: UseFormReturn<{ municipio: string }>,
//   estadoSeleccionado: { id: string; nombre: string } | null
// ) {
//   const [municipios, setMunicipios] = useState<
//     { MUNICIPIO_ID: string; MUNICIPIO: string }[]
//   >([]);
//   const [municipioSeleccionado, setMunicipioSeleccionado] = useState<{
//     id: string;
//     nombre: string;
//   } | null>(null);

//   const resetMunicipio = useCallback(() => {
//     form.setValue("municipio", "");
//     setMunicipioSeleccionado(null);
//   }, [form]);

//   useEffect(() => {
//     if (!estadoSeleccionado) return;
//     obtenerMunicipios(estadoSeleccionado.id).then((datos) => {
//       setMunicipios(datos.municipios || []);
//       resetMunicipio();
//     });
//   }, [estadoSeleccionado, resetMunicipio]);

//   return { municipios, municipioSeleccionado, setMunicipioSeleccionado };
// }
