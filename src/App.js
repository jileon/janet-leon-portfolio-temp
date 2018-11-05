import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './name-intro';
class App extends Component {
  render() {
    return (
      <section className="App">
       <MyName/>
      </section>
    );
  }
}

export default App;
