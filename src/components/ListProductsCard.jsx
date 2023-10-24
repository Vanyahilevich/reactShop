import React from 'react';
import {Grid} from "@mui/material";
import CardProduct from "./CardProduct";

const ListProductsCard = ({products}) => {
  return (
    <Grid container item spacing={2} direction="row" alignItems="stretch">
      {products && products.map((product) => (
        <Grid item md={4} lg={4}>
          <CardProduct product={product} key={product.id}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListProductsCard;
