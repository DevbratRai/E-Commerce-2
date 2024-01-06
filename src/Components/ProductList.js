import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";

const ProductList = ({ productsArr }) => {
  return (
    <Container>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={product.id} md={4} className="mb-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
