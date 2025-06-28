import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import ProductList from "./ProductList";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import React from "react";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("http://localhost:5021/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <>
        <CssBaseline />

            <Header />
            <Container>
            <ProductList products={products} addProduct={() => {}} />
            </Container>
        </>
    )
}

export default App;