import React from 'react';
import {Box, Grid, Skeleton} from "@mui/material";

const BasketProductSkeleton = () => {
  return (
    <Grid item md={12} lg={12} pr={0.5}
          sx={{
            display: 'flex',
            alignItems: "center",

          }}>
      <Skeleton variant="rectangular" width={100} height={100}
                sx={{marginRight: "16px"}}/>
      <Box sx={{marginRight: "auto"}}>
        <Skeleton variant="rectangular" width={140} height={20}
                  sx={{marginBottom: "8px"}}/>
        <Skeleton variant="rectangular" width={100} height={20}/>
      </Box>
      <Skeleton variant="rectangular" width={40} height={20} sx={{marginRight: "28px"}}/>
      <Skeleton variant="rectangular" width={20} height={20} sx={{marginRight: "16px"}}/>
      <Skeleton variant="rectangular" width={40} height={20} sx={{marginRight: "16px"}}/>
      <Skeleton variant="rectangular" width={20} height={20} sx={{marginRight: "36px"}}/>
      <Skeleton variant="rectangular" width={100} height={20} sx={{marginRight: "32px"}}/>
      <Skeleton variant="rectangular" width={20} height={20} sx={{marginRight: "8px"}}/>
    </Grid>
  );
};

export default BasketProductSkeleton;
