import React, { Component } from 'react';
import firebase from './firebaseConfig';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .then((err) => {
        console.log(err);
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            name='email'
            type='email'
            id='email'
            placeholder='enter email address'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name='password'
            type='password'
            id='password'
            placeholder='enter password'
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button onClick={this.login}> Submit</button>
          <button onClick={this.signup}> SignUp</button>
        </form>
      </div>
    );
  }
}

export default Login;
