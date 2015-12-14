var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
	render: function() {
		return <div className="thumbnail">
			      <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
			      <div className="caption">
			        <h3>{this.props.header}</h3>
			        <p>{this.props.description}</p>
			        <p>
			        <Button title={this.props.title} num = {this.props.num}/>			        
			        </p>
			      </div>
			    </div>
				}
			});