import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
       password: '',
       email: '',
       token: '',
       foo: '',
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

        <label> Sign up </label>
        <button onClick={this.login}> Sign up </button>
      </div>
    );
  }
}
export default SignUpForm;
