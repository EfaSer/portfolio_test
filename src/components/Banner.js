import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontender", "Backender"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} xl={7} md={6}>
            <span className="tagline">Добро пожаловать в мое Портфолио!</span>
            <h1>
              {`Привет, я `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quas nihil veritatis vero hic neque, suscipit
              quibusdam officia ex quos non dolore ducimus accusantium esse
              assumenda molestias minima dolorem beatae!
            </p>
            <button onClick={() => console.log("connect")}>
              Связаться <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} xl={5} md={6}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
