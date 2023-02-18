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
            getPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const { results } = await response.json();
                    setStore({ people: results });
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
            }
        }
    };
};

export default getState;
