import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <div className="macbook">
                <div className="screen">
                    <div
                        className="viewport"
                        style={{ backgroundImage: `url('${props.imgPath}')` }}
                    ></div>
                </div>
                <div className="base"></div>
                <div className="notch"></div>
            </div>

            <Card.Body
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginTop: "auto" }}
                >
                    <CgWebsite /> &nbsp; Demo
                </Button>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
