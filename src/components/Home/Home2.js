import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              * I fall in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />* I am fluent in classics like
              <i>
                <b className="blue">Javascript |Typescript | Java | Python | SQL </b>
              </i>
              <br />
              <br />
              * My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and
                make them available to the public.
              </i>
              <br />
              <br />
              * I also enjoy development with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> Vue.js, React.js, Spring Boot and Django</b>
              </i>
              <br />
              <br />
              <i>
              * I have <b className="blue">3 years </b>of experience in software development and I am a <b className="blue">open-minded person</b> who is always willing to learn new things.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/tsing-01"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/tsing245360961"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/youqing-shao-a5516424a/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/tsing1213/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
