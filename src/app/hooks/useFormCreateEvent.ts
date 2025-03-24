import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  obtenerEstados,
  obtenerMunicipios,
  obtenerColonias,
} from "@Apis/apiDIPOMEX";

// Esquema de validación con Zod
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

  descripcion: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(500, { message: "La descripción no debe exceder los 500 caracteres" }),

  fechas: z
    .array(z.string())
    .min(1, { message: "Debe seleccionar al menos una fecha" }),

  horaInicio: z.string().min(1, { message: "La hora del evento es requerida" }),
  horaFin: z.string(),

  codigoPostal: z.string(),
  estado: z.string(),
  municipio: z.string(),
  colonia: z.string(),
  calle: z.string(),
  numeroExt: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function useFormularioEvento() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      nombreEvento: "",
      fechas: [],
      horaInicio: "",
      horaFin: "",
      tipoEvento: "",
      categoria: "",
      modalidad: "",
      descripcion: "",
      codigoPostal: "",
      estado: "",
      municipio: "",
      colonia: "",
      calle: "",
      numeroExt: "",
    },
  });

  // 🔹 Memoizar la función para evitar renders innecesarios
  const [fechas, setFechas] = useState<string[]>([]); // (fechas lugar en el que se almacena el valor ) , (setFechas funcion que actualiza el estado )  useState(valorInicial),
  const [timeInicio, setTimeInicio] = useState<string | null>(null);
  const [timeFin, setTimeFin] = useState<string | null>(null);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState<string>("");
  const [coloniaSeleccionada, setColoniaSeleccionada] = useState<string>("");
  const [municipioSeleccionado, setMunicipioSeleccionado] =
    useState<string>("");

  const [estados, setEstados] = useState<
    { ESTADO_ID: string; ESTADO: string }[]
  >([]);
  const [municipios, setMunicipios] = useState<
    { MUNICIPIO_ID: string; MUNICIPIO: string }[]
  >([]);
  const [colonias, setColonias] = useState<
    { ASENTA_ID: string; COLONIA: string }[]
  >([]);

  const cargarEstados = useCallback(async () => {
    const datos = await obtenerEstados();
    setEstados(datos.estados || []);
  }, []);

  const resetMunicipio = useCallback(() => {
    form.setValue("municipio", "");
    setMunicipioSeleccionado(""); // 🔹 Resetea el estado de municipio
  }, [form]);

  const resetColonias = useCallback(() => {
    form.setValue("colonia", "");
    setColoniaSeleccionada(""); // 🔹 Resetea el estado de las colonias
  }, [form]);

  useEffect(() => {
    cargarEstados();
  }, [cargarEstados]);

  useEffect(() => {
    if (!estadoSeleccionado) return;
    obtenerMunicipios(estadoSeleccionado).then((datos) => {
      setMunicipios(datos.municipios || []);
      resetMunicipio();
    });
  }, [estadoSeleccionado, resetMunicipio]);

  useEffect(() => {
    if (!estadoSeleccionado || !municipioSeleccionado) return;
    obtenerColonias(estadoSeleccionado, municipioSeleccionado).then((datos) => {
      setColonias(datos.colonias || []);
      resetColonias();
    });
  }, [estadoSeleccionado, municipioSeleccionado, resetColonias]);

  useEffect(() => {
    if (!coloniaSeleccionada) {
      form.setValue("colonia", "");
    }
  }, [estadoSeleccionado, municipioSeleccionado, coloniaSeleccionada, form]);

  const handleDateChange = useCallback(
    (nuevasFechas: string[]) => {
      setFechas(nuevasFechas);
      form.setValue("fechas", nuevasFechas); // 🔹 Actualiza el formulario
      form.trigger("fechas"); // 🔹 Dispara la validación manualmente
      // console.log("Fechas seleccionadas:", nuevasFechas);
    },
    [form]
  );

  const handleTimeChange = (start: string | null, end: string | null) => {
    setTimeInicio(start);
    setTimeFin(end);
    form.setValue("horaInicio", start || "");
    form.setValue("horaFin", end || "");
    form.trigger(["horaInicio", "horaFin"]);
    // console.log("Hora de inicio:", start);
    // console.log("Hora de fin:", end);
  };

  // const {
  //   formState: { errors },
  // } = form;

  // console.log(errors);

  function onSubmit(values: FormValues) {
    console.log("debe de entrar");
    console.log(values);
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
