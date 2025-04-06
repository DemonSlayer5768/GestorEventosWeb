import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpenServicios = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { open, handleOpenServicios, handleClose };
};
