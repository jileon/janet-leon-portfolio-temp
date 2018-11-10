import React from 'react';
import './name-intro.css';
export function MyName (){
    const webDev = '<webdev/>';
    return (

     
        <header className='outline-section'>
         <p>full site coming soon</p>
            <h1>Janet Leon</h1>
            <h2>{webDev}</h2>
           <div className='icons'>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-github"></i>
            </div>
        </header>

        
    )
}

export default MyName;