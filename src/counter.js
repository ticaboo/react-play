var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class Counter extends React.Component {
  render() {
    var count = this.props.count + 1;

    var message =
      `count: ${count}`;

    return <p>{message}</p>;
  }
}
