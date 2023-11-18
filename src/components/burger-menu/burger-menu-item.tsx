import { IconButton, MenuItem } from "@mui/material";
import { ReactNode } from "react";

type BurgerMenuItemProps = {
  handleCLose: () => void;
  children: ReactNode
};

export default function BurgerMenuItem({ handleCLose, children }: BurgerMenuItemProps) {
  return (
    <MenuItem
      onClick={handleCLose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton disableRipple>
        {children}
      </IconButton>
    </MenuItem>
  );
}
