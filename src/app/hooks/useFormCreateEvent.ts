import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
  fechaEvento: z.date({ required_error: "La fecha es requerida" }),
  horaEvento: z.string().min(1, { message: "La hora es requerida" }),
  ubicacion: z
    .string()
    .min(3, { message: "La ubicación debe tener al menos 3 caracteres" }),
  tipoEvento: z.string({ required_error: "Seleccione un tipo de evento" }),
  descripcion: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(500, { message: "La descripción no debe exceder los 500 caracteres" }),
  fechaInicio: z.date({ required_error: "La fecha de inicio es requerida" }),
  fechaFin: z.date({ required_error: "La fecha de fin es requerida" }),
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
      ubicacion: "",
      fechaFin: new Date(),
      fechaInicio: new Date(),
      horaEvento: "",
      tipoEvento: "",
      descripcion: "",
    },
  });

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      // Si activas el rango, borra la fecha única
      setFechas([]);
    } else {
      // Si desactivas el rango, borra las fechas de inicio y fin
      setFechaInicio(null);
      setFechaFin(null);
    }
  };

  //   const [fecha, setFecha] = useState<string | null>(null);

  const [fechas, setFechas] = useState<string[]>([]);
  const [fechaInicio, setFechaInicio] = useState<string | null>(null);
  const [fechaFin, setFechaFin] = useState<string | null>(null);
  const [timeInicio, setTimeInicio] = useState<string | null>(null);
  const [timeFin, setTimeFin] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  function onSubmit(values: FormValues) {
    console.log(values);
    console.log(fechas);
  }

  return {
    form,
    handleOnChange,
    setFechas,
    setFechaInicio,
    setFechaFin,
    setTimeInicio,
    setTimeFin,
    onSubmit,
    isChecked,
  };
}
