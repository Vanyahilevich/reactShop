import React from 'react';
import {Box, Grid, Paper, Skeleton} from "@mui/material";

const ProductsCardSkeleton = () => {
  return (

    <Grid item md={4} lg={4}>
      <Paper
        elevation={1}
        sx={{
        display: "flex",
        flexDirection: "column",
        height: "564px"
      }}>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "380px",
            alignSelf: "center",
            marginBottom: "24px",
          }}
        />
        <Box sx={{
          padding: "0px 16px 0px"
        }}>
          <Skeleton variant="h1" sx={{marginBottom: "8px"}}/>
          <Skeleton variant="h2" width="20%" sx={{marginBottom: "8px"}}/>
          <Skeleton variant="h5" width="70%" sx={{marginBottom: "8px"}}/>
          <Skeleton
            variant="rectangular"
            sx={{
              height: "30px",
              marginBottom: "8px"
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: "35%",
              height: "32px",
              marginBottom: "8px"
            }}
          />
        </Box>
      </Paper>
    </Grid>
  )
    ;
};

export default ProductsCardSkeleton;
