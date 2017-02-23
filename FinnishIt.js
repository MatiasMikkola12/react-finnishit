import React, { Component } from 'react';
import './FinnishIt.css';

class FinnishIt extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.finnish = this.finnish.bind(this);
}

render() {
  return (
    <div className="FinnishIt">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.finnish}>Make it Finnish!</button>
    </div>
  );
}

finnish() {
  this.setState({ greeting: 'Terve, ' });
}

}

export default FinnishIt;
