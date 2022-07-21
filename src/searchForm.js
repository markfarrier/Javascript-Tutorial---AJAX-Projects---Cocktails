import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
// gets the <input> as name is set to drink
const input = get('[name="drink"]');

// every time you press then release a key
form.addEventListener('keyup', function (e) {
	e.preventDefault();
	const value = input.value;
	// if search form is empty
	if (!value) {
		return;
	}
	presentDrinks(`${baseURL}${value}`);
});
