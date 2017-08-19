import React from 'react';
import { Route } from 'react-router-dom';
import ButtonToNavigate from '../ButtonToNavigate';

const SomeComponent = () => (
  <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Navigate" />} />
);
export default SomeComponent;
