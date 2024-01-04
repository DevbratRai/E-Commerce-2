import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductDetails = ({ productsArr }) => {
  const param = useParams();
  console.log(param);
  const specificProduct = productsArr.find(
    (product) => product.id === param.productID
  );
  console.log(specificProduct);
  return (
    <Card style={{ width: "30%", placeItems: "flex-start" }}>
      <Card.Img variant="top" src={specificProduct.imageUrl} />
      <Card.Body>
        <Card.Title>{specificProduct.title}</Card.Title>
        <Card.Text>${specificProduct.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
