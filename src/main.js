var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = require('./todoList');
var TodoApp = require('./todoApp');

/*
var Timer = require('./timer.js');

var start = new Date().getTime();
setInterval(() => {
  ReactDOM.render(
    <Timer elapsed={new Date().getTime() - start} />,
    document.getElementById('container')
  );
}, 50);
*/


ReactDOM.render(<TodoApp />, document.querySelector('#app'));