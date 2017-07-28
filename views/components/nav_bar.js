import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">SUV</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to='/items/new'>NEW</Link>
            </li>
            <li>
              <Link to='/items'>ALL</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = nav;