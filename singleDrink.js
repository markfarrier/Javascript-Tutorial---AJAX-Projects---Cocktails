import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
	// console.log('hello there');
	const id = localStorage.getItem('drink');

	// if there's no id
	// only matters when user wipes the cache or first navigates to index.html (and manually goes to drink.html) - only then will there be no id in local storage
	if (!id) {
		window.location.replace('index.html');
	}
	// if there is an id
	else {
		const drink = await fetchDrinks(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		displayDrink(drink);
	}
};

window.addEventListener('DOMContentLoaded', presentDrink);
