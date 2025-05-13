import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ProductForm from "./FormularioServicio";

interface Extra {
  name: string;
  price: number;
}

interface ServiceDialogProps {
  service: {
    id: string;
    nombre: string;
    tipo: string;
    categoria: string;
    descripcion: string;
    precioBase: number;
    cantidad: number;
    extras?: Extra[];
    estadoId?: string;
    municipioId?: string;
    coloniaId?: string;
    imagenes?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ModifyService({
  service,
  isOpen,
  onClose,
}: ServiceDialogProps) {
  const [initialValues, setInitialValues] = useState<any>(null);

  useEffect(() => {
    if (service) {
      setInitialValues({
        nombre: service.nombre,
        tipo: service.tipo,
        categoria: service.categoria,
        descripcion: service.descripcion,
        precioBase: `$${service.precioBase.toFixed(2)}`,
        cantidad: service.cantidad.toString(),
        extras: service.extras || [],
        estadoId: service.estadoId,
        municipioId: service.municipioId,
        coloniaId: service.coloniaId,
        // Nota: Las imágenes necesitarían conversión especial si son URLs/base64
      });
    }
  }, [service]);

  const handleSubmitSuccess = () => {
    onClose();
    // Aquí podrías agregar un callback para actualizar la lista de servicios
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle>Editar Servicio: {service.nombre}</DialogTitle>
      <DialogContent dividers>
        {initialValues && (
          <ProductForm
            onClose={handleSubmitSuccess}
            initialValues={initialValues}
            isEditMode={true}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
