import React, { Component } from 'react';
import firebase from './firebaseConfig';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout(e) {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1> You are log in </h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
