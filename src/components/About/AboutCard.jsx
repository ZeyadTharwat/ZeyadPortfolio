import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple"> Zeyad Tharwat</span> from{" "}
                        <span className="purple">Alexandria, Egypt</span>
                        <br />
                        <br />
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
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
