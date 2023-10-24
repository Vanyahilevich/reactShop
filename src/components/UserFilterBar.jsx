import React, {useEffect, useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserBasketButton from "./UserBasketButton";
import ClearIcon from '@mui/icons-material/Clear';
import {useLocation, useNavigate} from "react-router-dom";
import UserSliderRange from "./forms/UserSliderRange";
import UserSelectPrice from "./forms/UserSelectPrice";
import UserSelectSize from "./forms/UserSelectSize";


const UserFilterBar = ({filter, setFilter}) => {
  const navigate = useNavigate()
  const createUrlQuery = (queryUrl) => {
    let url = Object.entries(queryUrl).reduce((acc, [key, value]) => {
      console.log(key, value)
      if (value === "") return acc
      return acc += `${key}=${value}&`

    }, "?")
    if (url.at(-1) === "&") url = url.slice(0, url.length - 1)
    navigate(url)
  }
  const [sort, setSort] = useState(filter.sort)
  const [size, setSize] = useState(filter.size)
  const [price, setPrice] = React.useState([filter.minPrice, filter.maxPrice]);
  console.log("filter.size", size)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const queryUrl = {
    size: "",
    sort: "",
    minPrice: "",
    maxPrice: "",
  }
  useEffect(() => {
    const querySort = queryParams.get("sort")
    const querySize = queryParams.get("size")
    const queryMinPrice = queryParams.get("minPrice")
    const queryMaxPrice = queryParams.get("maxPrice")
    if (querySort) {
      setSort(querySort)
      queryUrl.sort = querySort
    }
    if (querySize) {
      setSize(querySize)
      queryUrl.size = querySize
    }
    if (queryMinPrice) {
      setPrice(p => [queryMinPrice, p[1]])
      queryUrl.minPrice = queryMinPrice
    }
    if (queryMaxPrice) {
      setPrice(p => [p[0], queryMaxPrice])
      queryUrl.queryMaxPrice = queryMaxPrice
    }

  }, [location.search])
  const handleSearchProducts = () => {
    setFilter({
      sort: sort,
      size: size,
      minPrice: price[0],
      maxPrice: price[1]
    })
    createUrlQuery({
      sort: sort,
      size: size,
      minPrice: price[0],
      maxPrice: price[1]
    })
  }
  const handleReset = (event) => {
    setFilter({
      sort: "",
      size: "",
      minPrice: 0,
      maxPrice: 100,
    })
    navigate(`/products`)
  }


  return (
    <Grid item md={12} lg={12} sx={{
      position: "sticky",
      display: "flex",
      top: "0",
      zIndex: 1,
      paddingBottom: "16px",
      background: 'rgba(255,255,255,1)'

    }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <UserSelectPrice sort={sort} setSort={setSort}/>
        <UserSelectSize size={size} setSize={setSize}/>
        <UserSliderRange setPrice={setPrice} price={price}/>
        <Button
          size="medium"
          sx={{
            marginRight: "16px"
          }}
          endIcon={<SearchIcon/>}
          variant='contained'
          onClick={handleSearchProducts}>
          Search
        </Button>
        <Button
          size="medium"
          onClick={handleReset}
          endIcon={<ClearIcon/>}
          sx={{
            marginRight: "auto",
          }}>
          Reset filter
        </Button>
        <UserBasketButton/>
      </Box>
    </Grid>
  );
};

export default UserFilterBar;
