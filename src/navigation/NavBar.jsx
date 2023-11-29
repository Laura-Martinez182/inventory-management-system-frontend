import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const navigate = useNavigate();
  const navigateToUrl = (url) => {
    navigate(url);
  };

  const toggleDrawer = (isOpen) => setIsDrawerOpen(isOpen);

  return (
    <nav>
      <SideMenu
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        handleClick={navigateToUrl}
      />
      <Box sx={{ display: "contents" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography 
            variant="h6"
            className="text-center flex-grow flex-nowrap bold text-emerald-500">
              Manejo de inventario
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default NavBar;
