import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <section id='navbar'>
    <nav className='nav'>
         <Logo />
          <h1 >
            Created By Divyanshu
          </h1>
         <Menu /> 
    </nav>
    </section>
  )
}

export default Navbar