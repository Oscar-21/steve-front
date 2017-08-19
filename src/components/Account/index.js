import React, { Component } from 'react';
import CreateEvent from '../CreateEvent';
import UserProfile from '../UserProfile';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      component: <UserProfile />,
    };
  }

  CheckLogIn = () => {
      if ( sessionStorage.getItem('token') == null ) {
        this.props.history.push('/signup'); 
      }
  }


  MakeEventPage = () => {
    console.log(typeof <CreateEvent />);
    this.setState({ component: <CreateEvent /> });
  }

  ProfilePage = () => {
    this.setState({ component: <UserProfile /> });
  }


  render() {
    const AccountNav = {
      marginTop: '15px',
      cursor: 'pointer',
      color: 'blue',
      textDecoration: 'underline',
    };

    return (
      <div>
        {this.CheckLogIn()}
        <h1 style={{marginTop: '50px'}}> Dashboard </h1>
          <nav style={{display: 'flex', flexDirection: 'column' }}>
            <a style={AccountNav} onClick={this.ProfilePage}> Profile </a>
            <a style={AccountNav} onClick={this.MakeEventPage}> Create event </a>
          </nav>
            {this.state.component}
            <button onClick={this.handleTest}> test </button>
      </div>
    );
  }
}
export default Account;
