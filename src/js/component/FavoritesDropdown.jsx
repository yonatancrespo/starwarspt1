import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Context } from "../store/appContext";

export const FavoritesDropdown = () => {
  const { store, actions } = useContext(Context);

  const handleRemoveFavorite = (id) => {
    actions.removeFromFavorites(id);
  };

  const favoritesList = store.favorites.map((item, index) => {
    return (
      <Dropdown.Item key={index}>
        <Link to={`/single/${item.id}`}>{item.name}</Link>
        <span className="float-end">
          <FaTrash onClick={() => handleRemoveFavorite(item.id)} />
        </span>
      </Dropdown.Item>
    );
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Favorites ({store.favorites.length})
      </Dropdown.Toggle>

      <Dropdown.Menu>{favoritesList}</Dropdown.Menu>
    </Dropdown>
  );
};
