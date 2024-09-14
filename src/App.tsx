import React from "react";
import "./App.css";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import ProductList from "./components/productList";
import Header from "./components/Header";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />
        <Cart />
        <ProductList />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
