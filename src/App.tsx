import React, { useState } from "react";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "@contexts/ProductContext";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import ProductList from "@components/ProductList/productList";
import { Button } from "react-bootstrap";
import { CartDrawerProvider } from "@contexts/CartDrawerContext";
import CartDrawer from "@components/Cart/CartDrawer";

const App: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <CartDrawerProvider>
        <Header />
        <div className="container">
          <ProductProvider>
            <ProductList />
          </ProductProvider>
          <CartDrawer />
        </div>
      </CartDrawerProvider>
    </CartProvider>
  );
};

export default App;
