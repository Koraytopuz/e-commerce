import React from "react";
import type { IProduct } from "../model/IProduct";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    product: IProduct;
}

export default function Product({product}: Props) {
  return (
   <Card>
    <CardMedia sx={{height: 140,backgroundSize: "contain"}} image={`http://localhost:5021/images/${product.imageUrl}`} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="h2" color="text.secondary">{product.name}</Typography>
      <Typography variant="body2" color="secondary">{(product.price /100).toFixed(2) } ₺</Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small" startIcon={<AddShoppingCartIcon />} color="success">
        Add to Cart
      </Button>
      <Button variant="outlined" size="small" startIcon={<SearchIcon />} color="info">
        Details
      </Button>
    </CardActions>
   </Card>
  );
}
