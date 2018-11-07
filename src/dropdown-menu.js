import React from 'react';
import BurgerButton from './burgerbutton';
import './dropdown-menu.css';
export function DropdownMenu (){
    return (
<div className="dropdown">
  <button className="dropbtn">
  <BurgerButton/>
  </button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
    )
}

export default DropdownMenu;