import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Col, Container, Row } from "react-bootstrap";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await actions.getCharacter(id);
      setCharacter(data);
    };
    fetchCharacter();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col md={8}>
          {character ? (
            <Card>
              <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <p>Birth year: {character.birth_year}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Height: {character.height}</p>
                  <p>Mass: {character.mass}</p>
                  <p>Skin color: {character.skin_color}</p>
                  <p>Eye color: {character.eye_color}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div>Loading...</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
