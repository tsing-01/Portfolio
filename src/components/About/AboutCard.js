import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello folks, I am <span className="blue">Youqing Shao (TSing)&nbsp;</span>
            from <span className="blue"> Boston, MA, US.</span>
            <br />I am a graduate student in Computer Science in Boston University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling (China, Turkey, France, Italy, Germany, Vatican etc.)
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness (running, swimming, basketball, badminton etc.)
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography (Once aspired to be a vlogger)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking (try to cook different cuisines)
            </li>
          </ul>
          <br />
          <p className="blue">
            "If you don't know what it's like outside, you try to spread your legs first"
          </p>
          <footer className="blue">--TSing</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
