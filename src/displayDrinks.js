import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
	const section = get('.section-center');
	const title = get('.title');
	// if there are no drinks found - drinks will be null in this case
	if (!drinks) {
		// hide loading
		hideLoading();

		title.textContent = 'sorry, no drinks matched your search';
		// set section's html to null so that there isn't an error and a display of drinks at the same time, such as from the dummy data
		section.innerHTML = null;
		return;
	}
	// if there are drinks/results from the search
	const newDrinks = drinks
		.map((drink) => {
			const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
			return `<a href="drink.html">
					<article class="cocktail" data-id="${id}">
						<img src="${image}" alt="${name}" />
						<h3>${name}</h3>
					</article>
				</a>`;
		})
		.join('');
	// hide loading
	hideLoading();

	title.textContent = '';
	section.innerHTML = newDrinks;
	return section;
};

export default displayDrinks;
