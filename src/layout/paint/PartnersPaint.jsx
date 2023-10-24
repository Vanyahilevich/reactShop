import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {ReactComponent as GoogleIcon} from "../../assets/google.svg"
import {ReactComponent as FacebookIcon} from "../../assets/facebook.svg"
import {ReactComponent as MicrosoftIcon} from "../../assets/microsoft.svg"
import {ReactComponent as AirbnbIcon} from "../../assets/airbnb.svg"
import {ReactComponent as SpotifyIcon} from "../../assets/spotify.svg"
import {motion} from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.1}
  })
}
const PartnersPaint = () => {
  return (
    <Box
      viewport={{ amount: 0.4 }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
    >
      <Container maxWidth="lg">
        <Grid container justifyContent='center'>
          <Grid item md={8} display='flex' flexDirection='column' alignItems="center" justifyContent="center">
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}
              mb={1} sx={{color: "#FAAD3A", fontWeight: 900}} variant="h4">Partners</Typography>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={2}
              mb={1} sx={{ alignSelf: 'center'}} variant="h4">Lorem Ipsum Dolor</Typography>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={3}
              mb={4} sx={{color: "#2125307F"}} variant="h6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aliquam amet, aperiam
              architecto atque ea eius fuga inventore magnam, nobis provident quas quidem recusandae sed similique sit
              sunt tempora totam. Eveniet!
            </Typography>
          </Grid>
          <Grid
            variants={textAnimation}
            component={motion.div}
            custom={4}

            container item
                mb={5}
                columns={{xs: 8, sm: 12, md: 12, lg: 12}}
                spacing={4}
                alignItems='center'
                sx={{
                  justifyContent: {md: "space-between"}
                }}
          >
            <Grid item xs={4} sm={4} md={2.4} display='flex' justifyContent='center'><GoogleIcon/></Grid>
            <Grid item xs={4} sm={4} md={2.4} display='flex' justifyContent='center'><MicrosoftIcon/></Grid>
            <Grid item xs={4} sm={4} md={2.4} display='flex' justifyContent='center'><AirbnbIcon/></Grid>
            <Grid item xs={4} sm={4} md={2.4} display='flex' justifyContent='center'><FacebookIcon/></Grid>
            <Grid item xs={4} sm={4} md={2.4} display='flex' justifyContent='center'><SpotifyIcon/></Grid>
          </Grid>
          <Grid item xs={12} display='flex' flexDirection='column'   >
            <Button
              variants={textAnimation}
              component={motion.button}
              custom={5}
              size="large"
              variant='contained'
              sx={{
                alignSelf: {xs: "stretch", sm: "center", }
              }}
            >Learn More</Button>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default PartnersPaint;
