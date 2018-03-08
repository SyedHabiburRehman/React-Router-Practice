import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ul>
         <li><Link to="/home">HOME</Link></li>
         <li><Link to="/about">ABOUT</Link></li>
         <li><Link to="/contact">CONTACT</Link></li>
         <li><Link to="/portofolio">PORTOFOLIO</Link></li>
       </ul>
       {this.props.children}
      </div>
    );
  }
}

export default App;
