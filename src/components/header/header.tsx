import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "../svg/avatar";
import NotificationIcon from "../svg/notification-icon";
import { BurgerMenu } from "../burger-menu/burger-menu";

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
        mb: "1rem",
      }}
    >
      <Container maxWidth="xl" sx={{ p: 0}}>
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
              color: "#000000",
              fontWeight: 500,
            }}
          >
            {pageTitle}
          </Typography>
          <Box>
            <IconButton>
              <NotificationIcon />
            </IconButton>
            <BurgerMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
