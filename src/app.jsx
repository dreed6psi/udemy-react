var React = require('react');
var ThumbnailList = require('./components/thumbnail-list');
//Options object to pass data to badge
var options = {
	thumbnailData:[
					{
					title: 'Inbox',
					num: '15',
					header: 'Thumbnail header',
					description: 'Hey ya this is a thumbnail',
					imgSrc: 'http://media.gettyimages.com/photos/women-practicing-yoga-during-class-in-studio-picture-id583690219'
					},
					{
					title: 'Sent',
					num: '13',
					header: 'Thumbnail header2',
					description: 'Yup Up Yup',
					imgSrc: 'http://media.gettyimages.com/photos/mechanical-picker-in-water-by-cranberry-harvest-aerial-view-picture-id10084632'
					}
				]		
};

//Create/Render class
var element = React.createElement(ThumbnailList, options);
//Render and Place Element
React.render(element, document.querySelector('.container'));