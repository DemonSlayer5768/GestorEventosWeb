import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

interface AgregarSalonModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AgregarSalonModal({
  open,
  onClose,
}: AgregarSalonModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Agregar Salón
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Aquí puedes agregar un nuevo salón.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
