import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height:'35vh',width:'25vw'}} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
           <Button  href={props.ghLink} target="_blank" style={{display:'flex',gap:'1rem',backgroundColor:'rgb(39,170,222)'}}  >
          <div style={{ display: 'flex', alignItems: 'center', height: '3vh',backgroundColor:'rgb(14, 175, 250)'}}>
      <BsGithub style={{backgroundColor:'rgb(14, 175, 250)'}} />
    </div>
          
          Github
        </Button>
        </div>
       
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

       
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;