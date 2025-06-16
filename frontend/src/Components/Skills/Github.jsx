import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <>
    <h1 className="st">
          Days I <strong className="blue">Code </strong>
        </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
      <GitHubCalendar
        username="Raghav77Agrawal"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
    </>
  );
}

export default Github;