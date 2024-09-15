import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <p>Cart is loading...</p>;
  }

  const { cartItems, removeFromCart } = cartContext;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} (x{item.quantity}) - ${item.price * item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: {totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
