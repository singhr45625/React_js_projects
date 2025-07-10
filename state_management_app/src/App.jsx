import React from "react";
import { CartProvider } from  "./CartContext";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";

function App () {
    return (
        <CartProvider>
            <Header />
            <ProductPage />
        </CartProvider>
    );
};

export default App;