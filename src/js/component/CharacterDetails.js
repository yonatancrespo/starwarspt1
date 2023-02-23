import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Col, Container, Row } from "react-bootstrap";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState(null);

  async function fetchCharacter() {
    try{
    const response = fetch(`https://www.swapi.tech/api/people/${id}`)
    const processResponse = response.json();
    console.log(processResponse)
    } catch (err) {
    console.log(err)
    }
    }
    

  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col md={8}>
          {character ? (
            <Card>
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <p>Gender: {character.gender}</p>
                  console.log(character.gender)
                  <p>Height: {character.height}</p>
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
