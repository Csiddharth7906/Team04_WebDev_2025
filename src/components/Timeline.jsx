import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import Nav from './Nav';

function Timeline() {
    const [ timeline, setTimeline] = useState([]);
      useEffect(() => {
    // Fetch timeline data
    fetch('/timelineData.json')
      .then(res => res.json())
      .then(setTimeline);

  }, []);
  return (
     <> 
     <Nav />
    <div className='bg-gradient-to-br from-orange-500 via-white to-green-500 min-h-screen  '>
        <div className=' '>

        <nav className ="  flex  flex-nowrap gap-4 absolute top-25  bg-white/20 shadow-md px-10 py-5 rounded-full left-70  ">
            {timeline.map((item =>(
                <NavLink
                key={item.id}
                to={`/timeline/${item.id}`}
                className=" flex  flex-row gap-4">
                    {item.id}
                </NavLink>
            )))}
            
        </nav>
        <main className='flex w-full p-5 absolute top-50  '>
            <Outlet />
        </main>
            </div>
      
    </div>
    </>
  )
}

export default Timeline
