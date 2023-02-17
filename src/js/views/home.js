

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Row, Container, Jumbotron } from 'react-bootstrap';
import React, { useContext } from "react";


import { Link, useNavigate } from "react-router-dom";
import ExampleCard from "../component/ExampleCard.jsx";

 export const Home = () => {
  const navigate = useNavigate();
  return (

    <Container>
		
      <Row>
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </Row>
      <Row>
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </Row>
      <Row>
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </Row>
    </Container>
  );
};
export default Home;