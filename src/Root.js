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

  const addDataHandler = async (data) => {
    const response = await fetch(
      "https://e-commerce-2-1227f-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await response.json();
    console.log(resData);
  };

  return (
    <>
      <NavBar onClick={handleCartToggle} onAddData={addDataHandler} />
      {showCart && <Cart show={showCart} onHide={handleCartToggle} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
