import React from "react";
import { Modal, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../Context/CartContext";

const Cart = ({ show, onHide }) => {
  const { cart } = useCart();
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title> Cart</Modal.Title>
        <Button onClick={onHide}>❌</Button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cart.map((item, index) => (
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
