

import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CharacterDetails } from "./CharacterDetails";

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
    <Card>
      <Card.Body>
        <Card.Title>{entity.name}</Card.Title>
        <Card.Text>{entity.description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <Link to={`/${type}/${entity.uid}`} className="btn btn-primary ml-2">
          Learn more!
        </Link>
        <CharacterDetails />
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
