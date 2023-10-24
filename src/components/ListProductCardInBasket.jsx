import React from 'react';
import {Grid} from "@mui/material";
import BasketCard from "./BasketCard";

const ListProductCardInBasket = ({productInBasket, errorData}) => {
  console.log(productInBasket, errorData)

  return (
    <Grid container item spacing={2} direction="row" alignItems="stretch">
      {productInBasket && productInBasket.map((product) => (
        <Grid item md={12} lg={12}
              key={product._id + product.size}
              sx={{
                display: 'flex',
                alignItems: "center",

              }}>
          <BasketCard
            product={product}
            key={product._id + product.size}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListProductCardInBasket;
