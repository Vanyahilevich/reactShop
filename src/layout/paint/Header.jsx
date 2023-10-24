import React, {useEffect} from 'react';
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import {Link, useLocation} from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import MainLogo from "../../components/MainLogo";
import UserLink from "../../components/UserLink";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../features/profile/profileSlice";
import UserAvatar from "../../components/UserAvatar";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SignUpLink from "../../components/SignUpLink";
import SignInLink from "../../components/SignInLink";

const Header = () => {
  const params = useLocation()



  const profile = useSelector((state) => state.profile)


  let button
  switch (params.pathname.toLowerCase()) {
    case "/signin":
      button = <SignUpLink/>
      break;
    default:
      button = <SignInLink/>
  }


  return (
    <AppBar position='static'>
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: {md: "10px"},
            paddingBottom: {md: "10px"},
            height: "70px"
          }}
        >
          <UserLink to="/">
            <MainLogo/>
          </UserLink>
          <Box sx={{display: 'flex'}}>
            <UserLink
              title='Products'
              link="/products"
              mr={3}
            />

            {
              profile.email
                ? <UserAvatar/>
                : button
            }
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
  );
};

export default Header;
