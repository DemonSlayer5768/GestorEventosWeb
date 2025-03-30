import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMultiDatePicker } from "@Lib/hooks/useMultiDatePicker";
import { useTimeChange } from "@Lib/hooks/useTimeChange";
import { useEstado } from "@Lib/hooks/useEstadosMexico";
import { useMunicipio } from "@Lib/hooks/useMunicipiosMexico";
import { useColonia } from "@Lib/hooks/useColoniasMexico";

type FlexibleFormValues = { [key: string]: string | number | boolean | null };

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  apellido: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  telefono: z.string().min(10, { message: "Número de teléfono inválido" }),
  nombreEvento: z.string().min(3, {
    message: "El nombre del evento debe tener al menos 3 caracteres",
  }),
  tipoEvento: z.string(),
  categoria: z.string(),
  modalidad: z.string(),
  descripcion: z.string().min(10).max(500),
  fechas: z.array(z.string()).min(1),
  horaInicio: z.string().min(1),
  horaFin: z.string(),
  estado: z.string().min(1),
  municipio: z.string().min(1),
  colonia: z.string().min(1),
  calle: z.string(),
  numeroExt: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function useFormularioEvento() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { fechas, handleDateChange, setFechas } = useMultiDatePicker(
    form,
    "fechas"
  );

  const { timeInicio, timeFin, handleTimeChange, setTimeInicio, setTimeFin } =
    useTimeChange(form, "horaInicio", "horaFin");

  const { estados, estadoSeleccionado, setEstadoSeleccionado } = useEstado();

  const { municipio } = form.getValues(); // Obtener el valor del campo municipio
  const { municipios, municipioSeleccionado, setMunicipioSeleccionado } =
    useMunicipio(
      municipio, // Solo pasar el valor de municipio
      estadoSeleccionado
    );

  const { colonias, coloniaSeleccionada, setColoniaSeleccionada } = useColonia(
    form as unknown as UseFormReturn<FlexibleFormValues>, // Tipo flexible aquí
    estadoSeleccionado,
    municipioSeleccionado
  );

  function onSubmit(values: FormValues) {
    const datosCorrectos = {
      ...values,
      estado: estadoSeleccionado?.nombre || values.estado,
      municipio: municipioSeleccionado?.nombre || values.municipio,
      colonia: coloniaSeleccionada?.nombre || values.colonia,
    };

    console.log(datosCorrectos);
  }

  return {
    form,
    estados,
    municipios,
    colonias,
    estadoSeleccionado,
    municipioSeleccionado,
    coloniaSeleccionada,
    setEstadoSeleccionado,
    setMunicipioSeleccionado,
    setColoniaSeleccionada,
    handleDateChange,
    handleTimeChange,
    setFechas,
    setTimeInicio,
    setTimeFin,
    fechas,
    timeInicio,
    timeFin,
    onSubmit,
  };
}

// import { useState, useEffect, useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
//   obtenerEstados,
//   obtenerMunicipios,
//   obtenerColonias,
// } from "@Apis/apiDIPOMEX";

// ///////////////////////// MENSAJES DE ERRORES DEL FORMULARIO  ///////////////////////////////////////

// const formSchema = z.object({
//   nombre: z
//     .string()
//     .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
//   apellido: z
//     .string()
//     .min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
//   email: z.string().email({ message: "Correo electrónico inválido" }),
//   telefono: z.string().min(10, { message: "Número de teléfono inválido" }),
//   nombreEvento: z.string().min(3, {
//     message: "El nombre del evento debe tener al menos 3 caracteres",
//   }),

//   tipoEvento: z.string(),
//   categoria: z.string(),
//   modalidad: z.string(),

//   descripcion: z
//     .string()
//     .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
//     .max(500, { message: "La descripción no debe exceder los 500 caracteres" }),

//   fechas: z
//     .array(z.string())
//     .min(1, { message: "Debe seleccionar al menos una fecha" }),

//   horaInicio: z.string().min(1, { message: "La hora del evento es requerida" }),
//   horaFin: z.string(),

//   estado: z.string().min(1, { message: "El estado es requerido" }),
//   municipio: z.string().min(1, { message: "El municipio es requerido" }),
//   colonia: z.string().min(1, { message: "La colonia es requerida" }),
//   calle: z.string(),
//   numeroExt: z.string(),
// });

// ///////////////////////// DATROS DEL FORMULARIO  ///////////////////////////////////////

// type FormValues = z.infer<typeof formSchema>;

// export function useFormularioEvento() {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       nombre: "",
//       apellido: "",
//       email: "",
//       telefono: "",
//       nombreEvento: "",
//       fechas: [],
//       horaInicio: "",
//       horaFin: "",
//       tipoEvento: "",
//       categoria: "",
//       modalidad: "",
//       descripcion: "",
//       estado: "",
//       municipio: "",
//       colonia: "",
//       calle: "",
//       numeroExt: "",
//     },
//   });

//   ///////////////////////// DEFINICION DE VARIABLES DEL FORMULARIO  ///////////////////////////////////////

//   // 🔹 Memoizar la función para evitar renders innecesarios
//   const [fechas, setFechas] = useState<string[]>([]); // (fechas lugar en el que se almacena el valor ) , (setFechas funcion que actualiza el estado )  useState(valorInicial),
//   const [timeInicio, setTimeInicio] = useState<string | null>(null);
//   const [timeFin, setTimeFin] = useState<string | null>(null);
//   const [estadoSeleccionado, setEstadoSeleccionado] = useState<{
//     id: string;
//     nombre: string;
//   } | null>(null);
//   const [municipioSeleccionado, setMunicipioSeleccionado] = useState<{
//     id: string;
//     nombre: string;
//   } | null>(null);
//   const [coloniaSeleccionada, setColoniaSeleccionada] = useState<{
//     id: string;
//     nombre: string;
//   } | null>(null);

