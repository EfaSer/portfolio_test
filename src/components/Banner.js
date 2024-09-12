import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assets/img/banner-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web developer"];
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
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio!</span>
                  <h1>
                    {`Привет, я `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Я начинающий веб-разработчик, который изучил основы
                    веб-технологий, таких как HTML, CSS и JavaScript. Обладаю
                    базовыми навыками создания и стилизации простых веб-страниц.
                    Знаком с различными фреймворками и библиотеками, такими как
                    React и Django, и готов быстро учиться и применять их в
                    практике. Также имею опыт работы с API и понимаю, как
                    взаимодействовать с ними. Готов развиваться и расширять свои
                    навыки веб-разработки.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Связаться <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} xl={5} md={6}>
            <img src={bannerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
