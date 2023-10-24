import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {useGetAllProductInBasketQuery} from "../../features/basket/basketApi";
import {useDispatch, useSelector} from "react-redux";
import {setQuantityProductInBasket} from "../../features/basket/basketSlice";
import ListProductCardInBasket from "../../components/ListProductCardInBasket";
import ListProductCardInBasketSkeleton
  from "../../components/skeleton/ListProductCardInBasketSkeleton";
import {useUpdateProductsMutation} from "../../features/products/productApi";

const BasketPage = () => {
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)
  const {data, isLoading, isError} = useGetAllProductInBasketQuery()
  const quantityProductInBasket = useSelector(state => state.basket.quantityProductInBasket)
  const [updateProducts, {}] = useUpdateProductsMutation()
  const [errorProductInStore, setErrorProductInStore] = useState([])
  const toOrderProducts = async (data) => {
    const res = await updateProducts(data)

    setErrorProductInStore(res.data)
    console.log("data", res.data)
  }

  useEffect(() => {
    if (data) {
      dispatch(setQuantityProductInBasket(data))
      const totalPrice = data.reduce((acc, item) => {
        return acc += item.count * item.price
      }, 0)
      setTotalPrice(totalPrice.toFixed(2).toString() + " €")
    }
  }, [data])
  return (
    <>
      <Box pt={4}>
        <Container maxWidth="lg">
          <Grid container display='flex'>

            <Grid item md={12} lg={12}  justifyContent="center">
              {quantityProductInBasket === 0 && !isLoading &&
                <Typography>Корзина пуста</Typography>}
            </Grid>
            {isLoading ? <ListProductCardInBasketSkeleton/> :
              <ListProductCardInBasket productInBasket={data} errorData={errorProductInStore}/>}
            <Grid item lg={12} md={12}  mt={2} display="flex" justifyContent="end" alignItems="center">
              <Typography mr={2} alignSelf="end"  variant="h5">Total: {totalPrice}</Typography>
              <Button
                onClick={() => toOrderProducts(data)}
                size="medium" variant="contained">Buy product</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BasketPage;
