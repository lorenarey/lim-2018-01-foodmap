const requestRestaurants = new XMLHttpRequest();
requestRestaurants.open('GET', 'restaurants.json');
requestRestaurants.onload = function() {
	const data = JSON.parse(this.responseText);
	console.log(data);
};
requestRestaurants.onerror = function() {
console.log('Hay un error');
};
requestRestaurants.send();
