import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaWhatsapp, FaLinkedinIn,FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a qualified and professional Python developer with three years of experience in Data Science and web development. Strong creative and analytical skills. Team player with an eye for detail.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python</b>
              </i>
              <br />
              <br />
              My field of interest lies in building new
              <i>
                <b className="purple"> Web Technologies and Products</b>
              </i>
              , with expertise in areas related to <b className="purple">Data Science</b> and <b className="purple">Web Development</b>.
              <br />
              <br />
              I have hands-on experience with technologies such as Bootstrap, React.js, Django (advanced), Django Rest Framework, Selenium, Beautiful Soup, PySpark (advanced), Pandas, SQL,EMR,and TensorFlow.
              <br />
              <br />
              Besides technical skills, I have experience working with AWS services like Amazon EC2, Lambda, Athena, Amazon Redshift, EMR, AWS Glue, SQS, SNS, CloudWatch, and Route 53. I have also contributed to managing Apache Airflow for task scheduling and automation.
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mathismathis"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MathisT488097"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mathis-t-794254222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mathis_052/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/9344016498"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mathisit052@gmail.com"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Home2;
