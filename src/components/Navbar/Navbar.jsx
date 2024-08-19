import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    
    <header className="header">

      <a href="/" className="logo">VILLA</a>

      <nav className="navbar">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Portfolio</a>
      <a href="/">Services</a>
    
    </nav>

    <a href="/" className='button'><button>Schedual a visit</button></a>

    </header>

  
  
  )
}

export default Navbar
