import React, {Suspense, useEffect} from 'react';
import Header from "./paint/Header";
import Footer from "./paint/Footer";
import {Outlet} from "react-router";
import {Box} from "@mui/material";
import LoadingFullWindow from "../components/LoadingFullWindow";
import {useDispatch} from "react-redux";
import {update} from "../features/profile/profileSlice";

const Layout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/auth/auth")
      const data = await response.json()
      dispatch(update(data))
    })()


  }, [])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        height: "100vh"
      }}>
      <header>
        <Header/>
      </header>
      <main style={{flexGrow: 1}}>
        <Suspense fallback={<LoadingFullWindow/>}>
          <Outlet/>
          </Suspense>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Box>
);
};

export default Layout;
