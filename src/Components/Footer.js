import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import spotifyImage from "../assets/Spotify.png";
import YoutubeImage from "../assets/tube.png";
import FacebookImage from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer
      className="d-flex mt-5 p-20 "
      style={{ backgroundColor: "#56ccf2" }}
    >
      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Row>
          <Col>
            <h1> The Generics</h1>
          </Col>
          <Col
            className="d-flex align-items-center "
            style={{
              alignContent: "center",
              display: "flex",
              justifyItems: "right",
            }}
          >
            <a
              href="https://www.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={spotifyImage}
                style={{
                  width: "50px",
                  padding: "10px",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
                alt="Spotify"
                className="footer-logo"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeImage}
                style={{
                  width: "50px",
                  padding: "10px",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
                alt="YouTube"
                className="footer-logo"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookImage}
                style={{
                  width: "50px",
                  padding: "10px",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
                alt="Facebook"
                className="footer-logo"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
