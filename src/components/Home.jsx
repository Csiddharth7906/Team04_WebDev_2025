import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Horizontal from './Horizontal'

const Home = () => {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-br overflow-hidden from-orange-500 via-white to-green-500'>
        <Nav />
            <div className=' flex flex-col justify-center items-center h-screen  text-center font-bold'>
                <div>
              <h1 className=' max-w-3xl '>
                <span className='text-8xl bg-gradient-to-br from-orange-600 via-20% to-green-600 bg-clip-text text-transparent '>
                    Digital Freedom Gallery
                </span>
                <p className='text-zinc-600 text-md mt-5'>Code a Vision,Design the Nation</p>
              </h1>

                </div>
              <div className='flex block gap-4'>

              <Link to='/gallery' className='px-3  py-3 mt-10  bg-gradient-to-br from-orange-400 to-orange-600 rounded-full text-white hover:scale-105 ' >
                 Explore Gallery 
              </Link>
               <Link to='/timeline' className='px-3  py-3 mt-10 border-2 text-green-500 border-green-600 hover:bg-green-600 hover:text-white   rounded-full' >
                 Explore Gallery 
              </Link>
              </div>
            </div>
            <div className='my-5 text-center text-5xl h-screen'>
           <h1 className='text-zinc-900'>Journey Through Time</h1>
           
                <Horizontal />
           
            </div>
    </div>
  )
}

export default Home