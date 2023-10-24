import React, {useState} from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAddProductToBasketMutation} from "../features/basket/basketApi";
import SizeRadioGroup from "./forms/SizeRadioGroup";
import styles from "./cardProduct.module.scss"
import {usePrefetch} from "../features/products/productApi";
import LazyLoad from 'react-lazyload';

const CardProduct = ({product}) => {

  const [addProductToBasket, {isLoading, isError}] = useAddProductToBasketMutation()
  const [size, setSize] = useState(null);
  const navigate = useNavigate()
  const prefetchPage = usePrefetch("getOneProduct")
  const result = []
  let count = 0
  for (const key in product.size) {
    result.push({size: key, count: product.size[key]})
    count += product.size[key]
  }

  return (
    <Card
      onMouseEnter={() => prefetchPage(product._id)}
      className={styles.card}
    >
      <LazyLoad height={300}>
        <CardMedia
          className={styles.cardMedia}
          alt="green iguana"
          onClick={() => navigate(`/products/${product._id}`)}
          image={product.imageUrl ? "http://localhost:3000/" + product.imageUrl : ""}
        />
      </LazyLoad>
      <CardContent className={styles.cardContent}>
        <Tooltip
          onClick={() => navigate(`/products/${product._id}`)}
          title={product.title}>
          <Typography className={styles.title}>{product.title}</Typography>
        </Tooltip>
        <Typography>{product.price}{product.currencyFormat}</Typography>
        <Typography mb={1} variant="body2" color="text.secondary">
          {product.style} - {product.description}
        </Typography>
        {count === 0
          ? <Typography>Нет в наличии</Typography>
          : <SizeRadioGroup size={size} setSize={setSize} result={result}/>
        }
      </CardContent>
      <CardActions>
        <Button
          disabled={(count === 0 || !size)}
          onClick={() => addProductToBasket({product, size})}
          size="small">Add to basket</Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
