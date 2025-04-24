import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kunal Kumar Singh </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I'm currently learning App development,  LLms ,RAG and Machine learning.
            <br />
            I'm expected to graduate from Lovely Professional University, Punjab India  in 2026.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> creating content
            </li>
            <li className="about-activity">
              <ImPointRight /> teaching tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self-Help Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress, with  perfection."{" "}
          </p>
          <footer className="blockquote-footer">ChatGPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
