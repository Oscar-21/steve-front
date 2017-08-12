import React from 'react';
import { Link } from 'react-router-dom';

const style = { marginRight: '15px' };

const NavBar = () => (
  <nav>
    <dl style={{display: 'flex'}}>
      <dt style={style}><Link to="/">Home</Link></dt>
      <dt style={style}><Link to="/events">Events</Link></dt>
      <dt style={style}><Link to="/login">Login</Link></dt>
      <dt style={style}><Link to="/signup">Join us</Link></dt>
      <dt style={style}><Link to="/account">Account</Link></dt>
      <dt style={style}><Link to="/about">About</Link></dt>
    </dl>
  </nav>
);
export default NavBar;
