var React = require('react');

//Exporting Badge Class
module.exports = React.createClass({
	render: function() {
		//When button is clicked looked for whenClicked property(in dropdown)
		return <button onClick= {this.props.whenClicked} className={"btn" + this.props.className} type="button">
			{this.props.title} 
			<span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
		   </button>
		}
	});

