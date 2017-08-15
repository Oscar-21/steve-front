import React from 'react';
import { Link } from 'react-router-dom';

const style = { marginRight: '15px' };

const logoutStyle = {
  cursor: 'pointer',
  color: 'blue',
  textDecoration: 'underline',
};

const logout = () => {
  fetch(`http://react.app/api/logout?token=${sessionStorage.getItem('token')}`
  ).then((response) => {
    return response.json();
  }).then((json) => {
    if (json.error) {
      alert(json.error);
    } else if (json.success) {
      alert(json.success); 
      sessionStorage.setItem('token', '');
    }
  });
}

const NavBar = () => (
  <nav>
    <dl style={{display: 'flex'}}>
      <dt style={style}><Link to="/">Home</Link></dt>
      <dt style={style}><Link to="/events">Events</Link></dt>
      <dt style={style}><Link to="/login">Login</Link></dt>
      <dt style={style}><Link to="/signup">Join us</Link></dt>
      <dt style={style}><Link to="/account">Account</Link></dt>
      <dt style={style}><Link to="/about">About</Link></dt>
      <a style={logoutStyle} onClick={logout}><dt style={style}>Logout</dt></a>
    </dl>
  </nav>
);
export default NavBar;
