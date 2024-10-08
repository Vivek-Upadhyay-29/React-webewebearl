import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (


      <Container>
        <Row className="justify-content-between">
          <Col md={4}>
            <img
              src="src/photos/Logo.png"
              width="80"
              height="40"
              className="footer-logo"
            />
            <p style={{ fontWeight: "bold", color: "#808080" }}>
              Savor the artistry where <br/> every dish is a culinary <br/> masterpiece.
            </p>
          </Col>
          <Col md={2}>
            <h4 style={{ fontWeight: "bold", color: "black",marginRight:"20px" }}>Useful Links</h4>
            <ul>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h4 style={{ fontWeight: "bold", color: "black"  }}>Main Menu</h4>
            <ul>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Menus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Reservation
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4 style={{ fontWeight: "bold", color: "black" }}>Contact Us</h4>
            <p style={{ color: "#808080" }}>example@email.com</p>
            <p style={{ color: "#808080" }}>+64 958 248 966</p>
            <p style={{ fontWeight: "bold", color: "#808080" }}>Social Media</p>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </Col>
        </Row>

        <Row className="mt-3 justify-content-center">
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
        
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              className="ms-3"
            >
              <div className="social-icon-circle">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social-icon"
                  style={{ color: "#5ce65c", fontSize: "34px" }}
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/your-instagram-account"
              target="_blank"
              className="ms-3"
            >
              <div className="social-icon-circle">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-icon"
                  style={{ color: "#5ce65c", fontSize: "34px" }}
                />
              </div>
            </a>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              className="ms-3"
            >
              <div className="social-icon-circle">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social-icon"
                  style={{ color: "#5ce65c", fontSize: "34px" }}
                />
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/your-youtube-channel"
              target="_blank"
              className="ms-3"
            >
              <div className="social-icon-circle">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="social-icon"
                  style={{ color: "#5ce65c", fontSize: "34px" }}
                />
              </div>
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p style={{ fontWeight: "bold", color: "#808080" }}>
              &copy; 2023 Dscode | All rights reserved
            </p>
          </Col>
        </Row>
      </Container>

  );
};

export default Footer;
