//ServiceCard.tsx

import Image from "next/image";
import { Star, ListCheck } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

export interface Service {
  id: number;
  nombre: string;
  precioBase: number;
  municipio: string;
  calificacion?: number;
  imagenes?: string[];
  localidad?: string; // ← falta
  estado?: string; // ← falta
}

export interface ServiceCardProps {
  service: Service;
  onReserve: () => void;
}

export default function ServiceCard({ service, onReserve }: ServiceCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <Image
        src={service.imagenes?.[0] || "/placeholder.svg"}
        alt={service.nombre}
        width={300}
        height={200}
        className="object-cover w-full"
      />
      <CardHeader title={service.nombre} subheader={service.municipio} />
      <CardContent className="flex-grow">
        <p className="text-lg font-bold">${service.precioBase.toFixed(2)}</p>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 break-words">{service.calificacion ?? 0}</span>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onReserve}
        >
          <ListCheck className="h-4 w-4 mr-2" /> Modificar
        </Button>
      </CardActions>
    </Card>
  );
}
