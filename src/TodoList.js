var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./TodoApp');


var TodoList = React.createClass({

	render: function() {

		var createItem = function(itemText, index) {

			return <li key={index + itemText}>{itemText}</li>;

		};
		

		return <ul>{this.props.items.map(createItem)}</ul>;
	}

});

module.exports = TodoList;