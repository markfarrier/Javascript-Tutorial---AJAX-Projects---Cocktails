const setDrink = (section) => {
	// console.log(section);
	section.addEventListener('click', function (e) {
		// prevent default so it doesn't navigate away immediately before id is retrieved
		// e.preventDefault();

		// the id is in the parent of the link
		const id = e.target.parentElement.dataset.id;

		// console.log(e.target);
		// console.log(id);

		// no need to use JSON.stringify and JSON.parse, as it's already a string, as it's only 1 item
		localStorage.setItem('drink', id);
	});
};

export default setDrink;
