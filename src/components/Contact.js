import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Отправить");
    // const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code === 200) {
    //         setStatus({ success: true, message: "Message sent successfully" });
    //     } else {
    //         setStatus({
    //             success: false,
    //             message: "Something went wrong, please try again later",
    //         });
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault()
    
        setButtonText('Отправляется...')
        setTimeout(() => { setButtonText('Отправить') }, 2000);

        
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact"/>
                    </Col>
                    <Col md={6}>
                        <h2>Связаться</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="Имя"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "firstName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Фамилия"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "lastName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Телефон"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col className="px-1">
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Сообщение"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    <button type="button" onClick={(e) => handleSubmit(e)}>
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    {/* {status.message && (
                        <Col>
                            <p
                                className={
                                    status.success === false
                                        ? "danger"
                                        : "success"
                                }
                            >
                                {status.message}
                            </p>
                        </Col>
                    )} */}
                </Row>
            </Container>
        </section>
    );
};
