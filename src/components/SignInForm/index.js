import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
       password: '',
       email: '',
       redirect: [],
    };
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value  });
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value  });
  }

  login = () => {
    const data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://react.app/api/login', {
      method: 'post',
      body: data,
    }).then( response => {
      return response.json();
    }).then( json => { 
      if (json.error) {
        alert(json.error);
      } else if (json.token === false) {
        alert('invalid credentials');
      } else if (json.token !== false) {
        alert('Welcome Back!');
        sessionStorage.setItem('token', json.token);
        this.setState({ redirect: <Redirect to="/login" /> });
      }
    });
  }

  render() {
    return (
      <div>
        <label> Email </label>
        <input type="text" name="email" onChange={this.handleEmail} /> 

        <label> Password </label>
        <input type="text" name="password" onChange={this.handlePassword} /> 

        <button onClick={this.login}> Login </button>
        {this.state.redirect}

      </div>
    );
  }
}
export default SignInForm;
