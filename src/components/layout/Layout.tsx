import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import TabbedViewSwitch from "../tabbed-view-switch/tabbed-view-switch";
import BottomNav from "../bottom-nav/bottom-nav";
import Header from "../header/header";

export default function Layout() {
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
      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
      <BottomNav />
    </Container>
  );
}
