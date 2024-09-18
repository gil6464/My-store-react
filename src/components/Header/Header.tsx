import React from "react";
import "./Header.scss";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@hooks/useCart";
import { useCartDrawer } from "@hooks/useCartDrawer";

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const { toggleDrawer } = useCartDrawer();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My Store</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <Badge pill bg="danger" className="ml-2">
            {totalItems}
          </Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
