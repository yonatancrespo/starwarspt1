const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "First item",
					background: "white",
					initial: "white"
				},
				{
					title: "Second item",
					background: "white",
					initial: "white"
				},
				{
					title: "Third item",
					background: "white",
					initial: "white"
				},
			],
			favorites: []
		},
		actions: {
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((item, i) => {
					if (i === index) {
						item.background = color;
					}
					return item;
				});

				setStore({ demo });
			},
			addFavorite: favorite => {
				const store = getStore();
				const favorites = [...store.favorites, favorite];
				setStore({ favorites });
			}
		}
	};
};

export default getState;