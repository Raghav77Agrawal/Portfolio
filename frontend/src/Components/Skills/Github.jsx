import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       <h1 style={{fontSize:'2rem',textAlign:'center',padding:'2rem'}}>
          Days I <strong className="blue">Code </strong>
        </h1>
      <GitHubCalendar
        username="Raghav77Agrawal"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;