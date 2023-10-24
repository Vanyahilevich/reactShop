import React, {useState} from 'react';
import {Container, Grid,} from "@mui/material";
import UserFilterBar from "../../components/UserFilterBar";
import {useGetAllProductQuery} from "../../features/products/productApi";
import ListProductsCardSkeleton from "../../components/skeleton/ListProductsCardSkeleton";
import ListProductsCard from "../../components/ListProductsCard";

const ProductsPage = () => {
  const [filter, setFilter] = useState({
    size: "",
    sort: "",
    minPrice: 0,
    maxPrice: 100,
  })
  const {data, isError, isLoading} = useGetAllProductQuery(filter)

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} pt={5} pb={5}>
        <Grid container item md={12} lg={12} spacing={2}>
          <UserFilterBar setFilter={setFilter} filter={filter}/>
          {isLoading ? <ListProductsCardSkeleton/> : <ListProductsCard products={data}/>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsPage;
