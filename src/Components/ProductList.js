import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const ProductList = ({ products }) => {
  return (
    <Card>
      <Container className="mt-4">
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-4 mr-4">
              <div>
                <Card.Title className="text-center">{product.title}</Card.Title>
                <Card className="m-3">
                  <Card.Img variant="top" src={product.imageUrl} />
                </Card>
                <Card.Body className="d-flex">
                  <Card.Text className="mr-5">${product.price}</Card.Text>
                  <Button>Add to Cart</Button>
                </Card.Body>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Card>
  );
};

export default ProductList;
