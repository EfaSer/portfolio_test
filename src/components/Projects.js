import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1Img1 from "../assets/img/project1-img1.jpg";
import proj1Img2 from "../assets/img/project1-img2.jpg";
import proj1Img3 from "../assets/img/project1-img3.jpg";
import proj2Img1 from "../assets/img/project2-img1.png";
import proj2Img2 from "../assets/img/project2-img2.png";
import proj2Img3 from "../assets/img/project2-img3.png";
import proj3Img1 from "../assets/img/project3-img1.png";
import proj3Img2 from "../assets/img/project3-img2.png";
import proj3Img3 from "../assets/img/project3-img3.png";
import proLad1 from "../assets/img/it-lad.png";
import proLad2 from "../assets/img/it-lad-stack.png";
import proLad3 from "../assets/img/it-lad-projects.png";
import proYoreactions1 from "../assets/img/yoreactions.png";
import proYoreactions2 from "../assets/img/yoreactions2.png";
import proYoreactions3 from "../assets/img/yoreactions3.png";

import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    [
      {
        title: "Frispes",
        description: "Верстка сайта",
        imgUrl: proj1Img1,
        urlProject: "https://efaser.github.io/frispes/",
      },
      {
        title: "Frispes",
        description: "Верстка сайта",
        imgUrl: proj1Img2,
        urlProject: "https://efaser.github.io/frispes/",
      },
      {
        title: "Frispes",
        description: "Верстка сайта",
        imgUrl: proj1Img3,
        urlProject: "https://efaser.github.io/frispes/",
      },
    ],
    [
      {
        title: "Travel.",
        description: "Верстка сайта",
        imgUrl: proj2Img1,
        urlProject: "https://efaser.github.io/web_tour/",
      },
      {
        title: "Travel.",
        description: "Верстка сайта",
        imgUrl: proj2Img2,
        urlProject: "https://efaser.github.io/web_tour/",
      },
      {
        title: "Travel.",
        description: "Верстка сайта",
        imgUrl: proj2Img3,
        urlProject: "https://efaser.github.io/web_tour/",
      },
    ],
    [
      {
        title: "Brainstorm",
        description: "Разработка сайта",
        imgUrl: proj3Img1,
        urlProject: "https://sergey-efanov.github.io/ru/",
      },
      {
        title: "Brainstorm",
        description: "Разработка сайта",
        imgUrl: proj3Img2,
        urlProject: "https://sergey-efanov.github.io/ru/",
      },
      {
        title: "Brainstorm",
        description: "Разработка сайта",
        imgUrl: proj3Img3,
        urlProject: "https://sergey-efanov.github.io/ru/",
      }
    ],
    [
      {
        title: "IT-АКАДЕМИЯ Lad",
        description: "Участие в верстке сайта",
        imgUrl: proLad1,
        urlProject: "https://lad-academy.ru/main",
      },
      {
        title: "IT-АКАДЕМИЯ Lad",
        description: "Участие в верстке сайта",
        imgUrl: proLad2,
        urlProject: "https://lad-academy.ru/main",
      },
      {
        title: "IT-АКАДЕМИЯ Lad",
        description: "Участие в верстке сайта",
        imgUrl: proLad3,
        urlProject: "https://lad-academy.ru/main",
      },
    ],
    [
      {
        title: "Yoreactions",
        description: "Участие в разработке веб-приложения",
        imgUrl: proYoreactions1,
        urlProject: "https://yoreactions.ru/",
      },
      {
        title: "Yoreactions",
        description: "Участие в разработке веб-приложения",
        imgUrl: proYoreactions2,
        urlProject: "https://yoreactions.ru/",
      },
      {
        title: "Yoreactions",
        description: "Участие в разработке веб-приложения",
        imgUrl: proYoreactions3,
        urlProject: "https://yoreactions.ru/",
      },
    ],
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    В данном разделе вы можете ознакомиться с несколькими моими работами. 
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Frispes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Travel.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Brainstorm</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">IT-АКАДЕМИЯ Lad</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">Yoreactions</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects[0].map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects[1].map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects[2].map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <Row>
                    {projects[3].map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <Row>
                    {projects[4].map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
