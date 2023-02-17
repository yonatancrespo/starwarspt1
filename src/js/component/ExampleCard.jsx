import React from "react";
import { Card, Button } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ExampleCard = () => {
  return (
 
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex align-items-center">
          <Button variant="primary" style={{ marginRight: "10rem" }}> Learn More</Button>
        <Button variant="outline-secondary"><FontAwesomeIcon icon={faHeart} /></Button>
        </div>
      </Card.Body>
    </Card>
  
  );
};

export default ExampleCard;

