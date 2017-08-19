import React from 'react';

const ButtonToNavigate = ({ title, history }) => (
  <button
    type="button"
    onClick={() => history.push('/Account')}
  >
    {title}
  </button>
);
export default ButtonToNavigate;
