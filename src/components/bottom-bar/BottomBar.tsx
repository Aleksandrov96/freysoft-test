import { Container, IconButton } from "@mui/material";
import Home from "../svg/Home";
import Card from "../svg/Card";
import Add from "../svg/Add";
import Calendar from "../svg/Calendar";
import Settings from "../svg/Settings";

export default function SimpleBottomNavigation() {
  return (
    <Container
      sx={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        padding: "0 50px",
        justifyContent: "space-between",
        boxShadow: 3,
      }}
    >
      <IconButton disableRipple> 
        <Home />
      </IconButton >
      <IconButton disableRipple>
        <Card />
      </IconButton>
      <IconButton disableRipple>
        <Add />
      </IconButton>
      <IconButton disableRipple>
        <Calendar />
      </IconButton>
      <IconButton disableRipple>
        <Settings />
      </IconButton>
    </Container>
  );
}
