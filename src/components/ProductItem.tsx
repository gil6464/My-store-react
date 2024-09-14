import React, { useContext } from "react";
import { Product } from "../services/ProductService";
import { CartContext } from "../contexts/CartContext";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <p>Loading...</p>;
  }

  const { addToCart } = cartContext;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.title} width="100" />
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default React.memo(ProductItem);
