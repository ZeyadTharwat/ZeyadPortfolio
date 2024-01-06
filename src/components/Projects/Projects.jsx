import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import darkmon from "../../assets/Projects/darkmon.png";
import usedpanda from "../../assets/Projects/usedpanda.png";
import wecre8 from "../../assets/Projects/wecre8.png";
import rasmal from "../../assets/Projects/rasmal.png";
import costal from "../../assets/Projects/costal.png";
import phoenix from "../../assets/Projects/phoenix.png";
import sateur from "../../assets/Projects/sateur.png";
import tiffany from "../../assets/Projects/tiffany.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Projects </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={darkmon}
                            isBlog={false}
                            title="Darkmon"
                            description="Advanced Threat Intelligence Platform is the next-generation solution to measure any organization's exposure risk on the DDC (Dark, Deep & clear) web."
                            demoLink="https://darkmon.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={usedpanda}
                            isBlog={false}
                            title="UsedPanda"
                            description="UsedPanda is the UAE largest online marketplace. Buy your laptops, mobile phones, gym equipment, cosmetics, baby care and much more online in Dubai, Abu Dhabi and all UAE"
                            demoLink="https://usedpanda.com/home"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={wecre8}
                            isBlog={false}
                            title="WeCre8"
                            description="WeCre8 is a cutting-edge multivendor app in Saudi Arabia, uniting over 200 local brands in one convenient platform. "
                            demoLink="https://www.wecre8.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={rasmal}
                            isBlog={false}
                            title="RasMal"
                            description="RasMal is the-all-in-one platform to automate equity management, facilitate fundraising and enhance governance for every company!"
                            demoLink="https://www.rasmal.io/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={costal}
                            isBlog={false}
                            title="Costal Agency"
                            description="Coastal Agency is a digital marketing company specializing in crafting unique brand identities and modern web experiences. "
                            demoLink="https://coastalagency.co/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={phoenix}
                            isBlog={false}
                            title="Phoenix Consultancy"
                            description="Phoenix is a technology-driven company focused on transforming businesses through AI, innovation, machine learning, and automation."
                            demoLink="https://phoenix-consultancy.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={sateur}
                            isBlog={false}
                            title="Satéur"
                            description="Affordable luxury for all. Discover stunning engagement rings and jewelry with lab-grown diamonds, moissanite, and Satéur Gems®. Serving 100k+ clients globally."
                            demoLink="https://www.sateur.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tiffany}
                            isBlog={false}
                            title="Tiffany"
                            description="Discover fine jewelry creations of timeless beauty and superlative craftsmanship that will be treasured always. "
                            demoLink="https://www.tiffany.com/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
