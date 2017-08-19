import React from 'react';
import SignInForm from '../SignInForm';

const SignIn = (props) => (
  <div>
    <SignInForm check={props.stuff} />
  </div>
);
export default SignIn;
