import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validación con Zod
const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  apellido: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  telefono: z.string().min(8, { message: "Número de teléfono inválido" }),
  nombreEvento: z.string().min(3, {
    message: "El nombre del evento debe tener al menos 3 caracteres",
  }),

  // Corrección en fechas: Debe ser un array de strings con al menos un elemento
  fechas: z
    .array(z.string())
    .min(1, { message: "Debe seleccionar al menos una fecha" }),

  tipoEvento: z.string(), // Se elimina { required_error: "..."}
  categoria: z.string(),
  modalidad: z.string(),

  descripcion: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(500, { message: "La descripción no debe exceder los 500 caracteres" }),

  horaInicio: z.string().min(1, { message: "La hora de inicio es requerida" }),
  horaFin: z.string().min(1, { message: "La hora de fin es requerida" }),

  pais: z.string(),
  ciudad: z.string(),
  colonia: z.string(),
  calle: z.string(),
  numeroExt: z.string(),
  numeroInt: z.string(),
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
      pais: "",
      ciudad: "",
      colonia: "",
      calle: "",
      numeroExt: "",
      numeroInt: "",
    },
  });

  // 🔹 Memoizar la función para evitar renders innecesarios
  const handleDateChange = useCallback(
    (nuevasFechas: string[]) => {
      setFechas(nuevasFechas);
      form.setValue("fechas", nuevasFechas); // 🔹 Actualiza el formulario
      form.trigger("fechas"); // 🔹 Dispara la validación manualmente
      console.log("Fechas seleccionadas:", nuevasFechas);
    },
    [form] // 🔹 Se agrega `form` a las dependencias
  );

  const handleTimeChange = (start: string | null, end: string | null) => {
    // Aquí puedes manejar los valores null si es necesario
    console.log("Hora de inicio:", start);
    console.log("Hora de fin:", end);

    // Actualiza los valores en el formulario
    form.setValue("horaInicio", start || "");
    form.setValue("horaFin", end || "");
  };

  const {
    formState: { errors },
  } = form;

  console.log(errors);

  const [fechas, setFechas] = useState<string[]>([]);
  const [timeInicio, setTimeInicio] = useState<string | null>(null);
  const [timeFin, setTimeFin] = useState<string | null>(null);

  function onSubmit(values: FormValues) {
    console.log("debe de entrar");
    console.log(values);
  }

  return {
    form,
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
