import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends Component {

  logout = () => {
    fetch("http://react.app/api/logout?token=" + sessionStorage.getItem('token')
    ).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error) {
        alert(json.error);
      } else if (json.success) {
        alert(json.success);
        sessionStorage.removeItem('token');
        this.props.history.push('/events'); 
      }
    });
  }


  render() { 
    const style = { marginRight: '15px' };

    const logoutStyle = {
      cursor: 'pointer',
      color: 'blue',
      textDecoration: 'underline',
    };
    
    return (
      <nav style={{display: 'flex', flexDirection: 'row'}}>
        <Link style={style} to="/">Home</Link>
        <Link style={style} to="/events">Events</Link>
        <Link style={style} to="/login">Login</Link>
        <Link style={style} to="/signup">Join us</Link>
        <Link style={style} to="/account">Account</Link>
        <Link style={style} to="/about">About</Link>
        <a style={logoutStyle} onClick={this.logout}><dt style={style}>Logout</dt></a>
      </nav>
    );
  }
}
export default withRouter(NavBar);
