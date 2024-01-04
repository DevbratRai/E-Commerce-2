import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductList = ({ productsArr }) => {
  return (
    <Container>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={product.id} md={4} className="mb-4">
            <Link to={`/store/${product.id}`}>
              <Product product={product} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
