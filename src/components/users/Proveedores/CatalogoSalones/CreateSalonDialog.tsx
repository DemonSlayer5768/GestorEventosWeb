import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
// import MultiDatePicker from "@Components/ui/MultiDatePicker";

interface ReservationDialogProps {
  salon: { name: string };
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateServiceDialog({
  salon,
  isOpen,
  onClose,
}: ReservationDialogProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Servicio {salon.name}</DialogTitle>
      <DialogContent>
        {/* <MultiDatePicker /> */}
        {/* <TextField
          margin="dense"
          id="date"
          label="Fecha"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
        /> */}
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
