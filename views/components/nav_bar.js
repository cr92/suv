import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function nav() {
  return (
    <ul className='nav'>
      <li className="col-xs-2">
        <Link to='/items/new'>ADD</Link>
      </li>
      <li className="col-xs-2">
        <Link to='/items'>HOME</Link>
      </li>
    </ul>
  );
}

module.exports = nav;