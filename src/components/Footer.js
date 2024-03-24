import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { FaWhatsapp, FaLinkedinIn,FaEnvelope } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright" style={{margin:"auto"}}>
          <h3>Designed and Developed by Mathis T</h3>
        </Col>
        <Col md="4" className=" footer-body footer-copywright" style={{margin:"auto"}}>
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body ">
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mathismathis"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{ fontSize: "20px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MathisT488097"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter style={{ fontSize: "20px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mathis-t-794254222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{ fontSize: "20px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mathis_052/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram style={{ fontSize: "20px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/9344016498"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp style={{ fontSize: "20px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mathisit052@gmail.com"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope style={{ fontSize: "20px" }} />
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
