import React, { Component } from 'react';
import './FinnishIt.css';

class FinnishIt extends Component {

  // adding the super(props) because cant acceess this.props without it in the constructor
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.finnish = this.finnish.bind(this);
}
  // pull the greeting (default is english) and name, and allow to call finnish function to switch up the greeting language
render() {
  return (
    <div className="FinnishIt">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.finnish}>Make it Finnish!</button>
    </div>
  );
}

  // function for switching up the greeting to finnish
finnish() {
  this.setState({ greeting: 'Terve, ' });
}

}

export default FinnishIt;
