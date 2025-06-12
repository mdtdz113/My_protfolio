import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import phone from "../assets/img/phone.svg";
import email from "../assets/img/email.svg";
import github from "../assets/img/github.svg";
import { HashLink } from "react-router-hash-link";
import { Cv } from "./Cv.js";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Intern", "Thực tập sinh"];
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
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        {`Hi! I'm Trường `}
                                        <br />{" "}
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1000"
                                            data-rotate='[ "Intern", "Thực Tập Sinh" ]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        I am a student at Hanoi University of
                                        Industry (HaUI). My major is Information
                                        Technology. I aspire to become a
                                        professional software developer,
                                        contributing to the design and
                                        implementation of scalable,
                                        high-performance software systems with a
                                        focus on reliability and efficiency.
                                    </p>
                                    <Cv/>
                                    <div className="item_icon">
                                        <img src={phone} alt="Phone" />
                                        <h5>0889 535 303</h5>
                                    </div>
                                    <div className="item_icon">
                                        <img src={email} alt="email" />
                                        <h5>maidinhtruong113@gmail.com</h5>
                                    </div>
                                    <div className="item_icon">
                                        <img src={github} alt="email" />
                                        <h5>
                                            <a
                                                href="https://github.com/bncoanh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                https://github.com/bncoanh
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
