import React from 'react';
import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import Tala from "../../assets/PegLegge.svg";
import {motion} from "framer-motion";

const talents = [
  {
    position: "CEO",
    name: "Peg Legge",
    image: `${Tala}`
  },
  {
    position: "CEO",
    name: "Peg Legge",
    image: `${Tala}`
  },
  {
    position: "CEO",
    name: "Peg Legge",
    image: `${Tala}`
  },
  {
    position: "CEO",
    name: "Peg Legge",
    image: `${Tala}`
  },
]
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
const cardAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.1}
  })
}
const TalentsPaint = () => {
  return (
    <Box
      viewport={{amount: 0.3}}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      pb={12}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Grid
            item
            xs={12} md={8}
            sx={{
              display: 'flex',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={1}
              mb={1} sx={{color: "#FAAD3A", fontWeight: 900}} variant="h4">Team</Typography>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={2}
              mb={1} sx={{alignSelf: 'center'}} variant="h4">Our Talents</Typography>
            <Typography
              variants={textAnimation}
              component={motion.h4}
              custom={3}
              mb={4} sx={{color: "#2125307F"}} variant="h6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet,
              consectetur
              adipisicing elit. Aliquam amet, aperiam
              architecto atque ea eius fuga inventore magnam, nobis provident quas quidem recusandae
              sed similique
              sit
              sunt tempora totam. Eveniet!
            </Typography>
          </Grid>
          <Grid
            viewport={{amount: 0.3}}
            component={motion.div}
            initial="hidden"
            whileInView="visible"v
            container
            spacing={3}
            columns={{xs: 4, sm: 8, md: 12, lg: 12}}
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{overflow: 'hidden'}}
          >
            {talents.map((item, index) => (
              <Grid
                variants={cardAnimation}
                component={motion.h4}
                custom={index + 4}

                item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
                <Card>
                  <Box pt={2.5} pb={2.5} pl={5} pr={5}>
                    <CardMedia
                      component="img"
                      alt={`photo ${item.name}`}
                      height="175px"
                      width="175px"
                      src={Tala}
                      style={{objectFit: "contain"}}
                    />
                    <CardContent>
                      <Typography mb={2} component="h3" variant="h5"
                                  color="inherit">{item.name}</Typography>
                      <Typography component="h3" variant="h6"
                                  color="inherit">{item.position}</Typography>
                    </CardContent>
                  </Box>

                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
</Box>
)
  ;
};

export default TalentsPaint;
