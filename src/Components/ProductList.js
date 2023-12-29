import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import { Link } from "react-router-dom";

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
const ProductList = () => {
  return (
    <Container>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <Link to={`/store/product-detail/${index}`}>
              <Product product={product} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
