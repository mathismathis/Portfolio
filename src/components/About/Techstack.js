import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiReact, DiNodejs, DiJava } from "react-icons/di";
import { SiDjango, SiTableau, SiSelenium, SiPostgresql, SiTensorflow } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";


import { FaHtml5, FaCss3 } from "react-icons/fa";


import spark from "../../Assets/spark.png";
import pandas from "../../Assets/pandas.png";
import beautifulsouppandas from "../../Assets/beautifulsoup.jpg";
import bigdata from "../../Assets/bigdata.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={spark} alt="Apache Spark" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pandas} alt="Apache Spark" style={{ width: "80%", height: "100px" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>

     
   
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau title="Tableau" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 title="HTML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 title="CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
     
  
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium title="Selenium" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={beautifulsouppandas} alt="beautifulsouppandas" style={{ width: "80%", height: "100px" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={bigdata} alt="bigdata" style={{ width: "80%", height: "100px" }} />
      </Col>


      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExcel title="Excel" />
      </Col> */}
   
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau title="Tableau" />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
    </Row>
  );
}

export default Techstack;