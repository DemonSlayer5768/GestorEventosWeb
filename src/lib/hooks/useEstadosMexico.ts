import { useState, useEffect, useCallback } from "react";
import { obtenerEstados } from "@Apis/apiDIPOMEX";

export function useEstado() {
  const [estados, setEstados] = useState<
    { ESTADO_ID: string; ESTADO: string }[]
  >([]);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState<{
    id: string;
    nombre: string;
  } | null>(null);

  const cargarEstados = useCallback(async () => {
    const datos = await obtenerEstados();
    setEstados(datos.estados || []);
  }, []);

  useEffect(() => {
    cargarEstados();
  }, [cargarEstados]);

  return { estados, estadoSeleccionado, setEstadoSeleccionado };
}
