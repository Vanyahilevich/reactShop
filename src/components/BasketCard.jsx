import React from 'react';
import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import Counter from "./Counter";
import {
  useDeleteProductInBasketMutation,
  useUpdateBasketMutation
} from "../features/basket/basketApi";
import {Delete} from "@material-ui/icons";

const BasketCard = ({product}) => {
  const [updateBasket, {isLoading, isError}] = useUpdateBasketMutation()
  const [deleteProductInBasket, {}] = useDeleteProductInBasketMutation()
  const addCount = () => {
    updateBasket({id: product._id, operation: 1, size: product.size})
  }
  const minusCount = () => {
    updateBasket({id: product._id, operation: -1, size: product.size})
  }
  const deleteProduct = () => {
    deleteProductInBasket({productId: product._id, size: product.size})
  }

  return (

    <>
      <img
        style={{
          width: "100px",
          height: "100px"
        }}
        alt={product.description}
        src={"http://localhost:3000/" + product.imageUrl}/>
      <Box
        sx={{
          flexGrow: "1",
          paddingLeft: "16px"
        }}>
        <Typography>{product.title}</Typography>
        <Typography>{product.description}</Typography>
      </Box>
      <Typography pr={4}
                  sx={{
                    alignSelf: "center",
                    textAlign: "center"
                  }}
      >{product.size}</Typography>
      <Counter count={product.count} plusCount={addCount} minusCount={minusCount}/>

      <Typography
        sx={{
          minWidth: "150px",
          textAlign: "center",
        }}
      >
        {(product.price * product.count).toFixed(2) + " " + product.currencyId}</Typography>
      <Tooltip title="Delete product from basket">
        <IconButton
          onClick={deleteProduct}
        >
          <Delete/>
        </IconButton>
      </Tooltip>
    </>


  );
};

export default BasketCard;
