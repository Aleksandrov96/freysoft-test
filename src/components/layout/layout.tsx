import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import TabbedViewSwitch from "@/components/tabbed-view-switch/tabbed-view-switch";
import BottomNav from "@/components/bottom-nav/bottom-nav";

const Layout: React.FC = () => {
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
};

export default Layout;
