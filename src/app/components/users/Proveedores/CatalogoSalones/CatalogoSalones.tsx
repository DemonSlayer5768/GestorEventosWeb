"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Calendar } from "lucide-react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const salons = [
  {
    id: 1,
    name: "Elegance Beauty Salon",
    price: "$120",
    location: "Calle Principal 123, Ciudad",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Glamour Studio",
    price: "$95",
    location: "Avenida Central 456, Ciudad",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Belleza Total",
    price: "$150",
    location: "Plaza Mayor 789, Ciudad",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Estilo Único",
    price: "$80",
    location: "Calle Secundaria 321, Ciudad",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function SalonCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSalon, setSelectedSalon] = useState<{
    id: number;
    name: string;
    price: string;
    location: string;
    rating: number;
    image: string;
  } | null>(null);

  const filteredSalons = salons.filter(
    (salon) =>
      salon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      salon.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Catálogo de Salones
      </h1>
      <TextField
        label="Buscar por nombre o ubicación"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSalons.map((salon) => (
          <SalonCard
            key={salon.id}
            salon={salon}
            onReserve={() => setSelectedSalon(salon)}
          />
        ))}
      </div>

      {filteredSalons.length === 0 && (
        <p className="text-center mt-8">
          No se encontraron salones que coincidan con tu búsqueda.
        </p>
      )}

      {selectedSalon && (
        <ReservationDialog
          salon={selectedSalon}
          isOpen={!!selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </div>
  );
}

function SalonCard({
  salon,
  onReserve,
}: {
  salon: {
    id: number;
    name: string;
    price: string;
    location: string;
    rating: number;
    image: string;
  };
  onReserve: () => void;
}) {
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

function ReservationDialog({
  salon,
  isOpen,
  onClose,
}: {
  salon: {
    id: number;
    name: string;
    price: string;
    location: string;
    rating: number;
    image: string;
  };
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Reservar en {salon.name}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="date"
          label="Fecha"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="time-label">Hora</InputLabel>
          <Select labelId="time-label" id="time" defaultValue="">
            {[
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "16:00",
              "17:00",
              "18:00",
            ].map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField margin="dense" id="name" label="Nombre" fullWidth />
        <TextField margin="dense" id="phone" label="Teléfono" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            alert("¡Reserva realizada con éxito!");
            onClose();
          }}
        >
          Confirmar Reserva
        </Button>
      </DialogActions>
    </Dialog>
  );
}
