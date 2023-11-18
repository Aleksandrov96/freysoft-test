import { useState } from "react";
import { IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "../svg/home-icon";
import BurgerMenuItem from "./burger-menu-item";
import ExpensesIcon from "../svg/expenses-icon";
import AddIcon from "../svg/add-icon";
import CalendarIcon from "../svg/calendar-icon";
import SettingsIcon from "../svg/settings-icon";

export function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ display: { xs: "none", md: "inline-block" } }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {open ? (
          <MenuOpenIcon sx={{ color: "#000000" }} />
        ) : (
          <MenuIcon sx={{ color: "#000000" }} />
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <BurgerMenuItem handleCLose={handleClose}>
          <HomeIcon />
        </BurgerMenuItem>
        <BurgerMenuItem handleCLose={handleClose}>
          <ExpensesIcon />
        </BurgerMenuItem>
        <BurgerMenuItem handleCLose={handleClose}>
          <AddIcon />
        </BurgerMenuItem>
        <BurgerMenuItem handleCLose={handleClose}>
          <CalendarIcon />
        </BurgerMenuItem>
        <BurgerMenuItem handleCLose={handleClose}>
          <SettingsIcon />
        </BurgerMenuItem>
      </Menu>
    </>
  );
}
