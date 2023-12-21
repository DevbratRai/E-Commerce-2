import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";

import ProductList from "./Components/ProductList";
import { CartProvider } from "./Context/CartContext";
import Footer from "./Components/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };
  return (
    <CartProvider>
      <NavBar onClick={handleCartToggle} />
      {showCart && <Cart show={showCart} onHide={handleCartToggle} />}

      <ProductList />

      <Footer />
    </CartProvider>
  );
}

export default App;
