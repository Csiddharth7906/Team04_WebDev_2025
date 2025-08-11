import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


  return (
    <div className='fixed top-4 flex w-100 left-1/2 -translate-x-1/2 '>
      <nav className='backdrop-blur-lg gap-4 w-full justify-between flex  bg-white/20  items-center rounded-2xl shadow-md px-4 py-3'>
        <Link
        to='/'
        className='text-lg hover:text-blue-400 cursor-pointer'
        >
          Home</Link>
           <Link
        to='/timeline'
        className='text-lg hover:text-blue-400 cursor-pointer'
        >
          Timeline</Link>
           <Link
        to='/gallery'
        className='text-lg hover:text-blue-400 '
        >Gallery
          </Link>
      </nav>

    </div>
  )
}

export default Nav