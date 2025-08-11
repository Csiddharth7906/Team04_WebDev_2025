import React, { useEffect, useState } from 'react'

const Loading = () => {
    const greet=[
        "Namaste",
        "Namaskara",
        "Jai Jindra",
        "Ram Ram",
        "Hello",
        "Sak sri kal",
        "Vanakkam",
        "Nomoshkar"
    ];
    const [index  , setIndex]=useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev+1) % greet.length)
        },500)

        return ()=> clearInterval(interval)
    },[])
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-orange-400 via-white to-green-400 flex justify-center items-center font-bold'>
        <h1 className='text-4xl '>
            {greet[index]}
        </h1>
      
    </div>
  )
}

export default Loading