import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div onClick={this.props.onClick}>We're going to start {this.props.title}!</div>
        <p><Link to="/about">All about gardening</Link></p>
      </div>
    );
  }
}

export default Home;
