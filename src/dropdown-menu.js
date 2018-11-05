import React from 'react';
import BurgerButton from './burgerbutton';
import './dropdown-menu.css';
export function DropdownMenu (){
    return (
<div class="dropdown">
  <button class="dropbtn">
  <BurgerButton/>
  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
    )
}

export default DropdownMenu;