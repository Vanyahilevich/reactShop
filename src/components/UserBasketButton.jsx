import React, {useEffect} from 'react';
import {Badge, IconButton, Tooltip} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useGetAllProductInBasketQuery} from "../features/basket/basketApi";
import {setQuantityProductInBasket} from "../features/basket/basketSlice";

const UserBasketButton = (props) => {
  const dispatch = useDispatch()
  const {data, isLoading, isError} = useGetAllProductInBasketQuery()
  useEffect(() => {
    if(data){
      dispatch(setQuantityProductInBasket(data))
    }

  },[data])
  const countProductInBasket = useSelector(state => state.basket.quantityProductInBasket)

  const navigate = useNavigate()
  return (
    <Tooltip {...props} title="Basket" >
      <IconButton

        onClick={() => navigate('/products/basket')}
      >
        <Badge badgeContent={countProductInBasket} color="primary">
          <ShoppingCartIcon
            fontSize='large'
          />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default UserBasketButton;
