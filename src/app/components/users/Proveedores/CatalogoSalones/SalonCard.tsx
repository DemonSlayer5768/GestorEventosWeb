import Image from "next/image";
import { Star, Calendar } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

interface SalonCardProps {
  salon: {
    image: string;
    name: string;
    location: string;
    price: string;
    rating: number;
  };
  onReserve: () => void;
}

export default function SalonCard({ salon, onReserve }: SalonCardProps) {
  return (
    <Card>
      <Image
        src={salon.image}
        alt={salon.name}
        width={300}
        height={200}
        className="object-cover w-full"
      />
      <CardHeader title={salon.name} subheader={salon.location} />
      <CardContent>
        <p className="text-lg font-bold">{salon.price}</p>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm">{salon.rating}</span>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onReserve}
        >
          <Calendar className="h-4 w-4 mr-2" /> Reservar
        </Button>
      </CardActions>
    </Card>
  );
}
