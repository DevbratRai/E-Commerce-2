import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";

import ProductList from "./Components/ProductList";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">E-commerce Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />s
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto d-flex ml-5 justify-content-center">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Store</Nav.Link>
            </Nav>
            <Nav className="mr-2">
              <Nav.Link onClick={handleCartToggle}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showCart && <Cart cartItems={cartElements} onHide={handleCartToggle} />}

      <ProductList products={productsArr} />
    </>
  );
}

export default App;
