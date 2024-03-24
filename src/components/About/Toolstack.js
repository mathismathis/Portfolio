import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";


import emr from "../../Assets/spark.png";
import airflow from "../../Assets/airflow.png";
import AWS_GLue from "../../Assets/AWS_GLue.png";
import clouldwatch from "../../Assets/clouldwatch.png";
import lambda from "../../Assets/lambda.jpeg";
import athena from "../../Assets/Athena.png";
import ec2 from "../../Assets/ec2.png";
import redshift from "../../Assets/redshift.png";
import sns from "../../Assets/sns.png";
import sqs from "../../Assets/sqs.png";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ec2} alt="ec2" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={emr} alt="emr" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={lambda} alt="lambda" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={athena} alt="athena" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS_GLue} alt="AWS_GLue" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={redshift} alt="redshift" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={airflow} alt="airflow" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sns} alt="sns" style={{ width: "auto", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sqs} alt="sqs" style={{ width: "auto", height: "100px" }} />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
