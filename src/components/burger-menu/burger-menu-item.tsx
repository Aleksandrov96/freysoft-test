import { IconButton, MenuItem } from "@mui/material";
import { ReactNode } from "react";

type BurgerMenuItemProps = {
  handleCLose: () => void;
  children: ReactNode;
};

const BurgerMenuItem: React.FC<BurgerMenuItemProps> = ({
  handleCLose,
  children,
}) => {
  return (
    <MenuItem
      onClick={handleCLose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton disableRipple>{children}</IconButton>
    </MenuItem>
  );
};

export default BurgerMenuItem;
