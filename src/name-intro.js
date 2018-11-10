import React from 'react';
import './name-intro.css';
export function MyName (){
    const webDev = '<webdev/>';
    return (

     
        <header className='outline-section'>

            <h1>Janet Leon</h1>
            <h2>{webDev}</h2>
           <div className='icons'>
            <a href= 'https://www.linkedin.com/in/janetleon/' target='_blank' rel="noopener noreferrer" > 
            <i className="fab fa-linkedin-in"></i>
            </a>

            <a href= 'https://github.com/jileon' target='_blank' rel="noopener noreferrer" > 
            <i className="fab fa-github">
            </i>
            </a>
            </div>

        </header>

        
    )
}

export default MyName;