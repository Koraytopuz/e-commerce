import { useEffect, useState } from 'react';
import type { IProduct } from '../model/IProduct';
import Header from './Header';
import ProductList from './ProductList';
import { Container, CssBaseline } from '@mui/material';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
useEffect(()=>{
  fetch('https://localhost:5021/api/Products').then(response => response.json()).then(data => setProducts(data));
},[]);

  function addProduct() {
    setProducts([...products,
      { id:Date.now(),
      name:"Product4" ,
      price: 4000,
      isActive: true,
      description: "Product4",
      imageUrl: "https://via.placeholder.com/150",
      stock: 10,
    },
    ]);
    console.log("rendered");
  }
  return (
    <>
    <CssBaseline/>
      <Header/>
      <Container>
        <ProductList products={products} addProduct={addProduct} />
      </Container>
    
    </>
  );
}


export default App;