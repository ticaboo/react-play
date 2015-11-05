var React = require('react');
var ReactDOM = require('react-dom');
var Counter = require('./counter.js');
var CountClicker = require('./count-clicker.js');

module.exports = class CounterApp extends React.Component {
  render() {
    var count = this.props.count + 1;

    var message =
      `count: ${count}`;

    return (
      <div>
        <Counter count='1' />
        <CountClicker />
      </div>
    );
  }
}
