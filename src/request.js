const requestRestaurants = new XMLHttpRequest();
requestRestaurants.open('GET', 'restaurants.json');
requestRestaurants.onload = function() {
	const data = JSON.parse(this.responseText);
		print(data);
};
requestRestaurants.onerror = function() {
console.log('Hay un error');
};
requestRestaurants.send();



