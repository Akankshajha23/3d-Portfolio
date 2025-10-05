import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 md:px-12 lg:px-16 bg-gray-900 bg-transparent'>
    <NavLink to="/" className= "w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 items-center justify-center flex font-bold shadow-md hover:bg-gray-700 transition-colors">
      <p className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-lg">AJ</p>
    </NavLink>
    <nav className='flex text-lg gap-8 md:gap-10 font-medium'>
      <NavLink to= "/about" className= {({isActive})=> isActive ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100 transition-colors'}>
        About
      </NavLink>

      <NavLink to= "/projects" className= {({isActive})=> isActive ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100 transition-colors'}>
        Projects
      </NavLink>

      <NavLink to= "/contact" className= {({isActive})=> isActive ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100 transition-colors'}>
        Contact
      </NavLink>
    </nav>
    </header>
  )
}

export default Navbar