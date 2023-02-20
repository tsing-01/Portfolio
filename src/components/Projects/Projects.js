import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rxcellent from "../../Assets/Projects/rxcellent.png";
import Resort from "../../Assets/Projects/resort.jpeg";
import Cms from "../../Assets/Projects/cms.jpeg";
import liggy from "../../Assets/Projects/liggy.png";
import Market from "../../Assets/Projects/market.png";
import ZebraUI from "../../Assets/Projects/zebraui.png";
import Quickbolt from "../../Assets/Projects/qucikbolt.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liggy}
              isBlog={false}
              title="Liggy Offical Website"
              description="I developed the first offical webiste for car hailing at DiDi. It can support diffrerent languages. Static page makes the webiste having a high score for SEO. Using EJB+HTML+CSS as the technology stack. In addition, it shows fluent on mobile and PC."
              // ghLink="https://www.liggyglobal.com/"
              demoLink="https://www.liggyglobal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ZebraUI}
              isBlog={false}
              title="ZebraUI Components"
              description="This is a component library for team technology at DiDi, which is a collection of reusable UI components. It is based on vue.js like element-ui. ZebraUI can support Driver, Passenger and outside H5 pages. It imporeved the efficiency of development and the quality of the product."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resort}
              isBlog={false}
              title="Universal Beijing Resort APP"
              description="This is mini program for Universal Beijing Resort and it can work on AMAP, Fliggy, AliPay, Taobao for different OS, platforms, versions. I responsible for map moudle, search moudle, 360 panorama moudle, AI system, e-commerce, ticketing system...."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cms}
              isBlog={false}
              title="Universal Beijing Resort CMS"
              description="CMS platform maily for Universal Beijing Resort mini program. I responsible for architecture design, authority management, approval system. It has a efficient performance on real-time view and easy configuration."            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quickbolt}
              isBlog={false}
              title="qucikBolt Platform"
              description="qucikBolt is a low code platform for in-group development. It can help developers to build a project quickly and edit the page flexibly when the page works online. And I developed page analyse robot, which can push data weekly and monthly."            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Market}
              isBlog={false}
              title="Bu MarketPlace"
              description="Bu MarketPlace is a flea to help student to sell their second-hand goods. The project developed by Java + SpringBoot + Mysql and it authorized by bu email. This is a school team project and I responsible the technology architecture design and datebase design."            
              ghLink="https://github.com/BUMETCS673/group-project-team2-python-BUMarketPlace"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rxcellent}
              isBlog={false}
              title="Rxcellent"
              description="Rxcellent is a prescription webiste for patients and doctores. I responsible for project technology architecture design, back-end development and mongoDB design. It is a school team project and we got the first prize in the competition."            
              ghLink="https://github.com/BUMETCS673/group-project-team4-js"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
