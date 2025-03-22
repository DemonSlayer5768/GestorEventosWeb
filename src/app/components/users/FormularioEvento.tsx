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
// import { Select, MenuItem } from "@Components/ui/select";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import BasicTimeRangeField from "@Components/ui/TimePickerBasic";
import MultiDatePicker from "@Components/ui/MultiDatePicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@Components/ui/popover";
import {
  Form,
  FormControlPrivate,
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
    estados,
    municipios,
    colonias,
    estadoSeleccionado,
    setEstadoSeleccionado,
    municipioSeleccionado,
    setMunicipioSeleccionado,
    handleDateChange,
    handleTimeChange,
    // setFechas,
    // setTimeInicio,
    // setTimeFin,
    // fechas,
    // timeInicio,
    // timeFin,
    onSubmit,
  } = useFormularioEvento();

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="space-y-1">
          {/*  Titulo */}
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
            {/*  SECCION DE DATOS PERSONALES DEL USUARIO */}
            <div>
              <h3 className="text-lg font-medium">Datos Personales</h3>
              <p className="text-sm text-muted-foreground">
                Ingrese sus datos de contacto para poder comunicarnos con usted.
              </p>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombres *</FormLabel>
                      <FormControlPrivate>
                        <Input
                          {...field}
                          value={
                            typeof field.value === "string" ? field.value : ""
                          }
                          placeholder="Jonathan Silvestre"
                        />
                      </FormControlPrivate>

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
                      <FormLabel>Apellidos *</FormLabel>
                      <FormControlPrivate>
                        <Input
                          type="string"
                          {...field}
                          value={
                            field.value instanceof Date
                              ? field.value.toISOString().split("T")[0] // Convierte a formato YYYY-MM-DD
                              : Array.isArray(field.value)
                              ? field.value.join(", ") // Si es un array, convierte a string
                              : field.value // Si es string, úsalo directamente
                          }
                          placeholder="Jaime Loza"
                        />
                      </FormControlPrivate>
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
                      <FormLabel>Correo Electrónico *</FormLabel>
                      <FormControlPrivate>
                        <Input
                          type="email"
                          {...field}
                          value={
                            field.value instanceof Date
                              ? field.value.toISOString().split("T")[0] // Convierte a formato YYYY-MM-DD
                              : Array.isArray(field.value)
                              ? field.value.join(", ") // Si es un array, convierte a string
                              : field.value // Si es string, úsalo directamente
                          }
                          placeholder="jjaimeloza5768@gmail.com"
                        />
                      </FormControlPrivate>
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
                      <FormLabel>Teléfono *</FormLabel>
                      <FormControlPrivate>
                        <Input
                          type="tel"
                          {...field}
                          value={
                            typeof field.value === "string"
                              ? field.value.replace(/\D/g, "")
                              : ""
                          } // Elimina todo lo que no sea numero
                          onChange={(e) =>
                            field.onChange(e.target.value.replace(/\D/g, ""))
                          } // Evita caracteres no numericos
                          placeholder="3325921540"
                        />
                      </FormControlPrivate>
                      <FormMessage>
                        {form.formState.errors.telefono?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/*  DETALLES DEL EVENTO */}

            <div className="pb-6">
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
                      <FormLabel>Nombre del Evento *</FormLabel>
                      <FormControlPrivate>
                        <Input
                          type="string"
                          {...field}
                          value={
                            field.value instanceof Date
                              ? field.value.toISOString().split("T")[0] // Convierte a formato YYYY-MM-DD
                              : Array.isArray(field.value)
                              ? field.value.join(", ") // Si es un array, convierte a string
                              : field.value // Si es string, úsalo directamente
                          }
                          placeholder="Nombre del Evento"
                        />
                      </FormControlPrivate>
                      <FormMessage>
                        {form.formState.errors.nombreEvento?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fechas"
                    render={() => (
                      <FormItem>
                        <FormLabel>Fecha del evento </FormLabel>
                        <Popover>
                          <PopoverTrigger>
                            <FormControlPrivate>
                              <PopoverContent>
                                <MultiDatePicker
                                  onDateChange={handleDateChange}
                                />
                              </PopoverContent>
                            </FormControlPrivate>
                          </PopoverTrigger>
                        </Popover>

                        <FormMessage>
                          {/* Solo mostrar error si el usuario ha intentado enviar el formulario */}
                          {form.formState.isSubmitted &&
                            form.formState.errors.fechas?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="horaInicio"
                    render={() => (
                      <FormItem>
                        <FormLabel>Hora del Evento</FormLabel>
                        <Popover>
                          <PopoverTrigger>
                            <FormControlPrivate>
                              <PopoverContent>
                                <BasicTimeRangeField
                                  onTimeChange={handleTimeChange}
                                />
                              </PopoverContent>
                            </FormControlPrivate>
                          </PopoverTrigger>
                        </Popover>

                        <FormMessage>
                          {form.formState.errors.horaInicio?.message}
                          {form.formState.errors.horaFin?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-3  md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="tipoEvento"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl size="small" className=" w-full">
                          <InputLabel>Tipo de Evento</InputLabel>
                          <Select
                            label="Tipo de Evento"
                            onChange={(e) => field.onChange(e.target.value)}
                            value={field.value || ""}
                          >
                            <MenuItem value="publico">Publico</MenuItem>
                            <MenuItem value="privado">Privado</MenuItem>
                            <MenuItem value="otro">Otro</MenuItem>
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
                    name="categoria"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl size="small" className=" w-full ">
                          <InputLabel>Categoria</InputLabel>
                          <Select
                            label="Categoria"
                            onChange={(value) => field.onChange(value)}
                            value={field.value as string | undefined}
                          >
                            <MenuItem value="conferencia">Conferencia</MenuItem>
                            <MenuItem value="seminario">Seminario</MenuItem>
                            <MenuItem value="taller">Taller</MenuItem>
                            <MenuItem value="fiesta">Fiesta</MenuItem>
                            <MenuItem value="reunion">Reunión</MenuItem>
                            <MenuItem value="otro">Otro</MenuItem>
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
                    name="modalidad"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl size="small" className=" w-full ">
                          <InputLabel>Modalidad</InputLabel>
                          <Select
                            label="Modalidad"
                            onChange={(value) => field.onChange(value)}
                            value={field.value as string | undefined}
                          >
                            <MenuItem value="presencial">Presencial</MenuItem>
                            <MenuItem value="virtual">Virtual</MenuItem>
                            <MenuItem value="hibrido">Hibrido</MenuItem>
                          </Select>
                        </FormControl>
                        <FormMessage>
                          {form.formState.errors.modalidad?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="descripcion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción del Evento</FormLabel>
                        <FormControlPrivate>
                          <Textarea
                            placeholder="Describa los detalles de su evento, objetivos, público objetivo, etc."
                            className="min-h-[120px] max-h-[120px] max-w-[full]"
                            {...field}
                            value={
                              typeof field.value === "string"
                                ? field.value
                                : field.value?.toString()
                            }
                          />
                        </FormControlPrivate>
                        <FormDescription>Máximo 500 caracteres</FormDescription>
                        <FormMessage>
                          {form.formState.errors.descripcion?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

                {/* UBICACION DEL EVENTO */}
                <div className="pb-6">
                  <h3 className="text-lg font-medium">Ubicacion del evento</h3>
                  <p className="text-sm text-muted-foreground">
                    Proporcione la ubicacion donde se hara el evento.
                  </p>
                  <Separator />
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                    {/* Select de Estados */}
                    <FormField
                      control={form.control}
                      name="estado"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl size="small" className=" w-full ">
                            <InputLabel>Estado</InputLabel>
                            <Select
                              label="Estado"
                              className="w-full"
                              value={estadoSeleccionado}
                              onChange={(event) => {
                                const nuevoEstado = event.target.value;
                                setEstadoSeleccionado(nuevoEstado);
                                field.onChange(nuevoEstado);
                              }}
                            >
                              {estados.map((estado) => (
                                <MenuItem key={estado} value={estado}>
                                  {estado}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.estado?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    {/* Select de Municipios */}
                    <FormField
                      control={form.control}
                      name="municipio"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl size="small" className="w-full">
                            <InputLabel>Municipio</InputLabel>
                            <Select
                              size="small"
                              className=" w-full"
                              label="Municipio"
                              value={municipioSeleccionado}
                              onChange={(event) => {
                                const nuevoMunicipio = event.target.value;
                                setMunicipioSeleccionado(nuevoMunicipio);
                                field.onChange(nuevoMunicipio);
                              }}
                              disabled={!estadoSeleccionado} // Deshabilita si no hay estado seleccionado
                            >
                              {municipios.map((municipio) => (
                                <MenuItem key={municipio} value={municipio}>
                                  {municipio}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.municipio?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    {/* Select de Colonias */}
                    <FormField
                      control={form.control}
                      name="colonia"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl size="small" className="w-full">
                            <InputLabel>Colonia</InputLabel>
                            <Select
                              size="small"
                              className=" w-full"
                              label="Colonia"
                              value={field.value}
                              onChange={field.onChange}
                              disabled={!municipioSeleccionado} // Deshabilita si no hay municipio seleccionado
                            >
                              {colonias.map((colonia) => (
                                <MenuItem key={colonia} value={colonia}>
                                  {colonia}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.colonia?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormControl>
                      <FormField
                        control={form.control}
                        name="calle"
                        render={({ field }) => (
                          <FormItem>
                            <FormControlPrivate>
                              <Input
                                type="string"
                                {...field}
                                value={
                                  field.value instanceof Date
                                    ? field.value.toISOString().split("T")[0] // Convierte a formato YYYY-MM-DD
                                    : Array.isArray(field.value)
                                    ? field.value.join(", ") // Si es un array, convierte a string
                                    : field.value // Si es string, úsalo directamente
                                }
                                placeholder="Nombre de la Calle"
                              />
                            </FormControlPrivate>
                            <FormMessage>
                              {form.formState.errors.calle?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </FormControl>

                    <FormControl>
                      <FormField
                        control={form.control}
                        name="numeroExt"
                        render={({ field }) => (
                          <FormItem>
                            <FormControlPrivate>
                              <Input
                                type="string"
                                {...field}
                                value={
                                  typeof field.value === "string"
                                    ? field.value.replace(/\D/g, "")
                                    : ""
                                } // Elimina todo lo que no sea numero
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.value.replace(/\D/g, "")
                                  )
                                } // Evita caracteres no numericos
                                placeholder="Numero del Domicilio"
                              />
                            </FormControlPrivate>
                            <FormMessage>
                              {form.formState.errors.numeroExt?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </FormControl>
                  </div>
                </div>
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
