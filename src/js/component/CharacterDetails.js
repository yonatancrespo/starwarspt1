import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const character = store.characters[id];

	const handleAddFavorite = () => {
		actions.addFavorite(character);
	};

	return (
		<div className="container">
			<h1>{character.name}</h1>
			<button onClick={handleAddFavorite}>Add to favorites</button>
		</div>
	);
};
