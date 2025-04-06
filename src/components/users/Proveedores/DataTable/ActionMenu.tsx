import * as React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVertical } from "lucide-react";

const ActionMenu: React.FC<{ rowId: number }> = ({ rowId }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertical size={20} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => console.log("Detalles", rowId)}>
          Detalles
        </MenuItem>
        <MenuItem onClick={() => console.log("Modificar", rowId)}>
          Modificar
        </MenuItem>
        <MenuItem onClick={() => console.log("Eliminar", rowId)}>
          Eliminar
        </MenuItem>
      </Menu>
    </>
  );
};

export default ActionMenu;