//   const [estados, setEstados] = useState<
//     { ESTADO_ID: string; ESTADO: string }[]
//   >([]);
//   const [municipios, setMunicipios] = useState<
//     { MUNICIPIO_ID: string; MUNICIPIO: string }[]
//   >([]);
//   const [colonias, setColonias] = useState<
//     { ASENTA_ID: string; COLONIA: string }[]
//   >([]);

//   ///////////////////////// PETICION A LA API DIPOMEX PARA LA UBIACION ///////////////////////////////////////

//   const cargarEstados = useCallback(async () => {
//     const datos = await obtenerEstados();
//     setEstados(datos.estados || []);
//   }, []);

//   const resetMunicipio = useCallback(() => {
//     form.setValue("municipio", "");
//     setMunicipioSeleccionado(null); // 🔹 Resetea el estado de municipio
//   }, [form]);

//   const resetColonias = useCallback(() => {
//     form.setValue("colonia", "");
//     setColoniaSeleccionada(null); // 🔹 Resetea el estado de las colonias
//   }, [form]);

//   useEffect(() => {
//     cargarEstados();
//   }, [cargarEstados]);

//   useEffect(() => {
//     if (!estadoSeleccionado) return;
//     obtenerMunicipios(estadoSeleccionado.id).then((datos) => {
//       setMunicipios(datos.municipios || []);
//       resetMunicipio();
//     });
//   }, [estadoSeleccionado, resetMunicipio]);

//   useEffect(() => {
//     if (!estadoSeleccionado || !municipioSeleccionado) return;
//     obtenerColonias(estadoSeleccionado.id, municipioSeleccionado.id).then(
//       (datos) => {
//         setColonias(datos.colonias || []);
//         resetColonias();
//       }
//     );
//   }, [estadoSeleccionado, municipioSeleccionado, resetColonias]);

//   useEffect(() => {
//     if (!coloniaSeleccionada) {
//       form.setValue("colonia", "");
//     }
//   }, [estadoSeleccionado, municipioSeleccionado, coloniaSeleccionada, form]);

//   // const datosAGuardar = {
//   //   estado: estadoSeleccionado?.nombre,
//   //   municipio: municipioSeleccionado?.nombre,
//   //   colonia: coloniaSeleccionada?.nombre,
//   // };

//   // console.log("Datos a guardar:", datosAGuardar);

//   ///////////////////////// PARTE PARA OBTENER LAS FECHA  Y HORA DEL EVENTO ///////////////////////////////////////

//   const handleDateChange = useCallback(
//     (nuevasFechas: string[]) => {
//       setFechas(nuevasFechas);
//       form.setValue("fechas", nuevasFechas); // 🔹 Actualiza el formulario
//       form.trigger("fechas"); // 🔹 Dispara la validación manualmente
//       // console.log("Fechas seleccionadas:", nuevasFechas);
//     },
//     [form]
//   );

//   const handleTimeChange = (start: string | null, end: string | null) => {
//     setTimeInicio(start);
//     setTimeFin(end);
//     form.setValue("horaInicio", start || "");
//     form.setValue("horaFin", end || "");
//     form.trigger(["horaInicio", "horaFin"]);
//     // console.log("Hora de inicio:", start);
//     // console.log("Hora de fin:", end);
//   };

//   ///////////////////////// OBTENER LOS DATROS DEL FORMULARIO  ///////////////////////////////////////
//   // const {
//   //   formState: { errors },
//   // } = form;

//   // console.log(errors);

//   // //ID'S
//   // console.log("Estado:", estadoSeleccionado);
//   // console.log("Municipio:", municipioSeleccionado);
//   // console.log("Colonia:", coloniaSeleccionada);
//   // //NOMBRES
//   // console.log("estadoGuardar:", estadoSeleccionado?.nombre);
//   // console.log("municipioGuardar:", municipioSeleccionado?.nombre);
//   // console.log("coloniaGuardar:", coloniaSeleccionada?.nombre);

//   function onSubmit(values: FormValues) {
//     console.log("DATOS DEL FORMULARIO");

//     // Reemplazar los valores con los nombres seleccionados
//     const datosCorrectos = {
//       ...values,
//       estado: estadoSeleccionado?.nombre || values.estado,
//       municipio: municipioSeleccionado?.nombre || values.municipio,
//       colonia: coloniaSeleccionada?.nombre || values.colonia,
//     };

//     console.log(datosCorrectos);
//   }

//   ///////////////////////// ENVIAR FUNCIONES A FormularioEvento.tsx ///////////////////////////////////////
//   return {
//     form,
//     estados,
//     municipios,
//     colonias,
//     estadoSeleccionado,
//     municipioSeleccionado,
//     coloniaSeleccionada,
//     setEstadoSeleccionado,
//     setMunicipioSeleccionado,
//     setColoniaSeleccionada,
//     handleDateChange,
//     handleTimeChange,
//     setFechas,
//     setTimeInicio,
//     setTimeFin,
//     fechas,
//     timeInicio,
//     timeFin,
//     onSubmit,
//   };
// }
