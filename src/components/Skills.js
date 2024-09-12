import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html-img.svg";
import css from "../assets/img/css-img.svg";
import js from "../assets/img/js-img.svg";
import python from "../assets/img/python-img.svg";
import django from "../assets/img/django-img.svg";
import react from "../assets/img/react-img.svg";
import api from "../assets/img/api-img.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Я изучил основы HTML, CSS и JS. Обладаю навыками написания
                программ на Python, создания веб-приложений с использованием
                Django, разработки интерактивных пользовательских интерфейсов с
                помощью React. Также имею опыт работы с API и знаком с Docker.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="js" />
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <img src={python} alt="python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={django} alt="django" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={api} alt="api" />
                  <h5>API</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
    </section>
  );
};
