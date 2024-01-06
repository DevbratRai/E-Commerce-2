import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/auth-context";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const authCtx = useContext(AuthContext);
  console.log(authCtx.email);

  const handleAddToCart = async () => {
    addToCart({ ...product, quantity: 1 });

    const sanitizedEmail = authCtx.email.replace(/[@.]/g, "");
    try {
      const res = await axios.post(
        `https://crudcrud.com/api/a7019f4b5e3a415f99236869ff9f62fd/cart${sanitizedEmail}`,
        { ...product, quantity: 1 }
      );
    } catch (error) {
      console.error("Error adding product to the cart:", error);
    }
  };

  return (
    <Card>
      <Link to={`/store/${product.id}`}>
        <Card.Img variant="top" src={product.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
