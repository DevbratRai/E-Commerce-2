import { Container, Navbar, Col, Card } from "react-bootstrap";
import { Row, Image, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Row xs={2} className="d-flex justify-content-center flex-column">
          {productsArr.map((item) => {
            return (
              <Col className="d-flex justify-content-center flex-row">
                <Card className="width-100">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>

                    <Image src={item.imageUrl} rounded />
                    <Card.Text>{item.price}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
