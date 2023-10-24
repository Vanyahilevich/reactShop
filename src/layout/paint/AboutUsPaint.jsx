import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {ReactComponent as AboutUsImage} from "../../assets/aboutUS.svg";
import {motion} from "framer-motion";
const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.1}
  })
}
const imageAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}
const AboutUsPaint = () => {
  return (
    <Box
      viewport={{ amount: 0.4 }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}
                variants={imageAnimation}
                component={motion.div}
                custom={1}
                sx={{
                  overflow: "hidden",
                  objectFit: "contain",
                  marginBottom: {xs: "20px", md: "0"}
                }}>
            <AboutUsImage/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}
                sx={{
                  display: 'flex',
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingLeft: {md: "56px"}
                }}
          >
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}

              mb={1} variant="h4">Lorem Ipsum Dolor</Typography>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={2}
              mb={4}
              sx={{
                color: "#2125307F",
                textAlign: {sx: "center", md: 'left'},
              }}
              variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor expedita ipsum iusto magnam
              nostrum quo voluptate. Debitis et hic ipsa itaque neque praesentium repellendus. Asperiores et fugiat sint
              vel.</Typography>
            <Button
              variants={textAnimation}
              component={motion.button}
              custom={3}
              size='large'
              variant='contained'
              sx={{
                alignSelf: {xs: "stretch", sm: "start"}
              }}
            >Learn More</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPaint;
