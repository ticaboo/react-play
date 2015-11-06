var React = require('react');
var ReactDOM = require('react-dom');

module.exports =  class TodoList extends React.Component {

	render() {
		console.log('list render()');
		var createItem = function(itemText, index) {

			return <li key={index + itemText}>{itemText}</li>;

		};


		return <ul>{this.props.items.map(createItem)}</ul>;
	}

};
