import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {ReactComponent as FirstPage} from "../../assets/FirstPaint.svg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {motion} from "framer-motion";

const theme = createTheme({
  palette: {
    cont: {
      light: "#FFFFFF",
      main: "#f2f1f0",
      dark: "#d6d5d4",
      contrastText: "#000000",
    }
  },
});
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.3}
  })
}
const FirstPaint = () => {

  return (
    <Box
      viewport={{ amount: 0.4 }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      sx={{
      background: "#1976d2",
      padding: {md: "50px 0", sm: "40px 0", xs: "20px 0"}
    }}>
      <Container maxWidth="lg">
        <Grid container
              sx={{
                display: 'flex',
                width: "100%",
                flexDirection: {md: "row-reverse", sm: "column"},
                height: "100%",
              }}>
          <Grid container item md={7} sm={12}
                sx={{display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
            <FirstPage/>
          </Grid>
          <Grid item md={5} sm={8} sx={{
            padding: {md: "40px 0 0", sm: "30px 0 0 ", xs: "20px 0 0"},
          }}>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}
              variant='h4'
              sx={{
                marginBottom: {md: "16px", sm: "12px", xs: "8px"},
                color: "#FAAD3A",
                fontWeight: 900,
              }}
            >WELCOME</Typography>

            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}
              sx={{
              fontSize: {md: "32  px", sm: "24px", xs: "18px"},
              marginBottom: {md: "16px", sm: "12px", xs: "8px"},
              color: "#FFFFFF"
            }}>Lorem ipsum dolor sit amet consectetur </Typography>

            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}
              sx={{
                flexGrow: "1",
                fontSize: {md: "16px", sm: "14px", xs: "14px"},
                marginBottom: {md: "24px", sm: "18px", xs: "12px"},
                color: "#FFFFFF"
              }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus
              iste?
            </Typography>
            <ThemeProvider theme={theme}>
              <Button
                variants={textAnimation}
                component={motion.button}
                custom={1}

                sx={{padding: "8px 64px"}} variant='contained' color="cont">Explore</Button>
            </ThemeProvider>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default FirstPaint;
