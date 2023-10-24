import React from 'react';
import {Grid} from "@mui/material";
import ProductsCardSkeleton from "./ProductsCardSkeleton";

const ListProductsCardSkeleton = () => {
  return (
    <Grid container item spacing={2} direction="row" alignItems="stretch">
      <ProductsCardSkeleton/>
      <ProductsCardSkeleton/>
      <ProductsCardSkeleton/>
      <ProductsCardSkeleton/>
      <ProductsCardSkeleton/>
      <ProductsCardSkeleton/>
    </Grid>
  );
};

export default ListProductsCardSkeleton;
