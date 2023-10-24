import React from 'react';
import BasketProductSkeleton from "./BasketProductSkeleton";
import {Grid} from "@mui/material";

const ListProductCardInBasketSkeleton = () => {
  return (
    <Grid container item spacing={2} direction="row" alignItems="stretch">
      <BasketProductSkeleton/>
      <BasketProductSkeleton/>
      <BasketProductSkeleton/>
      <BasketProductSkeleton/>
    </Grid>
  );
};

export default ListProductCardInBasketSkeleton;
