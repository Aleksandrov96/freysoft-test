import { Container, IconButton } from "@mui/material";
import HomeIcon from "@/components/svg/home-icon";
import ExpensesIcon from "@/components/svg/expenses-icon";
import AddIcon from "@/components/svg/add-icon";
import CalendarIcon from "@/components/svg/calendar-icon";
import SettingsIcon from "@/components/svg/settings-icon";

const BottomNav: React.FC = () => {
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
};

export default BottomNav;
