import { Container } from "@mui/material";
import BottomNav from "../bottom-nav/bottom-nav";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import TabbedViewSwitch from "../tabbed-view-switch/tabbed-view-switch";

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
      <TabbedViewSwitch />
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </Container>
  );
};
