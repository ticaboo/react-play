var React = require('react');
var ReactDOM = require('react-dom');

/*
  a + & - button which change count.
  count should be displayed by counter component.
  how react components talk to each other? composing react components

*/

module.exports = class CountClicker extends React.Component {
  decrement() {
    this.props.count -= 1;
  }
  increment() {
      this.props.count += 1;
  }

  render() {
    return(
    <div>
      <input type="button" onClick={this.decrement}>-</input>
        <input type="button" onClick={this.increment}>-</input>
    </div>
  );
  }
}
