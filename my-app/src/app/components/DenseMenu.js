import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Add from '@mui/icons-material/Add';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Transport & Manutention</ListItemText>
        </MenuItem>
      <Divider variant='middle'/>
        <MenuItem>
          <ListItemText inset>CAMION-BENNE</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>VEHICULE LEGER</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>REMORQUE</ListItemText>
        </MenuItem>
        <MenuItem>
            <ListItemText inset>MATERIEL DE DEMENAGEMENT</ListItemText>
        </MenuItem>
        <MenuItem>
            <ListItemText inset>ELEVATION DE CHARGES</ListItemText>
        </MenuItem>
        <Divider variant='middle'/>
        <MenuItem>
          Terrassement & routes  
          <ListItemIcon>
            <Add />
          </ListItemIcon>
        </MenuItem>
        <Divider variant='middle'/>
        <MenuItem>
        Elévation & travail en hauteur
        <ListItemIcon>
            <Add />
          </ListItemIcon>
        </MenuItem>
        <Divider variant='middle'/>
        <MenuItem>
        Démolition & gros œuvre
        <ListItemIcon>
            <Add />
          </ListItemIcon>
        </MenuItem>
        <Divider variant='middle'/>
      </MenuList>
    </Paper>
  );
}
