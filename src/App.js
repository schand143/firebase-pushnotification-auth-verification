import React, { Component } from 'react';
import firebase from './firebaseConfig';
import Login from './Login';
import Home from './Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();

    const messaging = firebase.messaging();

    messaging
      .requestPermission()
      .then((token) => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log('Token : ', token);
      })
      .catch(() => {
        console.log('error');
      });
  }

  render() {
    return <div>{this.state.user ? <Home /> : <Login />}</div>;
  }
}
export default App;
