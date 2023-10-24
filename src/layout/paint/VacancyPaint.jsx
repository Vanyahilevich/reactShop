import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {ReactComponent as VacancyImage} from "../../assets/vacancy.svg";
import {motion} from "framer-motion";


const VacancyPaint = () => {
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
  const imageAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2}
    })
  }
  return (
    <Box
      viewport={{ amount: 0.4 }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
    >
      <Container maxWidth="lg">
        <Grid

          container
          sx={{
            flexDirection: {xs: "column-reverse", md: "row"}
          }}


        >
          <Grid
            item
            xs={12} sm={12} md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}
              mb={2}  variant="h4" color="inherit">Lorem Ipsum Dolor</Typography>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={2}
              variant="h6"
              mb={4}
              sx={{
                color: "#2125307F",
                textAlign: {sx: "center", md: 'left'},
              }}>

              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Distinctio dolor expedita ipsum iusto magnam nostrum quo voluptate. Debitis et hic ipsa
              itaque neque praesentium repellendus. Asperiores et fugiat sint vel.</Typography>
            <Button
              variants={textAnimation}
              component={motion.button}
              custom={3}
              variant='contained'
              size='large'
              sx={{
                alignSelf: {sm: "start"}
              }}
            >Learn More</Button>
          </Grid>
          <Grid
            variants={imageAnimation}
            component={motion.div}
            custom={1}
            item
            xs={12} sm={12} md={6}
            sx={{
              overflow: "hidden",
              objectFit: "contain",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: {xs: "20px", md: "0"},
            }}
          >
            <VacancyImage/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VacancyPaint;
