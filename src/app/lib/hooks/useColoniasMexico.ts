// useColonia.ts
import { useState, useEffect, useCallback } from "react";
import { obtenerColonias } from "@Apis/apiDIPOMEX";
import { UseFormReturn } from "react-hook-form";

// Hacer el tipo de `form` más flexible
export function useColonia(
  form: UseFormReturn<{ [key: string]: string | number | boolean | null }>, // Aquí haces el tipo más flexible
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

  const resetColonias = useCallback(() => {
    form.setValue("colonia", "");
    setColoniaSeleccionada(null);
  }, [form]);

  useEffect(() => {
    if (!estadoSeleccionado || !municipioSeleccionado) return;
    obtenerColonias(estadoSeleccionado.id, municipioSeleccionado.id).then(
      (datos) => {
        setColonias(datos.colonias || []);
        resetColonias();
      }
    );
  }, [estadoSeleccionado, municipioSeleccionado, resetColonias]);

  return { colonias, coloniaSeleccionada, setColoniaSeleccionada };
}

// import { useState, useEffect, useCallback } from "react";
// import { obtenerColonias } from "@Apis/apiDIPOMEX";
// import { UseFormReturn } from "react-hook-form";

// export function useColonia(
//   form: UseFormReturn<{ [key: string]: string | number | boolean | null }>,
//   estadoSeleccionado: { id: string; nombre: string } | null,
//   municipioSeleccionado: { id: string; nombre: string } | null
// ) {
//   const [colonias, setColonias] = useState<
//     { ASENTA_ID: string; COLONIA: string }[]
//   >([]);
//   const [coloniaSeleccionada, setColoniaSeleccionada] = useState<{
//     id: string;
//     nombre: string;
//   } | null>(null);

//   const resetColonias = useCallback(() => {
//     form.setValue("colonia", "");
//     setColoniaSeleccionada(null);
//   }, [form]);

//   useEffect(() => {
//     if (!estadoSeleccionado || !municipioSeleccionado) return;
//     obtenerColonias(estadoSeleccionado.id, municipioSeleccionado.id).then(
//       (datos) => {
//         setColonias(datos.colonias || []);
//         resetColonias();
//       }
//     );
//   }, [estadoSeleccionado, municipioSeleccionado, resetColonias]);

//   return { colonias, coloniaSeleccionada, setColoniaSeleccionada };
// }
