import { Container, IconButton } from "@mui/material";
import HomeIcon from "../svg/home-icon";
import ExpensesIcon from "../svg/expenses-icon";
import AddIcon from "../svg/add-icon";
import CalendarIcon from "../svg/calendar-icon";
import SettingsIcon from "../svg/settings-icon";

export default function BottomNav() {
  return (
    <Container
      sx={{
        position: "fixed",
        bottom: 0,
        display: { xs: "flex", md: "none" },
        p: "0 50px",
        justifyContent: "space-between",
        boxShadow: 3,
        backgroundColor: "#FFFFFF",
      }}
    >
      <IconButton disableRipple>
        <HomeIcon />
      </IconButton>
      <IconButton disableRipple>
        <ExpensesIcon />
      </IconButton>
      <IconButton disableRipple>
        <AddIcon />
      </IconButton>
      <IconButton disableRipple>
        <CalendarIcon />
      </IconButton>
      <IconButton disableRipple>
        <SettingsIcon />
      </IconButton>
    </Container>
  );
}
