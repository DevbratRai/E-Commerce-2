import React from "react";
import { Modal, Container, Row, Col, Card, Button } from "react-bootstrap";

const Cart = ({ cartItems, onHide }) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cartItems.map((item, index) => (
            <Row key={index} className="mb-3">
              <Col md={4}>
                <Card.Img src={item.imageUrl} alt={item.title} />
              </Col>
              <Col md={8}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
