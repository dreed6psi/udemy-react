var React = require('react');

//Exporting Badge Class
module.exports = React.createClass({
	render: function() {
		return <button className="btn btn-primary" type="button">
			{this.props.title} <span className="badge">{this.props.num}</span>
		   </button>
		}
	});

