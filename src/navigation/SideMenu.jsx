import * as React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import { green } from '@mui/material/colors';


export default function SideMenu({isDrawerOpen, toggleDrawer, handleClick}) {

  const pagesIconDict = {
      "Productos":<ShoppingCartRoundedIcon sx={{ color: green[200] }}/>,
      "Usuarios":<PeopleRoundedIcon sx={{ color: green[200] }}/>,
      "Reportes":<BarChartRoundedIcon sx={{ color: green[200] }}/>,
      "Inventario":<Inventory2RoundedIcon sx={{ color: green[200] }}/>
  };

  const pagesUrlDict = {
      "Productos":"/product-list",
      "Usuarios":"/user-list",
      "Reportes":"/reports",
      "Inventario":"/inventory"
  };

  const pagesList = () => (
      <Box sx={{ width: 200 }} onClick={() => toggleDrawer(false)}>     
          <List>
          {Object.entries(pagesIconDict).map(([page, icon]) => (
          <ListItem key={page} disablePadding>
              <ListItemButton onClick = {() => handleClick(pagesUrlDict[page])}>
              <ListItemIcon>
                  {icon}
              </ListItemIcon>
              <ListItemText primary={page} />
              </ListItemButton>
          </ListItem>
          ))}       
      </List>
      </Box>
  );

  return (
      <div>
          <React.Fragment>
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
              {pagesList()}
          </Drawer>
          </React.Fragment>      
      </div>
  );
}

