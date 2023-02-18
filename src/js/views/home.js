import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ExampleCard from "../component/ExampleCard.jsx";

const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        {store.planets.map((planet, index) => (
          <div className="col-md-4" key={index}>
            <ExampleCard entity={planet} />
          </div>
        ))}
        {store.people.map((person, index) => (
          <div className="col-md-4" key={index}>
            <ExampleCard entity={person} />
          </div>
        ))}
        {store.vehicles.map((vehicle, index) => (
          <div className="col-md-4" key={index}>
            <ExampleCard entity={vehicle} />
          </div>
        ))}
      </div>
      <hr />
      <h2>Favorites:</h2>
      <div className="row">
        {store.favorites.map((favorite, index) => (
          <div className="col-md-4" key={index}>
            <ExampleCard entity={favorite} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
