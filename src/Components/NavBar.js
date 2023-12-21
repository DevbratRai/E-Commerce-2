import React from "react";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { useCart } from "../Context/CartContext";

const NavBar = ({ onClick }) => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">E-commerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex ml-5 justify-content-center">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
          </Nav>
          <Nav className="mr-2">
            <Nav.Link onClick={onClick}>
              Cart<Badge variant="info">{totalQuantity}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
