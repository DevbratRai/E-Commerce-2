import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const NavBar = ({ onClick, onAddData }) => {
  const { cart } = useCart();
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [showHeaderButton, setShowHeaderButton] = useState(true);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      style={{
        textAlign: "center",
        paddingBottom: "30px",
        background: "#777",
        color: "white",
        display: "block",
      }}
    >
      <ul
        style={{
          display: "flex",
          padding: "10px",
          fontSize: "18px",
          fontWeight: "100",
          justifyContent: "center",
          listStyleType: "none",
          borderBottom: "0.1rem solid white",
          position: "fixed",
          top: 0,
          background: "black",
          width: "100%",
          zIndex: 1,
        }}
      >
        <li style={{ margin: "0px 40px" }}>
          <NavLink
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowCartIcon(false);
              setShowHeaderButton(true);
            }}
          >
            Home
          </NavLink>
        </li>
        <li style={{ margin: "0px 40px" }}>
          <NavLink
            to="/store"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowCartIcon(true);
              setShowHeaderButton(false);
            }}
          >
            Store
          </NavLink>
        </li>
        <li style={{ margin: "0px 40px" }}>
          <NavLink
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowCartIcon(false);
              setShowHeaderButton(false);
            }}
          >
            About
          </NavLink>
        </li>
        <li style={{ margin: "0px 40px" }}>
          <NavLink
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Login
          </NavLink>
        </li>
        <li style={{ margin: "0px 40px" }}>
          <NavLink
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowCartIcon(false);
              setShowHeaderButton(false);
            }}
          >
            Contact US
          </NavLink>
        </li>
        {showCartIcon && (
          <Button
            style={{
              border: "2px solid #56CCF2",
              borderRadius: "7px",
              padding: "2px 10px",
              position: "absolute",
              right: "2%",
            }}
            onClick={onClick}
          >
            cart
            <span
              style={{
                position: "absolute",
                color: "#56CCF2",
                fontSize: "20px",
                top: "-10px",
                right: "-15px",
              }}
            >
              {totalQuantity}
            </span>
          </Button>
        )}
      </ul>
      <h1
        style={{
          padding: "40px",
          fontSize: "100px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        The Generics
      </h1>
      {showHeaderButton && (
        <>
          <button
            style={{
              display: "block",
              border: "1px solid #56ccf2",
              padding: "15px 30px",
              fontSize: "23px",
              fontWeight: "200",
              margin: "10px auto",
              background: "inherit",
              cursor: "pointer",
              color: "white",
            }}
          >
            Get our Latest Album
          </button>
          <button
            style={{
              display: "block",
              border: "2px solid #56ccf2",
              borderRadius: "50%",
              padding: "20px",
              fontSize: "30px",
              fontWeight: "200",
              margin: "20px auto",
              background: "inherit",
              cursor: "pointer",
              color: "#56ccf2",
            }}
          >
            ▶
          </button>
        </>
      )}
    </header>
  );
};

export default NavBar;
