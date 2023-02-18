import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const [entity, setEntity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const entity = actions.getSingleEntity(id);
    setEntity(entity);
  }, []);

  return (
    <div className="container">
      {entity && (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://starwars-visualguide.com/assets/img/${store.entity_type}/${id}.jpg`}
              className="w-100"
              alt={entity.name}
            />
          </div>
          <div className="col-md-6">
            <h1>{entity.name}</h1>
            <p>{entity.description}</p>
            <hr />
            <p>
              <strong>Height:</strong> {entity.height}
            </p>
            <p>
              <strong>Mass:</strong> {entity.mass}
            </p>
            <p>
              <strong>Hair color:</strong> {entity.hair_color}
            </p>
            <p>
              <strong>Skin color:</strong> {entity.skin_color}
            </p>
            <p>
              <strong>Eye color:</strong> {entity.eye_color}
            </p>
            <p>
              <strong>Birth year:</strong> {entity.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {entity.gender}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Single;
