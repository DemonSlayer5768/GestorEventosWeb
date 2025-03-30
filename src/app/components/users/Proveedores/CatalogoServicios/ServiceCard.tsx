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
  image: string;
  name: string;
  location: string;
  price: string;
  rating: number;
}

export interface ServiceCardProps {
  service: Service;
  onReserve: () => void;
}

export default function ServiceCard({ service, onReserve }: ServiceCardProps) {
  return (
    <Card>
      <Image
        src={service.image}
        alt={service.name}
        width={300}
        height={200}
        className="object-cover w-full"
      />
      <CardHeader title={service.name} subheader={service.location} />
      <CardContent>
        <p className="text-lg font-bold">{service.price}</p>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm">{service.rating}</span>
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
