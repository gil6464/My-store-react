import React, { useContext } from "react";
import { Product } from "../../services/ProductService";
import { CartContext } from "../../contexts/CartContext";
import { Card, Button } from "react-bootstrap";
import styles from "./ProductItem.module.scss";

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
    <Card className={styles["card-custom"]}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <Button className={styles["btn-custom"]} onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default React.memo(ProductItem);
