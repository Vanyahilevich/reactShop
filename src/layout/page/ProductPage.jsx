import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {useGetOneProductQuery} from "../../features/products/productApi";
import LoadingFullWindow from "../../components/LoadingFullWindow";
import SwiperImageProduct from "../../components/SwiperImageProduct";
import {useDispatch} from "react-redux";
import ListProductsCard from "../../components/ListProductsCard";
import UserBasketButton from "../../components/UserBasketButton";

const ProductPage = () => {
  const {id} = useParams()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка
    });
  }, [id])
  const {data, error, isLoading} = useGetOneProductQuery(id)
  return (
    <>
      {isLoading
        ? <LoadingFullWindow/>
        :
        <Box sx={{height: "100%"}}>
          <Container maxWidth="lg">
            <Grid container rowSpacing={10}>
              <Grid item lg={7} md={5} mt={2}>
                <SwiperImageProduct data={data}/>
              </Grid>
              <Grid item lg={5} md={7} pl={4}
                    sx={{
                      display: "flex",
                      flexDirection: 'column',
                      justifyContent: "center",
                      minHeight: "100%",
                      alignItems: "center"
                    }}
              >
                <UserBasketButton sx={{
                  alignSelf: "end",
                  marginTop: "-4px"
                }}/>
                <Typography sx={{alignSelf: "start"}} mb={4} variant="h4">{data.title}</Typography>
                <Typography mb={6} color="#1976d2"
                            variant="h4">{data.price} {data.currencyFormat}</Typography>
                <Button
                  onClick={() => {
                  }}
                  sx={{
                    alignSelf: "stretch"
                  }}
                  size="large" variant="contained">Add to basket</Button>

                <Typography sx={{alignSelf: "start"}} mt={6}
                            variant="subtitle1"><strong>{data.description}</strong> Lorem ipsum
                  dolor sit
                  amet, consectetur adipisicing elit. Aperiam assumenda at beatae delectus
                  doloremque illo itaque molestias, optio quod saepe soluta tempora totam veritatis
                  voluptas voluptates? Adipisci earum error recusandae?</Typography>

              </Grid>
              <Grid item lg={12} md={12}>
                <Typography mb={4} variant="h4">Похожие товары</Typography>
                <ListProductsCard/>
              </Grid>
            </Grid>

          </Container>
        </Box>
      }
    </>
  )
    ;
};

export default ProductPage;
