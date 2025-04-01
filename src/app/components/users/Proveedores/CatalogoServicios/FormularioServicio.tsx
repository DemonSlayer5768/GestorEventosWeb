"use client";

import React from "react";
import {
  Button,
  CardContent,
  CardHeader,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { CardTitle, CardDescription, CardFooter } from "@Components/ui/card";
import { X } from "lucide-react";
import { useFormularioServicio } from "@Lib/hooks/useFormularioServicio";

export default function ProductForm() {
  const {
    extras,
    extraInput,
    extraPriceInput,
    setExtraInput,
    setExtraPriceInput,
    addExtra,
    removeExtra,
    handleSubmit,
  } = useFormularioServicio();

  return (
    <div className="w-full">
      <CardHeader className="sticky top-0 bg-white z-10 border-b p-6">
        <CardTitle>Formulario de Producto</CardTitle>
        <CardDescription>
          Ingresa los detalles del producto o servicio
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6 p-6">
          <TextField fullWidth label="Nombre" variant="outlined" required />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormControl fullWidth>
              <InputLabel>Tipo</InputLabel>
              <Select required>
                <MenuItem value="producto">Producto</MenuItem>
                <MenuItem value="servicio">Servicio</MenuItem>
                <MenuItem value="suscripcion">Suscripción</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Categoría</InputLabel>
              <Select required>
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
            label="Precio"
            type="number"
            inputProps={{ min: 0, step: 0.01 }}
            required
          />

          <FormControl fullWidth>
            <InputLabel>Disponibilidad</InputLabel>
            <Select required>
              <MenuItem value="en_stock">En stock</MenuItem>
              <MenuItem value="agotado">Agotado</MenuItem>
              <MenuItem value="bajo_pedido">Bajo pedido</MenuItem>
              <MenuItem value="pre_venta">Pre-venta</MenuItem>
              <MenuItem value="disponible_pronto">Disponible pronto</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Descripción"
            multiline
            rows={4}
            required
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
                value={extraPriceInput}
                onChange={(e) => setExtraPriceInput(e.target.value)}
                placeholder="Precio"
                type="number"
                inputProps={{ min: 0, step: 0.01 }}
                className="w-24"
              />
              <Button type="button" onClick={addExtra} variant="contained">
                Añadir
              </Button>
            </div>

            {extras.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {extras.map((extra, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-200 rounded-lg p-2"
                  >
                    {extra.name} - ${extra.price.toFixed(2)}
                    <button
                      type="button"
                      onClick={() => removeExtra(extra.name)}
                      className="ml-1 rounded-full hover:bg-gray-300 p-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <TextField fullWidth label="Política" multiline rows={4} />
        </CardContent>

        <CardFooter className="sticky bottom-0 bg-white border-t p-6">
          <Button type="submit" variant="contained" fullWidth>
            Guardar
          </Button>
        </CardFooter>
      </form>
    </div>
  );
}
