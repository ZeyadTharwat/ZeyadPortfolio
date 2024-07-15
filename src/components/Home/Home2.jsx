import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                        Passionate and ambitious Junior Front-End Engineer with
                        more than three years of hands-on experience. With a
                        track record of completing over 30 projects of different
                        sizes. I have a strong desire to learn and build
                        websites. Skilled in HTML, CSS, JavaScript, React,
                        Nextjs, Nodejs, Express, and various frameworks.
                        Experienced in UI/UX design convert and integration of
                        APIs. Committed to staying updated with the latest web
                        development trends
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>
                            with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ZeyadTharwat"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/zeyad-tharwat-90569722b/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:zeyadtharwatcf@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaGoogle />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.upwork.com/freelancers/~01f93a2b0f721f1ffa"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <SiUpwork />
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
