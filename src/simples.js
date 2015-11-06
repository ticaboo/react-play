var React = require('react');
var ReactDOM = require('react-dom');


module.exports =	class Simples extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [],
  			text: ''};
    }

		  render() {

		    var message =
		      `Simples - hello`;

		    return <p>{message}</p>;
		  }
		}
