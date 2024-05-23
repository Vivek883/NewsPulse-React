// API key - f3ca9ec3fded4286b0d2d86e69cccd43

import './App.css';

import React, { Component } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={10} country="in" category="general"/>     
      </div>
    )
  }
}