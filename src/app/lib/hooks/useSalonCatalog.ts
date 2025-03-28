import { useState } from "react";

type Salon = {
  id: number;
  name: string;
  price: string;
  location: string;
  rating: number;
  image: string;
};

export function useSalonCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);
  const filteredSalons: Salon[] = [
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

  return {
    searchTerm,
    setSearchTerm,
    selectedSalon,
    setSelectedSalon,
    filteredSalons,
  };
}
