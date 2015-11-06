var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./TodoList');

var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			items: [], 
			text: ''
		};
	},

	
	onChange: function(e) {
		this.setState({text: e.target.value});
	},


	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.text]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},

	deleteItem: function(e) {
		e.preventDefault();
		this.state.items.pop();
		this.setState({
			items: this.state.items
		});
	},


	render: function() {
		return (
			<div>

				<h3>TODO</h3>

				<TodoList items={this.state.items} />

				<form>
					<input onChange={this.onChange} value={this.state.text} />
					<button onClick={this.handleSubmit}>{'Add item #' + (this.state.items.length + 1)}</button>
					<button onClick={this.deleteItem}>{'Delete item #' + (this.state.items.length) }</button>
				</form>

			</div>

		);
	}
});


module.exports = TodoApp;



