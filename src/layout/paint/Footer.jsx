import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box  bgcolor="#1976d2">
      <Container  lg={12} >
        <Box lg={12} display="flex" justifyContent="space-between" pt={3} pb={3}>
          <Grid container item lg={6} spacing={1}>
            <Grid item><FacebookIcon/></Grid>
            <Grid item><InstagramIcon/></Grid>
            <Grid item><TwitterIcon/></Grid>
            <Grid item><PinterestIcon/></Grid>
            <Grid item><WhatsAppIcon/></Grid>
            <Grid item><YouTubeIcon/></Grid>
          </Grid>
          <Box>
            <Typography component="h3" variant="h6" color="inherit">© Start, 2022. All rights reserved.</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
