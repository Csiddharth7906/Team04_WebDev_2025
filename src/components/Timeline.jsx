import React from 'react'
import { useContext } from 'react'

import Nav from './Nav';
import { useAppData } from '../context/DataContext';
function Timeline() {
    const {timeline} = useAppData();
  return (
     <>
     <Nav />
    <div className='w-full min-h-screen flex flex-col '>
        <nav classname ="">
            
        </nav>
      
    </div>
    </>
  )
}

export default Timeline
