import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">T Mathis </span>
            from <span className="purple"> India.</span>
            <br />
            <br />
            I am a qualified and professional <span className="purple">Python developer</span> with three
            years of experience in <span className="purple">Data science</span> and <span className="purple">web development</span>. Strong
            creative and analytical skills. Team player with an eye for detail.

            <br />
            <br />
           
            Experience:
            <ul style={{ listStyleType: "none" }}>

            <li>
                <ImPointRight /> <span className="purple">DataTerrain India Private Ltd</span> - Software Developer
              </li>
              <li>
                <ImPointRight /> <span className="purple">Zinnov Management Consulting Pvt Ltd</span> - Python Developer
              </li>
           
              <li>
                <ImPointRight /> <span className="purple">Clovion Tech Solutions Pvt. Ltd</span> - Python Developer
              </li>
            </ul>
            Education:
            <ul style={{ listStyleType: "none" }}>
              <li>
                <ImPointRight /> <span className="purple">Bachelor of Engineering</span> - Velammal Institute
                Of Technology (2017 - 2021)
              </li>
              <li>
                <ImPointRight /> <span className="purple">Higher Secondary School Certificate</span> - Carmel
                Higher Secondary School (2015 - 2017)
              </li>
              <li>
                <ImPointRight /> <span className="purple">Secondary School Leaving Certificate</span> - St.
                Joseph High School (2005 - 2015)
              </li>
            </ul>
            Contact:
            <ul style={{ listStyleType: "none" }}>
              <li>
                <ImPointRight /> <span className="purple">Phone:</span> 9344016498
              </li>
              <li>
                <ImPointRight /> <span className="purple">Email:</span> mathisit052@gmail.com
              </li>
              <li>
                <ImPointRight /> <span className="purple">Address:</span> 103/1, Soorapallam, Saral Post,
                Kanya Kumar 629203, Tamil Nadu, India.
              </li>
              <li>
                <ImPointRight /> <span className="purple">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/mathis-t-794254222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mathis-t-794254222
                </a>
              </li>
              <li>
                <ImPointRight /> <span className="purple">Github:</span>{" "}
                <a
                  href="https://github.com/mathismathis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mathismathis
                </a>
              </li>
            </ul>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">T Mathis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
