import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiTailwindcss,
    SiPrisma,
    SiSupabase,
    SiStrapi,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 size={50} />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    HTML
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 size={50} />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    CSS
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Tailwind CSS
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Javascript
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Typescript
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    React 
                </p>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Nextjs
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    NodeJS
                </p>
            </Col>


            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Git & Github
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Firebase
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSupabase />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Supabase
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiStrapi />
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Strapi
                </p>
            </Col>
        </Row>
    );
}

export default Techstack;
