import React, { Component } from 'react';
import './App.css';
import MyName from './name-intro';
import DropdownMenu from './dropdown-menu';

class App extends Component {
  render() {
    return (
     
      <section className="App">
       <DropdownMenu/>
       <MyName/>
      </section>
    );
  }
}

export default App;
