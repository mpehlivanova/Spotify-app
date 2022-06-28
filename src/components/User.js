import { Box, ClickAwayListener, Grow, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function User(props) {
    const[open, setOpen] =React.useState(false);
    const anchorRef = React.useRef(null);
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        } else if (event.key === 'Escape') {
          setOpen(false);
        }
      }
    const handleClose = () => setOpen(false)
    
  return (
    <Box
    display="flex"
    flexDirection="row"
    paddingRight="5%"
    alignItems="center">
        <Box
         display="flex"
         flexDirection="row"
         paddingRight="5%"
         alignItems="center"
     
    >
      <AccountCircleIcon fontSize="large" sx={{mr:1}} />

      <ListItemText>User</ListItemText>
      <ArrowDropDownIcon  sx={{ml:2}} open={open}/>
    </Box>
    <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>

  );
}
