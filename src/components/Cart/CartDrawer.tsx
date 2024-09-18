import React from "react";
import { Offcanvas, ListGroup, Button, ButtonGroup } from "react-bootstrap";
import { useCartDrawer } from "@hooks/useCartDrawer";
import { useCart } from "@hooks/useCart";

const CartDrawer: React.FC = () => {
  const { addToCart, cartItems, deleteFromCart, removeFromCart } = useCart();
  const { isDrawerOpen, closeDrawer } = useCartDrawer();

  return (
    <Offcanvas show={isDrawerOpen} onHide={closeDrawer} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {cartItems.length === 0 ? (
            <ListGroup.Item>Your cart is empty</ListGroup.Item>
          ) : (
            cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    {item.title} (x{item.quantity})
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
                <div>Price: ${item.price}</div>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
        {cartItems.length > 0 && (
          <Button variant="primary" className="mt-2">
            Proceed to Checkout
          </Button>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartDrawer;
