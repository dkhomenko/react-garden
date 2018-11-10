import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>We're going to start {this.props.title}!</div>
    );
  }
}

export default App;
