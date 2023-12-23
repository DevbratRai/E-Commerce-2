import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "./Components/Cart";

const Root = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <NavBar onClick={handleCartToggle} />
      {showCart && <Cart show={showCart} onHide={handleCartToggle} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
