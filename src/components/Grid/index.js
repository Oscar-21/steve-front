/**
*
* Grid
*
*/

import React from 'react';
import './style.css';
import './styleM.css';

const Grid = () => (
  <div>
    <div className="grid">
      <div className="gridItem">
        <img src={require('../../images/gridOne.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridTwo.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridThree.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridFour.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridFour.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridThree.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridTwo.jpg')} className="gridImage" alt="" />
      </div>
      <div className="gridItem">
        <img src={require('../../images/gridOne.jpg')} className="gridImage" alt="" />
      </div>
    </div>
  </div>
);
export default Grid;
