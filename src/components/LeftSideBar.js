import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import logo from "../assets/logo.PNG"



export default function LeftSideBar() {
  return (
    <Paper sx={{ width: "20%", maxWidth: '20%' }}>
        <MenuItem>
         <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="logo" width="200px"></img>
        </MenuItem>
        <MenuItem/>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon  />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SearchIcon  />
          </ListItemIcon>
          <ListItemText>Search</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
