/*import React from "react";
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

export default ExampleCard; */

import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ExampleCard = ({ entity, type }) => {
  const { store, actions } = useContext(Context);
  const { addFavorite, removeFavorite } = actions;

  const isFavorited = store.favorites.find((item) => item.uid === entity.uid);

  const handleClick = () => {
    if (isFavorited) {
      removeFavorite(entity);
    } else {
      addFavorite(entity);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/${type}/${entity.uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{entity.name}</Card.Title>
        <Card.Text>{entity.description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <Link to={`/${type}/${entity.uid}`} className="btn btn-primary ml-2">
          Learn more!
        </Link>
      </Card.Body>
    </Card>
  );
};

ExampleCard.propTypes = {
  entity: PropTypes.shape({
    uid: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  type: PropTypes.string,
};

export default ExampleCard;