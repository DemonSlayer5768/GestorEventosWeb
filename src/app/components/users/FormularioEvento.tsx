"use client";
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
import { Select, SelectItem } from "@Components/ui/select";
// import DatePickerBasic from "@Components/ui/DatePickerBasic";
import BasicTimeRangeField from "@Components/ui/TimePickerBasic";
import BasicDateRangePicker from "@Components/ui/DateRangePicker";
import MultiDatePicker from "@Components/ui/MultiDatePicker";
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
import { useFormularioEvento } from "@Hooks/useFormCreateEvent";

export default function FormularioEvento() {
  const {
    form,
    handleOnChange,
    setFechas,
    setFechaInicio,
    setFechaFin,
    setTimeInicio,
    setTimeFin,
    isChecked,
    onSubmit,
  } = useFormularioEvento();

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
            <div>
              <h3 className="text-lg font-medium">Datos Personales</h3>
              <p className="text-sm text-muted-foreground">
                Ingrese sus datos de contacto para poder comunicarnos con usted.
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
                          {...field}
                          value={
                            typeof field.value === "string" ? field.value : ""
                          }
                        />
                      </FormControl>

                      <FormMessage>
                        {form.formState.errors.nombre?.message}
                      </FormMessage>
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
                      <FormMessage>
                        {form.formState.errors.apellido?.message}
                      </FormMessage>
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
                      <FormMessage>
                        {form.formState.errors.email?.message}
                      </FormMessage>
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
                          type="tel"
                          {...field}
                          value={
                            typeof field.value === "string"
                              ? field.value.replace(/\D/g, "")
                              : ""
                          } // Elimina todo lo que no sea número
                          onChange={(e) =>
                            field.onChange(e.target.value.replace(/\D/g, ""))
                          } // Evita caracteres no numéricos
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.telefono?.message}
                      </FormMessage>
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
                      <FormMessage>
                        {form.formState.errors.nombreEvento?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fechaEvento"
                    render={() => (
                      <FormItem>
                        <FormLabel>Selecciona la fecha del evento </FormLabel>
                        <Popover>
                          <PopoverTrigger>
                            <FormControl>
                              <PopoverContent>
                                {/* Mostrar DatePicker si NO está activado el rango */}
                                {!isChecked && (
                                  <MultiDatePicker
                                    onDateChange={(fechas) => {
                                      setFechas(fechas || []);
                                    }}
                                  />
                                )}

                                {/* Mostrar DateRangePicker si está activado el rango */}
                                {isChecked && (
                                  <BasicDateRangePicker
                                    onDateChange={(start, end) => {
                                      setFechaInicio(start);
                                      setFechaFin(end);
                                    }}
                                  />
                                )}
                                <div className="flex justify-start pt-4">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleOnChange}
                                    className="cursor-pointer" // Añadido cursor pointer aquí
                                  />
                                  <label className="text-gray-800 flex items-center">
                                    <span className="ml-2">
                                      Ingresar fecha por rango
                                    </span>
                                  </label>
                                </div>
                              </PopoverContent>
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>

                        <FormMessage>
                          {form.formState.errors.fechaEvento?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="horaEvento"
                    render={() => (
                      <FormItem>
                        <FormLabel>Selecciona la hora del Evento</FormLabel>
                        <Popover>
                          <PopoverTrigger>
                            <FormControl>
                              <PopoverContent>
                                <BasicTimeRangeField
                                  onTimeChange={(start, end) => {
                                    // console.log("Evento recibido en Formulario:", start, end);
                                    setTimeInicio(start);
                                    setTimeFin(end);
                                  }}
                                />
                              </PopoverContent>
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>

                        <FormMessage>
                          {form.formState.errors.horaEvento?.message}
                        </FormMessage>
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
                      <FormMessage>
                        {form.formState.errors.ubicacion?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tipoEvento"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FormLabel>Tipo de Evento</FormLabel>
                        <Select
                          placeholder="Seleccione un tipo de evento"
                          onChange={(value) => field.onChange(value)}
                          value={field.value as string | undefined}
                        >
                          <SelectItem value="conferencia">
                            Conferencia
                          </SelectItem>
                          <SelectItem value="seminario">Seminario</SelectItem>
                          <SelectItem value="taller">Taller</SelectItem>
                          <SelectItem value="fiesta">Fiesta</SelectItem>
                          <SelectItem value="reunion">Reunión</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </Select>
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.tipoEvento?.message}
                      </FormMessage>
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
                      <FormMessage>
                        {form.formState.errors.descripcion?.message}
                      </FormMessage>
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
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
