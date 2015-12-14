var React = require('react');
var Dropdown = require('./components/dropdown');
//Options object to pass data to badge
var options = {
	title: 'Choose a dessert',
	items: [
		'Apple Pie',
		'Peach Cobbler',
		'Cream Pie'
	]
};

//Create/Render class
var element = React.createElement(Dropdown, options);
//Render and Place Element
React.render(element, document.querySelector('.container'));