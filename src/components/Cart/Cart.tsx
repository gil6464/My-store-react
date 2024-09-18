import { useCart } from "@hooks/useCart";
import React, { useContext } from "react";
import { ButtonGroup, ListGroup, Button } from "react-bootstrap";

const Cart: React.FC = () => {
  const { cartItems, addToCart, deleteFromCart, removeFromCart } = useCart();

  return (
    <div className="cart-dropdown">
      <ListGroup>
        {cartItems.length === 0 ? (
          <ListGroup.Item>Your cart is empty</ListGroup.Item>
        ) : (
          cartItems.map(item => (
            <ListGroup.Item key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  {item.title}(x{item.quantity})
                </span>
                <ButtonGroup>
                  <Button variant="secondary" onClick={() => addToCart(item)}>
                    +
                  </Button>
                  <Button variant="secondary" onClick={() => removeFromCart(item.id)}>
                    -
                  </Button>
                  <Button variant="danger" onClick={() => deleteFromCart(item.id)}>
                    Remove
                  </Button>
                </ButtonGroup>
              </div>
              <div>Price ${item.price}</div>
            </ListGroup.Item>
          ))
        )}
        {cartItems.length > 0 && (
          <Button variant="primary" className="mt-2">
            Proceed to Checkout
          </Button>
        )}
      </ListGroup>
    </div>
  );
};

export default Cart;
