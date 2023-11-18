import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "../svg/avatar";
import { Box, Typography } from "@mui/material";
import NotificationIcon from "../svg/notification-icon";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const titles = [
  { path: "/", title: "Home" },
  { path: "/expenses", title: "Expenses" },
];

export default function Header() {
  const [pageTitle, setPageTitle] = useState<string>("");
  const { pathname } = useLocation();

  useEffect(() => {
    const curTitle = titles.find((item) => item.path === pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
    }
  }, [pathname]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              background: "#9B63FC",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <Avatar />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              display: "flex",
              color: "black",
              fontWeight: 500,
            }}
          >
            {pageTitle}
          </Typography>
          <NotificationIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
