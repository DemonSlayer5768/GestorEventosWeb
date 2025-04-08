import React, { useRef, useEffect, useMemo } from "react";
import {
  Button,
  CardContent,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@Components/ui/card";
import { InputImages } from "@Components/ui/ImputImages";
import { X } from "lucide-react";
import { useFormularioServicio } from "@Lib/hooks/useFormularioServicio";
import { Separator } from "@Components/ui/separator";

export default function ProductForm({ onClose }: { onClose: () => void }) {
  const inputImagesRef = useRef<{ clearFiles: () => void }>(null);

  const {
    estados,
    estadoSeleccionado,
    municipios,
    municipioSeleccionado,
    colonias,
    coloniaSeleccionada,
    nombre,
    tipo,
    categoria,
    descripcion,
    extras,
    extraInput,
    cantidad: cantidadValue,
    precioBaseValue,
    extraPriceValue,
    handleNombreChange,
    handleDescripcionChange,
    handleTipoChange,
    handleCategoriaChange,
    handleExtraInputChange,
    handleEstadoChange,
    handleMunicipioChange,
    handleLocalidadChange,
    handleCantidadChange,
    handlePrecioBaseChange,
    handlePrecioBaseBlur,
    handleExtraPriceChange,
    handleExtraPriceBlur,
    addExtra,
    removeExtra,
    handleSubmit,
    handleCancel,
    handleUpload,
    handleRemoveFile,
    registerClearFiles,
  } = useFormularioServicio(onClose);

  // Registra la función para limpiar los archivos en un solo efecto
  useEffect(() => {
    if (inputImagesRef.current) {
      registerClearFiles(inputImagesRef.current.clearFiles);
    }
    return () => {
      handleNombreChange.cancel?.();
      handleDescripcionChange.cancel?.();
    };
  }, [registerClearFiles, handleNombreChange, handleDescripcionChange]);

  // Memoizar los valores de los selects para evitar renderizados innecesarios
  const estadosMemo = useMemo(() => estados, [estados]);
  const municipiosMemo = useMemo(() => municipios, [municipios]);
  const coloniasMemo = useMemo(() => colonias, [colonias]);

  const handleSelectChange =
    (handler: (value: string) => void) =>
    (e: React.ChangeEvent<{ value: unknown }>) => {
      handler(e.target.value as string);
    };

  return (
    <div className="w-full">
      <CardHeader className="bg-white">
        <CardTitle className="text-gray-800">Formulario de Servicio</CardTitle>
        <CardDescription>
          Ingresa los detalles del producto o servicio
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6 p-6">
          <TextField
            fullWidth
            label="Nombre del servicio"
            variant="outlined"
            value={nombre}
            onChange={(e) => handleNombreChange(e.target.value)}
            required
          />

          {/* Sección de selects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormControl fullWidth>
              <InputLabel>Tipo *</InputLabel>
              <Select
                value={tipo}
                onChange={handleSelectChange(handleTipoChange)}
                label="Tipo *"
                variant="outlined"
              >
                <MenuItem value="producto">Producto</MenuItem>
                <MenuItem value="servicio">Servicio</MenuItem>
                <MenuItem value="suscripcion">Suscripción</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Categoría *</InputLabel>
              <Select
                value={categoria}
                onChange={handleSelectChange(handleCategoriaChange)}
                label="Categoria *"
                variant="outlined"
                required
              >
                <MenuItem value="tecnologia">Tecnología</MenuItem>
                <MenuItem value="hogar">Hogar</MenuItem>
                <MenuItem value="ropa">Ropa</MenuItem>
                <MenuItem value="alimentos">Alimentos</MenuItem>
                <MenuItem value="servicios">Servicios</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TextField
            fullWidth
            label="Descripción"
            multiline
            rows={4}
            value={descripcion}
            required
            onChange={(e) => handleDescripcionChange(e.target.value)}
          />

          <InputImages
            onUpload={handleUpload}
            onRemoveFile={handleRemoveFile}
            ref={inputImagesRef}
          />

          <Separator />

          {/* Sección de precio base */}
          <div className="grid grid-cols-2 gap-6">
            <TextField
              id="preciobase"
              label="Precio Base"
              variant="outlined"
              fullWidth
              required
              inputProps={{ inputMode: "decimal" }}
              value={precioBaseValue}
              onChange={handlePrecioBaseChange}
              onBlur={handlePrecioBaseBlur}
            />
            <TextField
              label="Cantidad"
              variant="outlined"
              fullWidth
              value={cantidadValue}
              onChange={handleCantidadChange}
            />
          </div>

          {/* Sección de Extras */}
          <div className="space-y-2">
            <InputLabel>Extras</InputLabel>
            <div className="flex gap-2">
              <TextField
                value={extraInput}
                onChange={(e) => handleExtraInputChange(e.target.value)}
                placeholder="Nombre del extra"
                className="flex-1"
              />
              <TextField
                value={extraPriceValue}
                onChange={handleExtraPriceChange}
                onBlur={handleExtraPriceBlur}
                placeholder="Precio"
                inputProps={{ inputMode: "decimal" }}
                className="w-24"
              />
              <Button
                type="button"
                onClick={addExtra}
                variant="outlined"
                color="success"
              >
                Añadir
              </Button>
            </div>

            {extras.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {extras.map((extra, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-blue-800 rounded-lg p-2 text-white"
                  >
                    {extra.name} - ${extra.price.toFixed(2)}
                    <button
                      type="button"
                      onClick={() => removeExtra(extra.name)}
                      className="ml-1 rounded-full hover:bg-blue-500 p-1"
                      aria-label={`Eliminar ${extra.name}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Sección de ubicación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormControl fullWidth>
              <InputLabel>Estado *</InputLabel>
              <Select
                value={estadoSeleccionado?.id || ""}
                onChange={handleSelectChange(handleEstadoChange)}
                label="Estado *"
                variant="outlined"
                required
              >
                {estadosMemo.map((estado) => (
                  <MenuItem key={estado.ESTADO_ID} value={estado.ESTADO_ID}>
                    {estado.ESTADO}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth disabled={!estadoSeleccionado}>
              <InputLabel>Municipio *</InputLabel>
              <Select
                value={municipioSeleccionado?.id || ""}
                onChange={handleSelectChange(handleMunicipioChange)}
                label="Municipio *"
                variant="outlined"
                required
              >
                {municipiosMemo.map((municipio) => (
                  <MenuItem
                    key={municipio.MUNICIPIO_ID}
                    value={municipio.MUNICIPIO_ID}
                  >
                    {municipio.MUNICIPIO}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth disabled={!municipioSeleccionado}>
              <InputLabel>Localidad *</InputLabel>
              <Select
                value={coloniaSeleccionada?.id || ""}
                onChange={handleSelectChange(handleLocalidadChange)}
                label="Localidad *"
                variant="outlined"
                required
              >
                {coloniasMemo.map((colonia) => (
                  <MenuItem key={colonia.ASENTA_ID} value={colonia.ASENTA_ID}>
                    {colonia.COLONIA}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Separator />
        </CardContent>

        {/* Botones */}
        <CardFooter className="sticky bottom-0 bg-white border-t p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Button
              variant="contained"
              color="error"
              onClick={handleCancel}
              fullWidth
            >
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Agregar
            </Button>
          </div>
        </CardFooter>
      </form>
    </div>
  );
}
