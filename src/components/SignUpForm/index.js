import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
       userName: '',
       password: '',
       email: '',
       avatar: '',
       preview: '',
    };
  }

  handleUserName = (e) => {
    this.setState({ userName: e.target.value  });
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value  });
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value  });
  }


  handleAvatar = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ avatar: file, preview: reader.result });
    };
    reader.readAsDataURL(file);
  }

  storeUser = () => {
    const data = new FormData();
    data.append('username', this.state.userName);
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    data.append('avatar', this.state.avatar);

    fetch('http://react.app/api/SignUp', {
      method: 'post',
      body: data,
    }).then( response => {
      return response.json();
    }).then( json => { 
      if (json.success) {
        alert(json.success);
      } else if (json.error) {
        alert(json.error);
      }
    });
  }

  render() {
    return (
      <div>
        <label> Email </label>
        <input type="text" name="email" onChange={this.handleEmail} /> 

        <label> Username </label>
        <input type="text" name="email" onChange={this.handleUserName} /> 

        <label> Password </label>
        <input type="text" name="password" onChange={this.handlePassword} /> 

        <label> Upload Profile Picture </label>
        <input type="file" name="avatar" onChange={this.handleAvatar} />
        <img src={this.state.preview} alt="" /> 

        <label> Sign up </label>
        <button onClick={this.storeUser}> Sign up </button>
      </div>
    );
  }
}
export default SignUpForm;