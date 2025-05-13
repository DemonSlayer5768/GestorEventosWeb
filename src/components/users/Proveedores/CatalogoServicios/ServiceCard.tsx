import Image from "next/image";
import { Star, ListCheck, X } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

export interface Service {
  id: number;
  nombre: string;
  precioBase: string;
  calificacion?: number;
  imagenes?: string[];
  estado?: string;
  localidad?: string;
  municipio?: string;
  location?: string;
}

export interface ServiceCardProps {
  service: Service;
  onReserve: () => void;
}

export default function ServiceCard({ service, onReserve }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full rounded-xl shadow-md overflow-hidden">
      {/* Imagen */}
      <div className="relative w-full h-60">
        <Image
          src={service.imagenes?.[0] || "/placeholder.svg"}
          alt={service.nombre}
          fill
          className="object-cover"
        />
      </div>

      {/* Título y subtítulo */}
      <CardHeader
        className="pb-0"
        title={
          <div
            className="text-md text-blue-800 font-semibold truncate w-full"
            title={service.nombre}
          >
            {service.nombre}
          </div>
        }
        subheader={
          <div
            className="text-sm text-gray-800 truncate w-full"
            title={service.location}
          >
            {service.location}
          </div>
        }
      />

      {/* Contenido */}
      <CardContent className="flex flex-col gap-2">
        <p className="text-lg font-bold text-blue-600">${service.precioBase}</p>
        <div className="flex items-center text-sm text-gray-600">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1">{service.calificacion ?? 0}</span>
        </div>
      </CardContent>

      {/* Botones */}
      <CardActions className="gap-2 px-4 pb-4">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onReserve}
          startIcon={<ListCheck className="h-4 w-4" />}
        >
          Modificar
        </Button>

        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={() => {
            console.log(`Eliminar servicio con ID: ${service.id}`);
          }}
          startIcon={<X className="h-4 w-4" />}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
