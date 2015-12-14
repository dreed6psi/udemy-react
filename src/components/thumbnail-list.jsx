var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
	render: function(){
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			// ...thumbnailProps tells react to fill in all the props
			// so no need for the {this.props.title or thumbnailProps.title etc...}
			return <Thumbnail {...thumbnailProps}/>
		});
		return <div> {list} </div>
	}
});