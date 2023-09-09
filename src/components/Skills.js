import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/html-img.svg";
import skill2 from "../assets/img/css-img.svg";
import skill3 from "../assets/img/js-img.svg";
import skill4 from "../assets/img/python-img.svg";
import skill5 from "../assets/img/django-img.svg";
import skill6 from "../assets/img/react-img.svg";
import skill7 from "../assets/img/api-img.svg";
import skill8 from "../assets/img/docker-img1.svg";

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
                  <img src={skill1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill7} alt="Image" />
                  <h5>API</h5>
                </div>
                <div className="item">
                  <img src={skill8} alt="Image" />
                  <h5>Docker</h5>
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
