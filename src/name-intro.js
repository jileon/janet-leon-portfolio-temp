import React from 'react';
import './name-intro.css';
export function MyName (){
    const webDev = '<webdev/>';
    return (
        <section  id='outline-section'>
        <header className= 'header-section'>
            <h1>Janet Leon</h1>
            <h2>{webDev}</h2>
        </header>
        </section>
    )
}

export default MyName;