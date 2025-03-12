"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";
import "@Styles/create-event.css";

import { Button } from "@Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@Components/ui/card";
import { Input } from "@Components/ui/input";
import { Textarea } from "@Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@Components/ui/select";
import { Calendar } from "@Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@Components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@Components/ui/form";
import { Separator } from "@Components/ui/separator";
// import { toast } from "@Hooks/useToast";

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
});

type FormValues = z.infer<typeof formSchema>;

export default function FormularioEvento() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      nombreEvento: "",
      ubicacion: "",
      descripcion: "",
      horaEvento: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // toast({
    //   title: "Formulario enviado",
    //   description: "Hemos recibido tu información correctamente.",
    // });
  }

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Formulario de Evento
          </CardTitle>
          <CardDescription className="text-center">
            Complete sus datos personales y la información del evento que desea
            crear
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form methods={form} onSubmit={onSubmit}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <h3 className="text-lg font-medium">Datos Personales</h3>
                <p className="text-sm text-muted-foreground">
                  Ingrese sus datos de contacto para poder comunicarnos con
                  usted.
                </p>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Juan"
                            {...field}
                            value={
                              typeof field.value === "string" ? field.value : ""
                            }
                          />
                        </FormControl>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apellido"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl>
                          <Input
                            type="string"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value.toISOString().split("T")[0]
                            }
                          />
                        </FormControl>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value.toISOString().split("T")[0]
                            }
                          />
                        </FormControl>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value.toISOString().split("T")[0]
                            }
                          />
                        </FormControl>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Detalles del Evento</h3>
                <p className="text-sm text-muted-foreground">
                  Proporcione la información sobre el evento que desea crear.
                </p>
                <Separator />
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="nombreEvento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del Evento</FormLabel>
                        <FormControl>
                          <Input
                            type="string"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value.toISOString().split("T")[0]
                            }
                          />
                        </FormControl>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fechaEvento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fecha del Evento</FormLabel>
                          <Popover
                            content={
                              <PopoverContent>
                                <Calendar
                                  selected={selectedDate}
                                  onSelect={(date) => setSelectedDate(date)}
                                  disabled={({ date }) => date < new Date()} // Acceder correctamente a 'date'
                                />
                              </PopoverContent>
                            }
                          >
                            <PopoverTrigger>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${
                                    !field.value && "text-muted-foreground"
                                  }`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: es })
                                  ) : (
                                    <span>Seleccione una fecha</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                          </Popover>

                          <FormMessage>Este campo es obligatorio</FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="horaEvento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hora del Evento</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <Input
                                type="string"
                                {...field}
                                value={
                                  typeof field.value === "string"
                                    ? field.value
                                    : field.value.toISOString().split("T")[0]
                                }
                              />
                            </FormControl>
                            <Clock className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                          </div>
                          <FormMessage>Este campo es obligatorio</FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="ubicacion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ubicación</FormLabel>
                        <FormControl>
                          <Input
                            type="string"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value.toISOString().split("T")[0]
                            }
                          />
                        </FormControl>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tipoEvento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Evento</FormLabel>
                        <Select
                          onChange={(value) => field.onChange(value)}
                          value={field.value as string | undefined}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione un tipo de evento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="conferencia">
                              Conferencia
                            </SelectItem>
                            <SelectItem value="seminario">Seminario</SelectItem>
                            <SelectItem value="taller">Taller</SelectItem>
                            <SelectItem value="fiesta">Fiesta</SelectItem>
                            <SelectItem value="reunion">Reunión</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="descripcion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción del Evento</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describa los detalles de su evento, objetivos, público objetivo, etc."
                            className="min-h-[120px]"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value?.toString()
                            }
                          />
                        </FormControl>
                        <FormDescription>Máximo 500 caracteres</FormDescription>
                        <FormMessage>Este campo es obligatorio</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <CardFooter className="flex justify-between px-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                >
                  Cancelar
                </Button>
                <Button type="submit">Enviar Formulario</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
