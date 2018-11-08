import React, { Component } from 'react';
import './App.css';
import MyName from './name-intro';
import DropdownMenu from './dropdown-menu';
import AboutMe from './about';

class App extends Component {
  render() {
    return (

    <section>
       
      <section className="App">
      <DropdownMenu/>
     
       <MyName/>
       <AboutMe/>
      </section>
      </section>

    );
  }
}

export default App;
