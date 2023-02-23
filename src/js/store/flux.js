const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planets: [],
            people: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            getPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const { results } = await response.json();
                    setStore({ planets: results });
                } catch (error) {
                    console.log("getPlanets Error: ", error);
                }
            },
            getCharacter: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const { results } = await response.json();
                    const peopleWithDetails = await Promise.all(results.map(async person => {
                        const detailResponse = await fetch(`https://www.swapi.tech/api/people/${person.uid}`);
                        const { result } = await detailResponse.json();
                        person.height = result.properties.height;
                        person.mass = result.properties.mass;
                        person.gender = result.properties.gender;
                        person.skin_color = result.properties.skin_color;
                        person.eye_color = result.properties.eye_color;
                        person.birth_year = result.properties.birth_year;
                        return person;
                    }));
                    setStore({ people: peopleWithDetails });
                } catch (error) {
                    console.log("getPeople Error: ", error);
                }
            },
            getVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const { results } = await response.json();
                    setStore({ vehicles: results });
                } catch (error) {
                    console.log("getVehicles Error: ", error);
                }
            },
            addFavorite: item => {
                const store = getStore();
                const exists = store.favorites.some(favorite => favorite.uid === item.uid);

                if (!exists) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
            removeFavorite: item => {
                const store = getStore();
                const filteredFavorites = store.favorites.filter(favorite => favorite.uid !== item.uid);
                setStore({ favorites: filteredFavorites });
            },

        }
    };
};

export default getState;
