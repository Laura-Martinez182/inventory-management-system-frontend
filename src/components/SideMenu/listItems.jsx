import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import { green } from '@mui/material/colors';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartRoundedIcon sx={{ color: green[200] }}/>
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleRoundedIcon sx={{ color: green[200] }}/>
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartRoundedIcon sx={{ color: green[200] }}/>
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Inventory2RoundedIcon sx={{ color: green[200] }}/>
      </ListItemIcon>
      <ListItemText primary="Inventario" />
    </ListItemButton>
  </React.Fragment>
);
