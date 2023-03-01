import React from 'react'
import './headers.css'
const Headers = () => {
  return (
    
    <header className='header'>
        <a href="#" className='logo'>Portafolio.</a>
        <nav className='navbar'>
            <a href=""  className='active i-1'> Home</a>
            <a href="#about" className=' i-2'>About </a>
            <a href="#Skill"  className=' i-3'>Skill</a>
            <a href="#Portafolio" className=' i-4'>Portafolio</a>
            <a href="#Contact" className=' i-5'>Contact</a>
           
        </nav>
    </header>
  )
}

export default Headers