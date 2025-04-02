"use client";

import React from "react";
import {
  Button,
  //   Checkbox,
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
// import InputFileUpload from "@Components/ui/ImputFiles";
import InputImages from "@Components/ui/ImputImages";
import { X } from "lucide-react";
import { useFormularioServicio } from "@Lib/hooks/useFormularioServicio";
import { Separator } from "@Components/ui/separator";

export default function ProductForm({ onClose }: { onClose: () => void }) {
  const {
    nombre,
    setNombre,
    tipo,
    setTipo,
    categoria,
    setCategoria,
    // disponibilidad,
    // setDisponibilidad,
    descripcion,
    setDescripcion,
    extras,
    extraInput,
    setExtraInput,
    addExtra,
    removeExtra,
    handleSubmit,
    handleCancel,
    precioBaseValue,
    handlePrecioBaseChange,
    handlePrecioBaseBlur,
    extraPriceValue,
    handleExtraPriceChange,
    handleExtraPriceBlur,
    handleUpload,
  } = useFormularioServicio(onClose);

  return (
    <div className="w-full">
      <CardHeader className=" bg-white ">
        <CardTitle className="text-gray-800">Formulario de Servcio</CardTitle>

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
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          {/*Seccion de selects*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormControl fullWidth>
              <InputLabel>Tipo *</InputLabel>
              <Select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                label="Tipo *"
                variant="outlined"
                required
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
                onChange={(e) => setCategoria(e.target.value)}
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
          {/*Importar imagenes*/}
          {/* <InputFileUpload /> */}
          {/* <FormControl fullWidth>
            <InputLabel>Disponibilidad</InputLabel>
            <Select
              value={disponibilidad}
              onChange={(e) => setDisponibilidad(e.target.value)}
              label="disponibilidad"
              variant="outlined"
              required
            >
              <MenuItem value="TODOS">TODOS LOS DIAS</MenuItem>
              <MenuItem value="L-V">LUNES A VIERNES</MenuItem>
              <MenuItem value="LUNES">LUNES</MenuItem>
              <MenuItem value="MARTES">MARTES</MenuItem>
              <MenuItem value="MIERCOLES">MIERCOLES</MenuItem>
              <MenuItem value="JUEVES">JUEVES</MenuItem>
              <MenuItem value="VIERNES">VIERNES</MenuItem>
              <MenuItem value="SABADO">SABADO</MenuItem>
              <MenuItem value="DOMINGO">DOMINGO</MenuItem>
            </Select>
          </FormControl> */}
          <TextField
            fullWidth
            label="Descripción"
            multiline
            rows={4}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
          {/*Ocultar o no*/}

          {/* <div className="display flex items-center ">
            <p className="text-gray-700">Cargar Imagenes? {""}</p>
            <Checkbox />
          </div> */}

          <div className="">
            <h2 className="text-xl font-bold mb-4">Subir Imágenes</h2>
            <InputImages onUpload={handleUpload} />
          </div>

          <Separator />
          {/*Seccion de precio base*/}
          <TextField
            id="preciobase"
            label="Precio Base"
            variant="outlined"
            fullWidth
            value={precioBaseValue}
            onChange={handlePrecioBaseChange}
            onBlur={handlePrecioBaseBlur}
          />
          {/* Sección de Extras */}
          <div className="space-y-2">
            <InputLabel>Extras</InputLabel>
            <div className="flex gap-2">
              <TextField
                value={extraInput}
                onChange={(e) => setExtraInput(e.target.value)}
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
                    className="flex items-center gap-1 bg-blue-800 rounded-lg p-2"
                  >
                    {extra.name} - ${extra.price.toFixed(2)}
                    <button
                      type="button"
                      onClick={() => removeExtra(extra.name)}
                      className="ml-1 rounded-full hover:bg-blue-500 p-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
        {/*BOTONES */}

        <CardFooter className="sticky bottom-0 bg-white border-t p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Button
              variant="outlined"
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
