import { Container } from "@mui/material";
import SimpleBottomNavigation from "../bottom-bar/BottomBar";
import Header from "../top-bar/TopBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <SimpleBottomNavigation />
    </Container>
  );
};
