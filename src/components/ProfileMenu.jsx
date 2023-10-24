import React from 'react';
import {Avatar, Divider, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import {deleteProfile} from "../features/profile/profileSlice";
import {useDispatch} from "react-redux";

const ProfileMenu = ({anchorEl, setAnchorEl}) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogOut = async () => {
    const response = await fetch("/api/auth/logout")
    const data = await response.json()
    console.log("data", data.message)
    dispatch(deleteProfile())
  }
  const open = Boolean(anchorEl);



  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem  onClick={handleClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem disabled onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem disabled onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem  disabled onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={LogOut}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
